import React from 'react';

interface MenuItemProps {
  label: string;
  value: string | number;
  onChange?: (value: string) => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex items-center justify-between mb-2 hover:bg-imgui-hover p-2 rounded">
      <span className="text-gray-300">{label}</span>
      {onChange ? (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-imgui-bg border border-imgui-border rounded px-2 py-1 text-gray-300 w-24 focus:border-purple-500 focus:outline-none"
        />
      ) : (
        <span className="text-purple-400">{value}</span>
      )}
    </div>
  );
};