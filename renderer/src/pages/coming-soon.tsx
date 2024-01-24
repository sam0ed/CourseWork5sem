import React from 'react';

export default function ComingSoon() {
    return (
        <div className='coming-soon-container'>
            <h1 className='coming-soon-title'>Future Features En Route</h1>
            <div className='feature-list'>
                <Feature
                    title="Advanced Puzzle Generator"
                    description="An algorithm upgrade for crafting even more intricate crosswords with thematic symmetry."
                />
                <Feature
                    title="Multiplayer Mode"
                    description="Solve puzzles in real-time with friends or compete in crossword battles."
                />
                <Feature
                    title="Custom Themes"
                    description="Create and share your own themes and word lists for personalized puzzles."
                />
                <Feature
                    title="Leaderboards & Achievements"
                    description="Track your progress and achievements, see how you rank against other wordsmiths."
                />
                <Feature
                    title="Cross-Platform Sync"
                    description="Start a puzzle on your desktop and finish it on your mobile, seamlessly."
                />
                <Feature
                    title="Voice Commands"
                    description="Hands-free mode to solve puzzles using voice recognition technology."
                />
                <Feature
                    title="Educational Tools"
                    description="Educational packs for students to learn through crosswords, including history, science, and literature."
                />
            </div>
        </div>
    )
}

function Feature({ title, description }: { title: string, description: string }) {
    return (
        <div className='feature'>
            <h2 className='feature-title'>{title}</h2>
            <p className='feature-description'>{description}</p>
        </div>
    );
}
