const { generateLayout } = require('../layout_generator.js');
const dataService = require('./dataService');
const { 
    removeDuplicatesWithCommonWords, 
    cleanWordPrompt, 
    parseToGeneratorFormat, 
    parseToComponentFormat 
} = require('../utils/dataProcessingUtils');
const assert = require('assert');

/**
 * Service for crossword generation and management
 */
class CrosswordService {
    /**
     * Main pipeline function to process words and clues for crossword generation
     * @param {string} topic - Crossword topic
     * @param {number} numberOfWords - Number of words to generate
     * @param {string} clueStyle - Style of clues
     * @returns {Object} - Formatted crossword data ready for component
     */
    async generateCrossword(topic, numberOfWords, clueStyle) {
        try {
            // Generate word list
            const wordList = await this.generateWordList(topic, numberOfWords);
            
            // Generate clues for each word
            const clueList = await this.generateClues(wordList, clueStyle);
            
            // Generate and format crossword layout
            return this.generateAndFormatLayout(wordList, clueList);
        } catch (error) {
            console.error('Error generating crossword:', error);
            throw new Error(`Failed to generate crossword: ${error.message}`);
        }
    }

    /**
     * Generates word list based on topic
     * @param {string} topic - Topic for word generation
     * @param {number} numberOfWords - Number of words to generate
     * @returns {Promise<string[]>} - List of words
     */
    async generateWordList(topic, numberOfWords) {
        let wordList = [];
        
        // Generate words until we reach the desired number
        do {
            assert(numberOfWords - wordList.length > 0, 'numberOfWords-wordList.length is negative');
            
            const response = await dataService.generateWordLibrary(
                topic, 
                numberOfWords - wordList.length, 
                wordList
            );
            
            const responseEntryList = response.content.split('\n');
            const cleanResponse = cleanWordPrompt(responseEntryList);
            
            wordList = wordList.concat(cleanResponse);
            wordList = removeDuplicatesWithCommonWords(wordList);
            wordList = wordList.slice(0, numberOfWords);
        } while (numberOfWords !== wordList.length);

        return wordList;
    }

    /**
     * Generates clues for a list of words
     * @param {string[]} wordList - List of words
     * @param {string} clueStyle - Style of clues
     * @returns {Promise<string[]>} - List of clues
     */
    async generateClues(wordList, clueStyle) {
        const responseList = await Promise.all(
            wordList.map(word => dataService.generateClueForWord(word, clueStyle))
        );
        
        return responseList.map((response, ind) => 
            response.content.toLowerCase().replace(wordList[ind].toLowerCase(), '______')
        );
    }

    /**
     * Generates and formats crossword layout
     * @param {string[]} wordList - List of words
     * @param {string[]} clueList - List of clues
     * @returns {Object} - Formatted crossword data
     */
    generateAndFormatLayout(wordList, clueList) {
        // Format and generate layout
        const generatorJson = parseToGeneratorFormat(wordList, clueList);
        const layout = generateLayout(generatorJson); 
        const cleanedLayout = layout.result.filter(element => element.position !== undefined);
        return parseToComponentFormat(cleanedLayout);
    }
}

module.exports = new CrosswordService(); 