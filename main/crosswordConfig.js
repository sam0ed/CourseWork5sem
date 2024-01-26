const { ipcMain } = require('electron');
const { processWordClues } = require('./pipeline.js');
const assert = require('assert');

clueStyleOptions = ['cryptic', 'humorous', 'pessimistic']
sizeOptions = {
    'small': 10,
    'medium': 20,
    'large': 30
};

crosswordState = null;


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

        // // TODO: comment this section out. It's just for testing
        // let testData = {
        //     across: {
        //         1: {
        //             clue: 'one plus one',
        //             answer: 'TWO',
        //             row: 0,
        //             col: 0,
        //         },
        //     },
        //     down: {
        //         2: {
        //             clue: 'three minus two',
        //             answer: 'ONE',
        //             row: 0,
        //             col: 2,
        //         },
        //     },
        // }
        // // test reply below
        // event.reply('crossword:dataAccept', testData)
        processWordClues(topic, sizeOptions[size], clueStyle).then(data => {
            event.reply('crossword:dataAccept', data);
            console.log(data);
        });


    })

}


module.exports = { setupCrosswordCommunication };
