const { ipcMain } = require('electron');
const { CLUE_STYLE_OPTIONS, SIZE_OPTIONS } = require('./constants');
const crosswordService = require('../services/crosswordService');
const assert = require('assert');

/**
 * Sets up IPC communication for crossword generation functionality
 */
function setupCrosswordCommunication() {
    // Handle request for configuration options
    ipcMain.on('crossword:renderedRequest', (event) => {
        console.log('Request for config received');
        event.reply('crossword:renderedAccept', CLUE_STYLE_OPTIONS, Object.keys(SIZE_OPTIONS));
        console.log('Config sent');
    });

    // Handle request for crossword data generation
    ipcMain.on('crossword:dataRequest', async (event, topic, size, clueStyle) => {
        try {
            // Validate inputs
            assert(CLUE_STYLE_OPTIONS.includes(clueStyle), `clueStyle must be one of ${CLUE_STYLE_OPTIONS}`);
            assert(SIZE_OPTIONS.hasOwnProperty(size), `numberOfWords must be one of ${Object.keys(SIZE_OPTIONS)}`);
            
            // Generate crossword data
            const data = await crosswordService.generateCrossword(topic, SIZE_OPTIONS[size], clueStyle);
            event.reply('crossword:dataAccept', data);
            console.log('Data generated and sent');
        } catch (error) {
            console.error('Error generating crossword data:', error);
            event.reply('crossword:dataError', error.message);
        }
    });
}

module.exports = { setupCrosswordCommunication }; 