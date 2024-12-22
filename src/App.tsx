import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ParallaxSection } from './components/ParallaxSection';
import { ImGuiMenu } from './components/ImGuiMenu/ImGuiMenu';

function App() {
  return (
    <div className="overflow-hidden bg-black">
      <ImGuiMenu />
      <Hero />
      <Features />
      <ParallaxSection />
    </div>
  );
}

export default App;