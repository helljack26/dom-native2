import { useState, useEffect, useRef } from 'react';
import scrollState from "stores/entranceScrollWidth";

export default function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const [leftOffset, setLeftOffset] = useState();
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (event.target.alt !== undefined && event.target.alt === 'Close popup') {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        // There set popup position
        let scrollWidth = scrollState.scrollWidth;
        const popupWidth = 300;
        const clientLeft = ref.current !== null ? ref.current.offsetLeft : 0
        // If not enough place for popup at right, place it left
        const isPlaceRightEnough = ((clientLeft + popupWidth) + 200) < scrollWidth;
        const placeAtLeftSide = clientLeft - (popupWidth + 15)
        // Condition where placing popup
        const left = isPlaceRightEnough === true ? clientLeft + 110 : placeAtLeftSide;
        if (isComponentVisible) {
            if (scrollWidth === 0) {
                setIsComponentVisible(initialIsVisible)
                scrollWidth = scrollState.scrollWidth
                setLeftOffset(left)
            } else {
                setLeftOffset(left)
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [isComponentVisible, initialIsVisible, leftOffset]);

    return { ref, isComponentVisible, setIsComponentVisible, leftOffset };
}