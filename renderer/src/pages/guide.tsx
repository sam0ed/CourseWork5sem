import React from 'react';
import './guide.css'

const Step = ({ title, content, index }: any) => (

    <div className="stepContainer">
        <div className="stepNumber">{index}</div>
        <div className="stepContent">
            <div className="stepHeader">{title}</div>
            <div className="stepText">
                {content}
            </div>
        </div>
    </div>
);

const guide = () => {
    // Example steps
    const steps = [
        { title: 'Generate Bar 👀', content: 'To start things off you have to generate the crossword grid. Good news is this is super easy with built in generate bar. Just select the bar, fill in the blanks and we will take over from there to generate a custom built crossword for you. ' },
        { title: 'Solve 🧠', content: 'Great, now you can start solving the puzzle. Click on the clues you know the answers to or just press the crossword cell to start typing. To change the typing direction press the cell again. You can do it' },
        { title: 'Submit 🎯', content: 'If you have reached this step congratulations, you are almost done. One final step -- press the check button to find out the result.' },
        // Add more steps as needed
    ];

    return (
        <div className='guideContainer'>
            <div className="titleContainer">
                <h1 className="animatedTitle">How to use 🔮</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent:'flex-start'}}>
            {
                steps.map((step, index) => (
                    <Step key={index} title={step.title} content={step.content} index={index} />
                ))
            }
        </div>
        </div >
    );
};

export default guide;
