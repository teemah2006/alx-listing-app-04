'use client';
import React from 'react';
import { ButtonProps } from '../../interfaces/index';

export const Button: React.FC<ButtonProps> = ({text, color}) => {
  return (
    <button className={`px-4 py-2 ${color} rounded-full flex items-center transition`}> 
        {text || 'Click Me'}
    </button>
  );
}