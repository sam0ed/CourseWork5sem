import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { Dots } from "react-activity";
import { Crossword as ImportedCrossword, CrosswordProviderImperative } from '@jaredreisinger/react-crossword';
import Confetti from 'react-confetti';
import '../styles/index.css';

export default function CrosswordPage() {
    // console.log('crossword page is rendered here')
    // localStorage.clear();

    const [theme, setTheme] = useState(localStorage.getItem('theme') || '');
    const [clueStyle, setClueStyle] = useState(localStorage.getItem('clueStyle') || '');
    const [size, setSize] = useState(localStorage.getItem('size') || '');
    const [clueStyleOptions, setClueStyleOptions] = useState([]);
    const [sizeOptions, setSizeOptions] = useState([]);
    const crosswordRef = useRef<CrosswordProviderImperative>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [popupClass, setPopupClass] = useState('');
    // const [crosswordData, setCrosswordData] = useState('');

    let defaultCrosswordData;
    if (localStorage.getItem('crosswordData') === null) {
        defaultCrosswordData = '';
    }
    else {
        defaultCrosswordData = JSON.parse((localStorage.getItem('crosswordData') as any));
    }
    const [crosswordData, setCrosswordData] = useState(defaultCrosswordData);

    const allFieldsFilled = theme && clueStyle && size;

    useEffect(() => {
        localStorage.setItem('theme', theme);
        localStorage.setItem('clueStyle', clueStyle);
        localStorage.setItem('size', size);
    }, [theme, clueStyle, size]);

    useEffect(() => {
        console.log(JSON.stringify(crosswordData), ' is saved into local storage')
        // console.log(JSON.parse((localStorage.getItem('crosswordData') as any)) )
        localStorage.setItem('crosswordData', JSON.stringify(crosswordData));
    }, [crosswordData])

    const ipcRenderer = (window as any).ipcRenderer;

    ipcRenderer.on('crossword:dataAccept', (data: any) => {
        setIsLoading(false);
        setCrosswordData(data);
    });
    ipcRenderer.on('crossword:renderedAccept', (clueStyleOptionsParam: any, sizeOptionsParam: any) => {
        setClueStyleOptions(clueStyleOptionsParam);
        setSizeOptions(sizeOptionsParam);
    });
    ipcRenderer.on('mainWindow:close', () => { localStorage.clear();});
    console.log('the component is rerendererd')

    useEffect(() => {
        // localStorage.clear();
        // console.log('clearing use effect is run now')
        ipcRenderer.send('crossword:renderedRequest');
    }, []);

    function generateCrosswordData(topic: any, size: any, clueStyle: any) {
        ipcRenderer.send('crossword:dataRequest', topic, size, clueStyle);
        setIsLoading(true);
    }
    function checkCrossword() {
        const correct = crosswordRef.current?.isCrosswordCorrect() || false;
        setIsCorrect(correct);
        setShowPopup(true);
        setPopupClass('popup-enter');
    }

    function closePopup() {
        setPopupClass('popup-leave');
        setTimeout(() => setShowPopup(false), 500); // match this with the animation duration
    }

    return (
        <div className="page-container">

            {isCorrect &&
                <div className="fixed w-full h-full inset-0" style={{ pointerEvents: 'none' }}>
                    <Confetti recycle={showPopup} />
                </div>
            }

            {showPopup && (
                <div className="popup-overlay">
                    <div
                        className={`popup-content ${popupClass} ${isCorrect ? 'shadow-glow' : ''}`}
                    >
                        <h2>{isCorrect ? "Correct!" : "Incorrect!"}</h2>
                        <p>{isCorrect ? '🔥🧠🥳' : '😓😟🥺'}</p>
                        <button type="button"
                            className={`w-3/5 h-1/5 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 mt-8 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ${!allFieldsFilled ? "cursor-not-allowed opacity-60" : "dark:shadow-lg dark:shadow-gray-900 shadow"}`}
                            disabled={!allFieldsFilled}
                            onClick={() => { closePopup() }}>
                            Close
                        </button>
                    </div>
                </div>)}

            <div className="w-full">
                <details className="text-primary cursor-pointer crossword-customization">
                    <summary className="font-bold text-xl">Customization</summary>
                    <div className="flex flex-row">
                        <div className="flex flex-col w-3/5">

                            {/* Theme */}
                            <label htmlFor="themeLabel" className="block mt-4 mb-2 text-sm font-medium">Theme</label>
                            <input type="text" id="themeLabel"
                                className="text-lg rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:placeholder-inherit"
                                placeholder="Sport"
                                value={theme}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^[a-zA-Z\s]*$/.test(value)) {
                                        const words = value.split(' ').filter(word => word !== '');
                                        if (words.length <= 3) {
                                            setTheme(value);
                                        }
                                    }
                                }}
                                required />

                            {/* Clue Style */}
                            <label htmlFor="clueStyle" className="block mt-3 mb-2 text-sm font-medium">Clue Style</label>
                            <select id="clueStyle"
                                className="text-lg rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={clueStyle}
                                onChange={(e) => setClueStyle(e.target.value)}>
                                <option value="">Choose an option</option>
                                {clueStyleOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>

                            {/* Size */}
                            <label htmlFor="sizeSelect" className="block mt-3 mb-2 text-sm font-medium">Size</label>
                            <select id="sizeSelect"
                                className="text-lg rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}>
                                <option value="">Choose an option</option>
                                {sizeOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col-reverse w-2/5 items-center">
                            <button type="button"
                                className={`w-3/5 h-1/5 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-8 dark:bg-sky-700 dark:hover:bg-sky-900 focus:outline-none dark:focus:ring-blue-800 ${!allFieldsFilled || isLoading ? "cursor-not-allowed opacity-60 " : "dark:shadow-lg dark:shadow-teal-800/80"}`}
                                disabled={!allFieldsFilled || isLoading}
                                onClick={() => { generateCrosswordData(theme, size, clueStyle) }}>
                                Generate
                            </button>
                            <button type="button"
                                className={`w-3/5 h-1/5 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 mt-8 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ${!allFieldsFilled || crosswordData === '' || isLoading ? "cursor-not-allowed opacity-60" : "dark:shadow-lg dark:shadow-gray-900 shadow"}`}
                                disabled={!allFieldsFilled || crosswordData === '' || isLoading}
                                onClick={() => { checkCrossword() }}>
                                Check
                            </button>
                        </div>
                    </div>
                </details>
            </div>

            {/* Crossword Component */}
            <div className="flex items-center justify-center w-full">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center min-h-80">
                        <Dots />
                        <p className="text-primary">
                            This can take a while... Also I'm supposed to bring you an entire crossword, give me a sec 🤗
                        </p>
                    </div>
                ) : (
                    crosswordData && (
                        <div className="crossword-container">
                            <ImportedCrossword
                                ref={crosswordRef}
                                data={crosswordData}
                                theme={{
                                    gridBackground: "#102128",
                                    cellBackground: "#2C454F",
                                    cellBorder: "#69A3C0",
                                    textColor: "#aecbfa",
                                    numberColor: "#aecbfa",
                                    focusBackground: "#1c6e3d",
                                    highlightBackground: "#1a5a56",
                                }}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}