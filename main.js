const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const axios = require('axios');
const { generateLayout } = require('./Crossword-Layout-Generator/layout_generator.js');
const { generateWordLibrary, generateClueForWord } = require('./main/dataRetriever.js');
if (require('electron-squirrel-startup')) app.quit();

// function createMainWindow() {
//     const mainWindow = new BrowserWindow({
//         title: 'Electron',
//         width: 1000,
//         height: 600,
//         webPreferences: { webSecurity: false },
//     });

//     // const startUrl = url.format({
//     //     pathname: path.join(__dirname, './ui/build/index.html'),
//     //     protocol: 'file:',
//     // })

//     // mainWindow.loadURL(startUrl);
//     mainWindow.loadURL('http://localhost:3000');

//     // // Wait for the window to be ready
//     // mainWindow.once('ready-to-show', () => {
//     //     // Get the size of the content
//     //     const [contentWidth, contentHeight] = mainWindow.getContentSize();

//     //     // Set the size of the window to match the content
//     //     mainWindow.setSize(contentWidth, contentHeight);
//     // });

//     resp = axios.post('http://localhost:1234/v1/chat/completions', {
//         messages: [
//             { role: 'system', content: 'Always answer in rhymes.' },
//             { role: 'user', content: 'Introduce yourself.' }
//         ],
//         temperature: 0.7,
//         max_tokens: -1,
//         stream: false
//     }).then(response => {
//         response.data.choices[0].message;
//     })
//         .catch(error => {
//             console.error(error);
//         });

//     // input_json = [{ "clue": "that which is established as a rule or model by authority, custom, or general consent", "answer": "standard" }, { "clue": "a machine that computes", "answer": "computer" }, { "clue": "the collective designation of items for a particular purpose", "answer": "equipment" }, { "clue": "an opening or entrance to an inclosed place", "answer": "port" }, { "clue": "a point where two things can connect and interact", "answer": "interface" }]

//     // var layout = generateLayout(input_json);
//     // var rows = layout.rows;
//     // var cols = layout.cols;
//     // var table = layout.table;
//     // var output_html = layout.table_string; // table as plain text (with HTML line breaks)
//     // var output_json = layout.result; // words along with orientation, position, startx, and starty
//     // console.log(output_json);

// }

// app.on('ready', createMainWindow);

wordCluePair = generateWordLibrary('ocean', 5)
    .then(response => {
        const wordList = response.content.split('\n').map(element => element.replace(/[^a-zA-Z]/g, ''))
        console.log(wordList)

        let cluesPromises = wordList.map(word => generateClueForWord(word, 'cryptic')
            .then(response => response.content)
        );

        return Promise.all(cluesPromises)
            .then(clues => {
                const wordClues = wordList.map((word, index) => {
                    return {
                        "clue": clues[index],
                        "answer": word
                    };
                });
                return wordClues;

            })
    }
    )
    .catch(error => {
        console.error(error);
    });

wordCluePair.then(response => {
    var layout = generateLayout(response);
    var output_json = layout.result; // words along with orientation, position, startx, and starty
    console.log(output_json);
    console.log('\n\n');

    let converted = {
        'across': {},
        'down': {}
    }

    output_json.forEach(element => {
        const entry = {
            'clue': element['clue'],
            'answer': element['answer'],
            'row': element['starty'] - 1,
            'col': element['startx'] - 1
        }
        if (element['orientation'] == 'across') {
            converted['across'][element['position']] = entry
        }
        else {
            converted['down'][element['position']] = entry
        }
    });

    console.log(converted)

})

// let saved = [
//     {
//         clue: " A sea dweller builds its home from calcium carbonate, often sharing habitat with the ocean's most vibrantly hued inhabitants.", answer: 'Coral'
//     },
//     {
//         clue: ' A force that lifts boats twice daily, with no help from tides. (Answer: Lifting)',
//         answer: 'Tide'
//     },
//     {
//         clue: " A sea of tangled weeds, a sailor's dread, where Neptune's realm confines this floating bed.",
//         answer: 'Sargasso'
//     },
//     {
//         clue: ' A tiny crustacean found in vast swarms, vital food source for great white and orca feasts.',
//         answer: 'Krill'
//     },
//     {
//         clue: ' Vast depths hidden beneath, where no light can penetrate through.',
//         answer: 'Abyss'
//     },
//     {
//         clue: " From underwater groves grows this crunchy seaweed that's popular in Japanese cuisine.",
//         answer: 'Kelp'
//     },
//     {
//         clue: ' A body of water often found between continents, where you might find dolphins and coral reefs.',
//         answer: 'Lagoon'
//     },
//     {
//         clue: ' A ripple of water may cause this, but it also signifies a group of people on land.',
//         answer: 'Wave'
//     },
//     {
//         clue: ' A coral community where fish thrive and ships may perish (6)',
//         answer: 'Reef'
//     },
//     {
//         clue: " A night creature's glow shows off its secret light show, created through biochemistry at a cellular level.",
//         answer: 'Bioluminescence'
//     }
// ]