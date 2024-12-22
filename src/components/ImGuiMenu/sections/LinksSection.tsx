import React from 'react';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full px-4 py-2 mb-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-purple-400 
               rounded transition-colors duration-200 text-center text-sm"
  >
    {children}
  </a>
);

export const LinksSection = () => (
  <div className="p-4">
    <h3 className="text-gray-400 text-sm mb-4">External Links</h3>
    <div className="space-y-2">
      <LinkButton href="https://home.plentifulpower.xyz">See What We're Offering!</LinkButton>
    </div>
  </div>
);