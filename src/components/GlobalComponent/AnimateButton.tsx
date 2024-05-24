import React from 'react';

type AnimatedButtonProps = {
  title: string;
  variant: 'primary' | 'secondary';
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ title, variant, iconRight, iconLeft }) => {
  return (
    <div className="relative inline-flex group items-center justify-center px-6 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg transition-colors">
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
      <span className={`relative ${variant === 'secondary' ? 'bg-main text-white border-main' : 'bg-secondary text-text border-secondary'} px-6 py-2 rounded-lg`}>
        {iconLeft && <span className="mr-2">{iconLeft}</span>}
        {title}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </span>
    </div>
  );
};

export default AnimatedButton;
