const axios = require('axios');

/**
 * Generates a library of words related to a specific topic
 * @param {string} topic - The topic for word generation
 * @param {number} sizeOfCrossword - Number of words to generate
 * @param {string[]} bannedWords - Words to exclude from generation
 * @returns {Promise<object>} - Response message containing generated words
 */
async function generateWordLibrary(topic, sizeOfCrossword, bannedWords = []) {
    try {
        const response = await axios.post('http://127.0.0.1:1234/v1/chat/completions', {
            messages: [
                { role: 'system', content: `Generate a list of unique, semantically different words related to a specific topic. The words can explore related concepts but should be distinct and relevant to the topic. No more than two words per entry. One entry per line. Following words must not be used: ${bannedWords}` },
                { role: 'user', content: `I need a list of words for a crossword. The topic is ${topic}. Please generate ${sizeOfCrossword} words. Output only words.` }
            ],
            temperature: 0.7,
            max_tokens: 150,
            stream: false
        });
        return response.data.choices[0].message;
    } catch (error) {
        console.error('Error generating word library:', error.message);
        throw new Error('Failed to generate word library');
    }
}

/**
 * Generates a clue for a specific word
 * @param {string} word - The word to create a clue for
 * @param {string} styleOfClue - Style of clue to generate
 * @returns {Promise<object>} - Response message containing generated clue
 */
async function generateClueForWord(word, styleOfClue) {
    try {
        const response = await axios.post('http://127.0.0.1:1234/v1/chat/completions', {
            messages: [
                { role: 'system', content: `Create a clue in the style specified. The clue should be engaging, adhering to the style, and should describe the word without naming it directly.` },
                { role: 'user', content: `Create a clue for the word '${word}' in a ${styleOfClue} style. The clue should be one or two sentences long.` }
            ],
            temperature: 0.7,
            max_tokens: 50,
            stream: false
        });
        return response.data.choices[0].message;
    } catch (error) {
        console.error('Error generating clue:', error.message);
        throw new Error(`Failed to generate clue for word: ${word}`);
    }
}

module.exports = { generateWordLibrary, generateClueForWord };