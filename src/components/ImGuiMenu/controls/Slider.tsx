import React from 'react';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
  min?: number;
  max?: number;
}

export const Slider: React.FC<SliderProps> = ({ value, onChange, label, min = 0, max = 100 }) => (
  <div className="py-2">
    <div className="flex justify-between mb-2">
      <span className="text-gray-300 text-sm">{label}</span>
      <span className="text-purple-400 text-sm">{value}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full accent-purple-500 bg-[#2A2A2A] h-1 rounded appearance-none"
    />
  </div>
);