import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
  bg?: 'white' | 'gray';
};

const Section = ({
  children,
  title,
  subtitle,
  id,
  className = '',
  bg = 'white',
}: SectionProps) => {
  const bgColor = bg === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  return (
    <section id={id} className={`py-16 ${bgColor} ${className}`}>
      <div className="container mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && (
              <p className="text-lg text-blue-600 font-medium mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;