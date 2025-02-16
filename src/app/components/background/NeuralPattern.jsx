const NeuralPattern = () => (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="neural" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#60A5FA" />
                <path d="M20 20L40 40M20 20L0 40M20 20L40 0M20 20L0 0" stroke="#60A5FA" strokeWidth="0.5" />
            </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#neural)" />
    </svg>
);

export default NeuralPattern;
