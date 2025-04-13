const { generateLayout } = require('./layout_generator.js');
const { generateWordLibrary, generateClueForWord } = require('./dataRetriever.js');
const assert = require('assert');

/**
 * Removes duplicate words or phrases that share common words,
 * keeping the shorter of two duplicates
 * @param {string[]} stringList - List of word phrases
 * @returns {string[]} - Filtered list with duplicates removed
 */
function removeDuplicatesWithCommonWords(stringList) {
    let filteredList = [];
    let seenWords = new Set();

    for (let phrase of stringList) {
        let words = new Set(phrase.split(" "));

        // Check if any word in the current set has been seen before
        if ([...words].some(word => seenWords.has(word))) {
            let duplicateIndex = -1;
            for (let i = 0; i < filteredList.length; i++) {
                let existingWords = new Set(filteredList[i].split(" "));
                if ([...existingWords].some(word => words.has(word))) {
                    duplicateIndex = i;
                    break;
                }
            }

            // If the current phrase is shorter than the duplicate, replace it
            if (duplicateIndex !== -1 && phrase.length < filteredList[duplicateIndex].length) {
                filteredList[duplicateIndex] = phrase;
            }
        } else {
            filteredList.push(phrase);
            words.forEach(word => seenWords.add(word));
        }
    }

    return filteredList;
}

/**
 * Cleans and formats the word list from API response
 * @param {string[]} response - Raw response entries
 * @returns {string[]} - Cleaned word list
 */
function cleanWordPrompt(response) {
    let cleanedResponse = response.filter(element => element.length > 0);
    cleanedResponse = cleanedResponse.map(element => element.replace(/[^a-zA-Z ]/g, ''));
    cleanedResponse = cleanedResponse.map(element => element.trim().toLowerCase());
    cleanedResponse = cleanedResponse.filter(element => element.split(' ').length < 3);
    return cleanedResponse;
}

/**
 * Formats word and clue data for the layout generator
 * @param {string[]} wordList - List of words
 * @param {string[]} clues - List of clues
 * @returns {Object[]} - Formatted data for generator
 */
function parseToGeneratorFormat(wordList, clues) {
    return wordList.map((word, index) => ({
        clue: clues[index],
        answer: word
    }));
}

/**
 * Formats layout generator output for the React component
 * @param {Object[]} output_json - Generator output
 * @returns {Object} - Formatted data for component
 */
function parseToComponentFormat(output_json) {
    return output_json.reduce((acc, element) => {
        const entry = {
            clue: element.clue,
            answer: element.answer.toUpperCase(),
            row: element.starty - 1,
            col: element.startx - 1
        };

        const key = element.orientation === 'across' ? 'across' : 'down';
        acc[key][element.position] = entry;
        return acc;
    }, { across: {}, down: {} });
}

/**
 * Main pipeline function to process words and clues for crossword generation
 * @param {string} topic - Crossword topic
 * @param {number} numberOfWords - Number of words to generate
 * @param {string} clueStyle - Style of clues
 * @returns {Object} - Formatted crossword data ready for component
 */
async function processWordClues(topic, numberOfWords, clueStyle) {
    let wordList = [];
    
    // Generate words until we reach the desired number
    do {
        assert(numberOfWords - wordList.length > 0, 'numberOfWords-wordList.length is negative');
        
        const response = await generateWordLibrary(topic, numberOfWords - wordList.length, wordList);
        const responseEntryList = response.content.split('\n');
        const cleanResponse = cleanWordPrompt(responseEntryList);
        
        wordList = wordList.concat(cleanResponse);
        wordList = removeDuplicatesWithCommonWords(wordList);
        wordList = wordList.slice(0, numberOfWords);
    } while (numberOfWords !== wordList.length);

    // Generate clues for each word
    const responseList = await Promise.all(wordList.map(word => generateClueForWord(word, clueStyle)));
    const clueList = responseList.map((response, ind) => 
        response.content.toLowerCase().replace(wordList[ind].toLowerCase(), '______'));

    // Format and generate layout
    const generatorJson = parseToGeneratorFormat(wordList, clueList);
    const layout = generateLayout(generatorJson); 
    const cleanedLayout = layout.result.filter(element => element.position !== undefined);
    const componentFormat = parseToComponentFormat(cleanedLayout);
    
    return componentFormat;
}

module.exports = { processWordClues };

// processWordClues('sea', 10, 'cryptic')
