import React from 'react';
import '../styles/index.css';

const Step = ({ title, content, index }: any) => (
    <div className="step-container animated-gradient">
        <div className="step-number">{index}</div>
        <div className="step-content">
            <div className="step-header">{title}</div>
            <div className="step-text">
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
        <div className="page-container fade-in">
            <div className="title-container">
                <h1 className="animated-title typewriter">How to use 🔮</h1>
            </div>
            <div className="flex flex-col justify-start">
                {
                    steps.map((step, index) => (
                        <Step key={index} title={step.title} content={step.content} index={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default guide;
