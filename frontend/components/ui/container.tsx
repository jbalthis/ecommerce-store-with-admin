import React from 'react';

interface IContainer {
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return <div className='mx-auto max-w-7xl'>{children}</div>;
};

export default Container;
