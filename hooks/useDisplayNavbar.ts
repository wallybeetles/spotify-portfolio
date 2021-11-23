import { useEffect, useState } from 'react';

const useDisplayNavbar = (inView: boolean) => {
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [isNavbarDisplayed, setIsNavbarDisplayed] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      setPageOffset(window.pageYOffset);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!inView && pageOffset > 0) {
      setIsNavbarDisplayed(true);
    } else {
      setIsNavbarDisplayed(false);
    }
  }, [inView, pageOffset]);

  return isNavbarDisplayed;
};

export default useDisplayNavbar;
