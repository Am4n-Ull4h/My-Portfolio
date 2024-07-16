import React, { Fragment, useEffect, useState } from 'react'

function ScrollAmount() {

    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(scrollPercent);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    }, []);


  return (
    <Fragment>
      <div className="fixed z-30 top-0 right-0 w-2  h-screen">
      <div
        id="progress-bar"
        className="bg-orange-600 w-full"
        style={{ height: `${scrollPercentage}%` }}
      ></div>
    </div>
    </Fragment>
  )
}

export default ScrollAmount
