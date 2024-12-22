import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export const Toggle: React.FC<ToggleProps> = ({ checked, onChange, label }) => (
  <div className="flex items-center justify-between py-2">
    <span className="text-gray-300 text-sm">{label}</span>
    <button
      onClick={() => onChange(!checked)}
      className={`w-4 h-4 rounded ${
        checked ? 'bg-purple-500' : 'bg-[#2A2A2A]'
      } border border-[#3A3A3A]`}
    />
  </div>
);