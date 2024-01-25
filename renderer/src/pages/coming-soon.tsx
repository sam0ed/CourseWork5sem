import React, { useEffect, useState } from 'react';
import './ComingSoon.css';
import Confetti from 'react-confetti';

const Block = ({ title, description }: any) => (
    <div className="comingSoonBlock">
        <h2 style={{fontWeight: 'bold'}}>{title}:</h2>
        <p>{description}</p>
    </div>
);

const ComingSoon = () => {
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowConfetti(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const blocks = [
        { title: 'Remote API connection', description: 'This will add new compute capabilities to the program' },
        { title: 'Fine tuning base LLM', description: 'Will provide better clue quality and better user experience' },
        { title: 'Multi-Language Support', description: 'Crossword generation in different languages, which can be educational for language learners and increase the app`s user base.' },
        { title: 'Mobile App preview', description: 'If the application will also be available on mobile devices, provide a mock-up of the mobile app interface.' },
        { title: 'Web migration', description: 'Making platform more accessible by bringing it to the internet in all browsers' },        
        { title: 'Dynamic Hints System', description: 'The hints could be straightforward or riddles, depending on the user’s preference.' },
        // { title: 'Feature Two', description: 'Description of Feature Two' },
        // { title: 'Feature Two', description: 'Description of Feature Two' },
    ];

    return (
        <div className="comingSoon">
            {/* {showConfetti && <Confetti />} */}
            <div className="titleContainer">
                <h1 className="animatedTitle">Coming Soon 🎉🚀</h1>
            </div>
            <div className="comingFeaturesContainer">
                {blocks.map((block, index) => (
                    <Block key={index} title={block.title} description={block.description} />
                ))}
            </div>
        </div>
    );
};

export default ComingSoon;

// const style = ({
    
//     comingSoon:{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         alignSelf: 'center',
//         minHeight: '100vh',
//         textAlign: 'center',
//         padding: '20px',
//         opacity: '0',
//         animation: 'fadeInPage 1.5s forwards',
//     },
// })

