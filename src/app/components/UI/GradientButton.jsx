const GradientButton = ({ text, icon, fullWidth = false }) => (
    <button className={`${fullWidth ? 'w-full' : ''} group relative px-8 py-4 custom-dark-bg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105`}>
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_0%,_transparent_100%)]"></span>
        <span className="relative flex items-center justify-center space-x-2">
            <span>{text}</span>
            <span className="group-hover:translate-x-1 transition-transform">
                {icon}
            </span>
        </span>
    </button>
);

export default GradientButton;
