import React, { useState, useEffect } from 'react';
import { ScrollToTopButton } from './ScrollToTop.styled'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { setIsVisible(true); }
    else {setIsVisible(false);}};

  window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
}, []);

const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

  return (
  <ScrollToTopButton visible={isVisible} onClick={scrollToTop}>
  ↑ Scroll To Top ↑
  </ScrollToTopButton>
  );
};

export default ScrollToTop;
