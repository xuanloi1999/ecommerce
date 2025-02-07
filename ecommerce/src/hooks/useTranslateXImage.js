import useScrollHandling from '@/hooks/useScrollHandling';
import { useEffect, useRef, useState } from 'react';

const useTranslateXImage = () => {
    const [translateXPosition, setTranslateXPosition] = useState(80);
    const { scrollDirection, scrollPosition } = useScrollHandling();

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
        handleTranslateX();
    }, [scrollPosition]);

    return { translateXPosition };
};
export default useTranslateXImage;
