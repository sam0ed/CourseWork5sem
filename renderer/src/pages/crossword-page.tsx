import React, { useEffect } from 'react'
import { useState } from 'react';
import Crossword from '../components/Crossword';
import { Dots } from "react-activity";

export default function CrosswordPage() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || '');
    const [clueStyle, setClueStyle] = useState(localStorage.getItem('clueStyle') || '');
    const [size, setSize] = useState(localStorage.getItem('size') || '');

    const allFieldsFilled = theme && clueStyle && size;

    useEffect(() => {
        localStorage.setItem('theme', theme);
        localStorage.setItem('clueStyle', clueStyle);
        localStorage.setItem('size', size);
    }, [theme, clueStyle, size]);



    const clueStyleOptions = [
        'one', 'two', 'three'
    ];

    const sizeOptions = [
        'Small', 'Medium', 'Large'
    ];

    return (
        <div className='crosswordSpace'>
            <div className='detailsSpace'>
                <details className='detailsBar' style={{ color: 'rgba(174, 203, 250, 1)', cursor: 'pointer' }}>
                    <summary style={{ fontWeight: 'bold', fontSize: '20px' }}>Customization</summary>
                    <div className='flex flex-row'>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '60%' }}>

                            {/* Theme */}
                            <label htmlFor="themeLabel" className="block mt-4 mb-2 text-sm font-medium ">Theme</label>
                            <input type="text" id="themeLabel"
                                className="text-lg rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:placeholder-inherit"
                                placeholder="Sport"
                                value={theme}
                                onChange={(e) => setTheme(e.target.value)}
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
                        <div style={{ display: 'flex', flexDirection: 'column-reverse', width: '40%', alignItems: 'center' }}>
                            <button type="button"
                                className={` ${!allFieldsFilled ? "cursor-not-allowed opacity-60 " : "dark:shadow-lg dark:shadow-teal-800/80"} w-3/5 h-1/5 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-8 dark:bg-sky-700 dark:hover:bg-sky-900 focus:outline-none dark:focus:ring-blue-800`}
                                disabled={!allFieldsFilled}>
                                Generate
                            </button>
                            <button type="button"
                                className={` ${!allFieldsFilled ? "cursor-not-allowed opacity-60" : "dark:shadow-lg dark:shadow-gray-900 shadow"} w-3/5 h-1/5 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 mt-8 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 `}
                                disabled={!allFieldsFilled}>
                                Get Hint
                            </button>
                        </div>
                    </div>
                </details>
            </div>
            <Crossword />
        </div>

    )
}
