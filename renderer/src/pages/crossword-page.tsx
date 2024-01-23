import React from 'react'
// import "./style.css";
import Crossword from '../components/Crossword';

export default function CrosswordPage() {
    const clueStyleOptions = [
        'one', 'two', 'three'
    ];

    const sizeOptions = [
        'Small', 'Medium', 'Large'
    ];

    return (
        <div className='crosswordSpace'>
            <div className='detailsSpace'>
                <details className='detailsBar' style={{ display: 'flex', flexDirection: 'row', color: 'rgba(174, 203, 250, 1)', cursor: 'pointer' }}>
                    <summary>Customization</summary>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>

                        <label htmlFor="themeLabel" className="block mt-4 mb-2 text-sm font-medium ">Theme</label>
                        <input type="text" id="themeLabel" className="text-lg rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:placeholder-inherit" placeholder="Sport" required />


                        <label htmlFor="clueStyle" className="block mt-3 mb-2 text-sm font-medium">Clue Style</label>
                        <select id="clueStyle" className="text-lg rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose an option</option>
                            {clueStyleOptions.map((option, index) => (
                                <option key={index}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="sizeLabel" className="block mt-3 mb-2 text-sm font-medium">Size</label>
                        <select id="sizeSelect" className="text-lg rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose an option</option>
                            {sizeOptions.map((option, index) => (
                                <option key={index}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </details>
            </div>
            <Crossword />
        </div>

    )
}
