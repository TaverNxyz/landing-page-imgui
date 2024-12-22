import React from 'react';
import { Toggle } from './controls/Toggle';
import { Slider } from './controls/Slider';
import { LinksSection } from './sections/LinksSection';

export const MenuContent = () => {
  const [enabled, setEnabled] = React.useState(true);
  const [silentAim, setSilentAim] = React.useState(false);
  const [fovValue, setFovValue] = React.useState(100);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-4 border-b border-[#2A2A2A]">
        <div className="text-gray-400 text-sm mb-4">General</div>
        
        <Toggle
          label="Enabled (Use at own risk)"
          checked={enabled}
          onChange={setEnabled}
        />
        
        <Slider
          label="Fov Slider"
          value={fovValue}
          onChange={setFovValue}
        />
        
        <Toggle
          label="Silent Aimbot"
          checked={silentAim}
          onChange={setSilentAim}
        />
      </div>
      
      <LinksSection />
    </div>
  );
};