const { ipcMain } = require('electron');
const { processWordClues } = require('./pipeline.js');
const assert = require('assert');

clueStyleOptions = ['cryptic', 'humorous']
sizeOptions = {
    'small': 10,
    'medium': 20,
    'large': 30
};


function setupCrosswordCommunication() {
    ipcMain.on('crossword:renderedRequest', (event) => {
        console.log(`request for config received`);
        event.reply('crossword:renderedAccept', clueStyleOptions, Object.keys(sizeOptions));
        console.log('config sent');
    })

    ipcMain.on('crossword:dataRequest', (event, topic, size, clueStyle) => {
        // console.log(topic, size, clueStyle)
        assert(clueStyleOptions.includes(clueStyle), `clueStyle must be one of ${clueStyleOptions}`)
        assert(sizeOptions.hasOwnProperty(size), `numberOfWords must be one of ${sizeOptions}`);
        
        // console.log(`request for data received`);
        processWordClues(topic, sizeOptions[size], clueStyle).then(data => {
            event.reply('crossword:dataAccept', data);
            console.log('data sent');
        });
    })

}


module.exports = { setupCrosswordCommunication };
