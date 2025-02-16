import { Code, Brain, Sparkles } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
    const services = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Development",
            description: "Cutting-edge solutions with modern tech stack"
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: "AI Integration",
            description: "Smart systems that learn and adapt"
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Innovation",
            description: "Pushing boundaries of digital experiences"
        }
    ];

    return (
        <section id="services" className="relative py-32 px-6">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    <span className="custom-bg bg-clip-text text-transparent">
                        Our Expertise
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <ServiceCard key={i} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
