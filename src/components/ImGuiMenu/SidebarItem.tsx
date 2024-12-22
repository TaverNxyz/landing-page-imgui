import React from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-2 text-sm ${
      isActive ? 'bg-[#2A2A2A] text-purple-400' : 'text-gray-400 hover:bg-[#1E1E1E]'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);