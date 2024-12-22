import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { MenuContent } from './MenuContent';
import { InsertHint } from './InsertHint';
import { useParallaxTilt } from '../../hooks/useParallaxTilt';

export const ImGuiMenu = () => {
  const [activeSection, setActiveSection] = useState('combat');
  const [isVisible, setIsVisible] = useState(false);
  const { tiltEventHandlers, style } = useParallaxTilt(10);

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Insert') {
        setIsVisible(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <>
      <InsertHint isMenuVisible={isVisible} />
      
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div 
            {...tiltEventHandlers}
            style={{
              ...style,
              transform: `${style.transform} scale(0.95)`,
            }}
            className="w-[800px] h-[600px] bg-[#1A1A1A] rounded-lg shadow-2xl border border-[#2A2A2A] 
                       flex overflow-hidden pointer-events-auto transition-transform duration-300"
          >
            <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
            <MenuContent />
          </div>
        </div>
      )}
    </>
  );
};