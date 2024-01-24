import React, { useEffect, useState } from 'react';
import './ComingSoon.css';
import Confetti from 'react-confetti';

const Block = ({ title, description }: any) => (
    <div className="comingSoonBlock">
        <h2>{title}</h2>
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
        { title: 'Fine tuning base LLM', description: 'Will provide better clue quality' },
        { title: 'Web migration', description: 'Make platform more accessible by bringing it to the internet' },
        // { title: 'Feature Two', description: 'Description of Feature Two' },
        // { title: 'Feature Two', description: 'Description of Feature Two' },
        // { title: 'Feature Two', description: 'Description of Feature Two' },
        // { title: 'Feature Two', description: 'Description of Feature Two' },
        // { title: 'Feature Two', description: 'Description of Feature Two' },
        // Add more blocks as needed
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

