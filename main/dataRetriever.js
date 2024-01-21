const axios = require('axios');

function generateWordLibrary(topic, sizeOfCrossword) {
    return axios.post('http://localhost:1234/v1/chat/completions', {
        messages: [
            { role: 'system', content: 'Generate a list of unique, semantically different words related to a specific topic. The words can explore related concepts but should be distinct and relevant to the topic. No more than two words per entry.' },
            { role: 'user', content: `I need a list of words for a crossword. The topic is ${topic}. Please generate ${sizeOfCrossword} words. Output only words.` }
        ],
        temperature: 0.7,
        max_tokens: 150,
        stream: false
    }).then(response => {
        return response.data.choices[0].message;
    })
    .catch(error => {
        console.error(error);
    });
}

function generateClueForWord(word, styleOfClue) {
    return axios.post('http://localhost:1234/v1/chat/completions', {
        messages: [
            { role: 'system', content: `Create a clue in the style specified. The clue should be engaging, adhering to the style, and should describe the word without naming it directly.` },
            { role: 'user', content: `Create a clue for the word '${word}' in a ${styleOfClue} style. The clue should be one or two sentences long.` }
        ],
        temperature: 0.7,
        max_tokens: 50,
        stream: false
    }).then(response => {
        return response.data.choices[0].message;
    })
    .catch(error => {
        console.error(error);
    });
}

module.exports = {generateWordLibrary, generateClueForWord };