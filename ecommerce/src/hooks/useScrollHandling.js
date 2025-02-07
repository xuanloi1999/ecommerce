import { useEffect, useRef, useState } from 'react';

const useScrollHandling = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const prevScrollPosition = useRef(0);

    const scrollTracking = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > prevScrollPosition.current) {
            setScrollDirection('down');
        } else {
            setScrollDirection('up');
        }
        prevScrollPosition.current = scrollPosition <= 0 ? 0 : scrollPosition;
        setScrollPosition(scrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);

        return () => {
            window.removeEventListener('scroll', scrollTracking);
        };
    }, []);

    return { scrollDirection, scrollPosition };
};

export default useScrollHandling;
