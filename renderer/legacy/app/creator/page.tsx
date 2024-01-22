// "use server"
import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Markdown from 'react-markdown'
// import fs from 'fs';

// const markdown = '# Hi, *Pluto*!'

// createRoot(document.body).render(<Markdown>{markdown}</Markdown>)

export default function Creator() {
    // const [fileContent, setFileContent] = useState('');

    // useEffect(() => {
    //     fetch('../../public/Creator.md')  // Adjust the path to your file
    //         .then(response => response.text())
    //         .then(text => {
    //             setFileContent(text);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching the file:', error);
    //         });
    // }, []);


    // const fileContent = fs.readFileSync('../../public/Creator.md', 'utf8');

    return (
        <Markdown>{"## This is markdown"}</Markdown>
    );
}

