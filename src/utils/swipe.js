export const initSwipe = (element, onSwipeLeft, onSwipeRight) => {
    let startX = null;
    let endX = null;
    const SWIPE_THRESHOLD = 50;
  
    const handleStart = (event) => {
      startX = event.touches ? event.touches[0].clientX : event.clientX;
    };
  
    const handleMove = (event) => {
      if (startX !== null) {
        endX = event.touches ? event.touches[0].clientX : event.clientX;
      }
    };
  
    const handleEnd = () => {
      if (startX === null || endX === null) return;
  
      const deltaX = endX - startX;
      if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
        if (deltaX > 0) {
          onSwipeRight();
        } else {
          onSwipeLeft();
        }
      }
  
      startX = null;
      endX = null;
    };
  
    element.addEventListener("touchstart", handleStart);
    element.addEventListener("touchmove", handleMove);
    element.addEventListener("touchend", handleEnd);
    element.addEventListener("mousedown", handleStart);
    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseup", handleEnd);
  
    return () => {
      element.removeEventListener("touchstart", handleStart);
      element.removeEventListener("touchmove", handleMove);
      element.removeEventListener("touchend", handleEnd);
      element.removeEventListener("mousedown", handleStart);
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseup", handleEnd);
    };
  };
  