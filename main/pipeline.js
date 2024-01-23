const { generateLayout } = require('./layout_generator.js');
const { generateWordLibrary, generateClueForWord } = require('./dataRetriever.js');
const assert = require('assert');

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


function cleanWordPrompt(response) {
    let cleanedResponse;
    cleanedResponse = response.filter(element => element.length > 0);
    cleanedResponse = cleanedResponse.map(element => element.replace(/[^a-zA-Z ]/g, ''));
    cleanedResponse = cleanedResponse.map(element => element.trim().toLowerCase());
    cleanedResponse = cleanedResponse.filter(element => element.split(' ').length < 3);
    // cleanedResponse = removeDuplicatesWithCommonWords(cleanedResponse);
    return cleanedResponse;
}


function parseToGeneratorFormat(wordList, clues) {
    return wordList.map((word, index) => ({
        clue: clues[index],
        answer: word
    }));
}

function parseToComponentFormat(output_json) {
    return output_json.reduce((acc, element) => {
        const entry = {
            clue: element.clue,
            answer: element.answer,
            row: element.starty - 1,
            col: element.startx - 1
        };

        const key = element.orientation === 'across' ? 'across' : 'down';
        acc[key][element.position] = entry;
        return acc;
    }, { across: {}, down: {} });
}



async function processWordClues(topic, numberOfWords, clueStyle) {
    let wordList = [];
    do {
        assert(numberOfWords - wordList.length > 0, 'numberOfWords-someList.length is negative')
        let response = await generateWordLibrary(topic, numberOfWords - wordList.length, bannedWords = wordList);
        let responseEntryList = response.content.split('\n');
        // let slicedEntryList = responseEntryList.slice(0, numberOfWords-wordList.length);
        let cleanResponse = cleanWordPrompt(responseEntryList/*slicedEntryList*/);
        wordList = wordList.concat(cleanResponse);

        wordList = removeDuplicatesWithCommonWords(wordList);
        wordList = wordList.slice(0, numberOfWords);

    }
    while (numberOfWords !== wordList.length)

    const responseList =await Promise.all(wordList.map(word => generateClueForWord(word, clueStyle)));
    const clueList = responseList.map((response, ind) => response.content.toLowerCase().replace(wordList[ind].toLowerCase(), 'gi'), '______');

    const generatorJson = parseToGeneratorFormat(wordList, clueList);
    const layout = generateLayout(generatorJson); 
    const cleanedLayout = layout.result.filter(element => element.position !== undefined)
    const componentFormat = parseToComponentFormat(cleanedLayout);
    // console.log(componentFormat);
    return componentFormat;
}

module.exports = { processWordClues };

// processWordClues('sea', 10, 'cryptic')
