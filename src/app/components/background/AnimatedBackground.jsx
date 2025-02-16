import React from 'react';
import NeuralPattern from './NeuralPattern';
import AnimatedParticles from './AnimatedParticles';

const AnimatedBackground = ({ mousePosition }) => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.1)_0%,_rgba(17,24,39,0.4)_100%)]" />
        <div
            className="absolute inset-0 opacity-30"
            style={{
                backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.2) 0%, transparent 60%)`
            }}
        />
        <NeuralPattern />
        <AnimatedParticles />
    </div>
);

export default AnimatedBackground;
