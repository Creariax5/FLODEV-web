import { Rocket } from 'lucide-react';
import GradientButton from '../UI/GradientButton';

const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
                <span className="custom-bg bg-clip-text text-transparent">
                    Transform Ideas into
                </span>
                <br />
                <span className="relative">
                    Digital Reality
                    <span className="absolute -inset-1 bg-color-1/20 blur-xl"></span>
                </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
                We craft innovative digital solutions that push the boundaries of what's possible
            </p>

            <GradientButton text="Start Your Journey" icon={<Rocket className="w-5 h-5" />} />
        </div>
    </section>
);

export default HeroSection;
