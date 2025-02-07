import { useEffect, useRef, useState } from 'react';

const useTranslateXImage = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [translateXPosition, setTranslateXPosition] = useState(80);
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

    const handleTranslateX = () => {
        if (scrollDirection === 'down' && scrollPosition >= 1500) {
            setTranslateXPosition(
                translateXPosition <= 0 ? 0 : translateXPosition - 1
            );
        } else if (scrollDirection === 'up') {
            setTranslateXPosition(
                translateXPosition >= 80 ? 80 : translateXPosition + 1
            );
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);

        return () => {
            window.removeEventListener('scroll', scrollTracking);
        };
    }, []);

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return { translateXPosition };
};
export default useTranslateXImage;
