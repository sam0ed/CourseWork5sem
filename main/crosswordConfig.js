const { ipcMain } = require('electron');
const { processWordClues } = require('./pipeline.js');
const assert = require('assert');

const clueStyleOptions = ['cryptic', 'humorous', 'pessimistic'];
const sizeOptions = {
    'small': 10,
    'medium': 20,
    'large': 30
};

let crosswordState = null;

/**
 * Sets up IPC communication for crossword generation functionality
 */
function setupCrosswordCommunication() {
    // Handle request for configuration options
    ipcMain.on('crossword:renderedRequest', (event) => {
        console.log('Request for config received');
        event.reply('crossword:renderedAccept', clueStyleOptions, Object.keys(sizeOptions));
        console.log('Config sent');
    });

    // Handle request for crossword data generation
    ipcMain.on('crossword:dataRequest', async (event, topic, size, clueStyle) => {
        try {
            // Validate inputs
            assert(clueStyleOptions.includes(clueStyle), `clueStyle must be one of ${clueStyleOptions}`);
            assert(sizeOptions.hasOwnProperty(size), `numberOfWords must be one of ${Object.keys(sizeOptions)}`);
            
            // Generate crossword data
            const data = await processWordClues(topic, sizeOptions[size], clueStyle);
            event.reply('crossword:dataAccept', data);
            console.log('Data generated and sent');
        } catch (error) {
            console.error('Error generating crossword data:', error);
            event.reply('crossword:dataError', error.message);
        }
    });
}

module.exports = { setupCrosswordCommunication };
