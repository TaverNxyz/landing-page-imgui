import React from 'react';

interface MenuSectionProps {
  title: string;
  children: React.ReactNode;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ title, children }) => {
  return (
    <div className="mb-4">
      <div className="bg-imgui-header px-3 py-2 text-purple-300 font-medium border-b border-imgui-border">
        {title}
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
};