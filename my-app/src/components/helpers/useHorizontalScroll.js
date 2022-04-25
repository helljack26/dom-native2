import { useEffect, useRef } from "react";

import scrollState from "stores/entranceScrollWidth";

export function useHorizontalScroll() {
    const scrollRef = useRef();

    useEffect(() => {
        const el = scrollRef.current;
        const containerWidth = el.scrollWidth;
        scrollState.setScrollWidth(containerWidth)
        if (el) {
            const onWheel = e => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                });
            };
            el.addEventListener("wheel", onWheel, { passive: false });
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);
    return scrollRef;
}