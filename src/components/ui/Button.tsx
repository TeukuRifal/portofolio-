import React, { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  ariaLabel?: string;
}

const Button = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  isLoading = false,
  ariaLabel,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200';
  const sizeStyles = 'px-4 py-2 text-sm md:text-base';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const loadingStyles = isLoading ? 'opacity-75 cursor-wait' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      className={`${baseStyles} ${sizeStyles} ${disabledStyles} ${loadingStyles} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="animate-spin inline-block mr-2">
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;