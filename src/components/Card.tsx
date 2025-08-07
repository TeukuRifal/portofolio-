import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
};

const Card = ({ children, className = '', hoverEffect = true }: CardProps) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm ${hoverEffect ? 'hover:shadow-md transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;