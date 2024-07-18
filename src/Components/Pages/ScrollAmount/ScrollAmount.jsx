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
      <div className="fixed z-30 top-0 w-full  h-1">
      <div
        id="progress-bar"
        className="bg-orange-600 h-full"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
    </Fragment>
  )
}

export default ScrollAmount
