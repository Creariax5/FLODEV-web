const AnimatedParticles = () => (
    <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
            <div
                key={i}
                className="absolute rounded-full bg-color-1 opacity-20"
                style={{
                    width: Math.random() * 4 + 2 + 'px',
                    height: Math.random() * 4 + 2 + 'px',
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                    animation: `float ${Math.random() * 10 + 5}s linear infinite`
                }}
            />
        ))}
    </div>
);

export default AnimatedParticles;
