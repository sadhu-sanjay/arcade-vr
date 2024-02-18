
import React from 'react';

type GridItem2Props = {
    index: number;
    selectedIndex: number;
    onSelect: (index: number) => void;
    children: React.ReactNode;
    className?: string;
};

export const GridItem2: React.FC<GridItem2Props> = ({ index,  selectedIndex, onSelect, children, className }) => {
  return (
    <div
      key={index}
      tabIndex={index + 0}
      style={{ outline: "none"}}
      className={`focus:shadow-2xl focus:scale-105 focus:border-collapse 
                  focus:shadow-amber-700/50 focus:border-amber-700 focus:bg-amber-700/50
                  min-w-[250px] min-h-[100px] 
                  shadow-lg border rounded-xl relative 
                  transform ease-in-out transition-transform duration-400
                  bg-white/10 dark:bg-gray-800/10
                  ${className}`}
      aria-current={index === selectedIndex}
      aria-label={`Slide ${index + 1}`}
      data-carousel-slide-to={index}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(index);
      }}
    >
        {children}
    </div>
  );
};

