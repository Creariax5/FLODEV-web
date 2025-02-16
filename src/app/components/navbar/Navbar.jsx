import Logo from "../UI/Logo";
import NavLinks from "./NavLinks";

const Navbar = () => (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-gray-900 bg-opacity-50 border-b border-color-1/20">
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-center h-20">
                <Logo />
                <NavLinks />
            </div>
        </div>
    </nav>
);

export default Navbar;
