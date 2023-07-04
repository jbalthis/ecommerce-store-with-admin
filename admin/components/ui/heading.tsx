'use client';
import React from 'react';

interface IHeading {
  title: string;
  description: string;
}

export const Heading: React.FC<IHeading> = ({ title, description }) => {
  return (
    <div>
      <h2 className='text-3xl font-bold tracking-tight'>{title}</h2>
      <p className=''>{description}</p>
    </div>
  );
};
