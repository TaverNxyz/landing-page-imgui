import React from 'react';
import { Target, Eye, Users, Globe, Search, Wrench, Settings } from 'lucide-react';
import { SidebarItem } from './SidebarItem';

export const Sidebar = ({ activeSection, onSectionChange }: {
  activeSection: string;
  onSectionChange: (section: string) => void;
}) => {
  const items = [
    { icon: <Target size={18} />, label: 'Proceed To Empowerment', id: 'combat' },
    { icon: <Eye size={18} />, label: 'Visuals', id: 'visuals' },
    { icon: <Users size={18} />, label: 'Players', id: 'players' },
    { icon: <Globe size={18} />, label: 'World', id: 'world' },
    { icon: <Search size={18} />, label: 'Search', id: 'search' },
    { icon: <Wrench size={18} />, label: 'Misc', id: 'misc' },
    { icon: <Settings size={18} />, label: 'Config', id: 'config' },
  ];

  return (
    <div className="w-48 bg-[#171717] border-r border-[#2A2A2A]">
      {items.map((item) => (
        <SidebarItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          isActive={activeSection === item.id}
          onClick={() => onSectionChange(item.id)}
        />
      ))}
    </div>
  );
};