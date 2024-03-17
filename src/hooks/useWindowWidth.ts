import { useState, useEffect } from 'react';

export const useGetWindowWidth = () => {
    const [screenWidth, setScreenWidth] = useState({
        width: window.innerWidth,
      });
    
      useEffect(() => {
        const handleResize = () => {
          setScreenWidth({
            width: window.innerWidth,
          });
        };
    
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      return screenWidth;
}
