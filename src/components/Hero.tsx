import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { useSmoothTransition } from '../hooks/useSmoothTransition';
import { useRevealEffect } from '../hooks/useRevealEffect';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';

export const Hero = () => {
  const mousePosition = useMouseParallax(0.05);
  const sectionRef = useSmoothTransition();
  const [titleRef, titleTransform] = useRevealEffect('right');
  const [contentRef, contentTransform] = useRevealEffect('left');
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev);
    // Simulate pressing Insert key
    const event = new KeyboardEvent('keydown', { code: 'Insert' });
    window.dispatchEvent(event);
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden perspective-container">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white -z-10 gradient-animate" />
      <div 
        className="absolute inset-0 -z-10 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.1,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
        }}
      />
      
      <div className="container mx-auto px-6 py-24">
        <ParallaxCard className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <div 
            ref={titleRef} 
            className="section-transition"
            style={{ 
              transform: titleTransform,
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-8 animate-float">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-indigo-600 font-medium">
                Making your gaming experience seamless
              </span>
            </div>
            
            <AnimatedTitle 
              text="The Forefront for Modernized Gaming Software"
              className="text-6xl font-bold mb-8 reveal-text"
            />
          </div>
          
          <div 
            ref={contentRef}
            className="section-transition"
            style={{ 
              transform: contentTransform,
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Streamline your gaming experience with our next-generation enhancement platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={toggleMenu}
                className="group px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium 
                         hover:bg-indigo-700 transition-all duration-300 flex items-center gap-2 hover:gap-4"
              >
                Open Menu
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </ParallaxCard>
      </div>
    </section>
  );
};