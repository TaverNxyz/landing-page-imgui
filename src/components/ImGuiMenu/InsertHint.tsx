import React from 'react';

interface InsertHintProps {
  isMenuVisible: boolean;
}

export const InsertHint: React.FC<InsertHintProps> = ({ isMenuVisible }) => {
  if (isMenuVisible) return null;
  
  return (
    <div className="fixed bottom-4 left-0 right-0 text-center z-50">
      <span className="bg-black/50 text-gray-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
        Press INSERT to open menu
      </span>
    </div>
  );
};