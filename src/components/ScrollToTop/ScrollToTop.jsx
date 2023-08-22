import React, { useState, useEffect } from 'react';
import { ScrollToTopButton } from './ScrollToTop.styled';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', checkScrollHeight);
    return () => {
      window.removeEventListener('scroll', checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollToTopButton isScrollButtonVisible={showButton} onClick={scrollToTop}>
      ↑
    </ScrollToTopButton>
  );
};

export default ScrollToTop;
