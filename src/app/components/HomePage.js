import React, { useState, useEffect } from 'react';
import { ZapIcon, Rocket, Brain, Code, Sparkles } from 'lucide-react';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.1)_0%,_rgba(17,24,39,0.4)_100%)]" />
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.2) 0%, transparent 60%)`
          }}
        />
        
        {/* Neural Network Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#60A5FA" />
              <path d="M20 20L40 40M20 20L0 40M20 20L40 0M20 20L0 0" stroke="#60A5FA" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#neural)" />
        </svg>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-gray-900 bg-opacity-50 border-b border-blue-500/20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-md opacity-50"></div>
                <span className="relative text-3xl font-bold bg-gradient-to-r from-blue-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
                  FLODEV
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Projects', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} 
                   className="relative group">
                  <span className="text-gray-300 hover:text-white transition-colors">{item}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-blue-500 opacity-20"
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
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
              Transform Ideas into
            </span>
            <br />
            <span className="relative">
              Digital Reality
              <span className="absolute -inset-1 bg-blue-500/20 blur-xl"></span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            We craft innovative digital solutions that push the boundaries of what's possible
          </p>

          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_0%,_transparent_100%)]"></span>
            <span className="relative flex items-center space-x-2">
              <span>Start Your Journey</span>
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-orange-300 bg-clip-text text-transparent">
              Our Expertise
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((service, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gray-900 p-8 rounded-2xl h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-lg opacity-75"></div>
            <div className="relative bg-gray-900 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-blue-400 to-orange-300 bg-clip-text text-transparent">
                  Let's Create Together
                </span>
              </h2>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {['Name', 'Email'].map((placeholder) => (
                    <div key={placeholder} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-75 blur-sm group-focus-within:opacity-100 transition-opacity"></div>
                      <input
                        type={placeholder.toLowerCase()}
                        placeholder={placeholder}
                        className="relative w-full bg-gray-800 rounded-lg px-6 py-4 focus:outline-none"
                      />
                    </div>
                  ))}
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-75 blur-sm group-focus-within:opacity-100 transition-opacity"></div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="relative w-full bg-gray-800 rounded-lg px-6 py-4 focus:outline-none"
                  />
                </div>

                <button className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_0%,_transparent_100%)]"></span>
                  <span className="relative flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <ZapIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default HomePage;