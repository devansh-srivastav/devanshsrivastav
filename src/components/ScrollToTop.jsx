import React, { useEffect, useState } from "react";
import { MDBIcon } from "mdbreact";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className='scroll-top'>
          <MDBIcon icon='angle-up' size='md' className='arrow-up'></MDBIcon>
        </div>
      )}
    </div>
  );
}