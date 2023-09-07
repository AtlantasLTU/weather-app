"use client"
import React, { useEffect } from 'react';

interface DynamicDimensionsProps {
  classNameLocal: string;
}

const DimensionsComponent: React.FC<DynamicDimensionsProps> = ({ classNameLocal }) => {
  useEffect(() => {
    const handleResize = () => {
      const element = document.getElementById('main');
      if (element) {
        element.classList.replace("w-screen", `w-[${window.innerWidth}px]`);
        element.classList.replace("h-screen", `h-[${window.innerHeight}px]`);
      }
    };

    handleResize(); // Set initial dimensions

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener
    };
  }, []);

  return <div className={`w-[${window.innerWidth}px] h-[${window.innerHeight}px] first-letter flex flex-wrap absolute`} id="main" />;
};

export default DimensionsComponent;
