const NavLinks = () => (
    <div className="hidden md:flex items-center space-x-8">
        {['Services', 'Projects', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative group">
                <span className="text-gray-300 hover:text-white transition-colors">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 custom-light-bg group-hover:w-full transition-all duration-300"></span>
            </a>
        ))}
    </div>
);

export default NavLinks;
