"use client";
import React, { useEffect, useState } from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';

export default function Home() {
  /*
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Set dimensions once the component mounts on the client side
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    // Update dimensions on window resize
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
*/
  return (
    <div className={`w-[${width}px] h-[${height}px] first-letter flex-col flex`} id="main">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
