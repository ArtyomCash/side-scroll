export const smoothScroll = (elementId: string, animationDuration: number, heightFromTop: number) => {
  console.log('elementId >>>' ,elementId);
  console.log('animationDuration >>>' ,animationDuration);
  console.log('heightFromTop >>>' ,heightFromTop);
  const el = document.getElementById(elementId);
  if (el) {
    const targetPosition = el.getBoundingClientRect().top - heightFromTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = animationDuration;
    let startTime: number | null;

    const animateScroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const easeProgress = easeInOutCubic(Math.min(progress / duration, 1));
      const scrollY = startPosition + distance * easeProgress;
      window.scrollTo(0, scrollY);

      if (progress < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    const easeInOutCubic = (progress: number) => {
      return 3 * progress * progress - 2 * progress * progress * progress;
    };

    window.requestAnimationFrame(animateScroll);
  }
};

/*
export const smoothScroll = (element: HTMLElement, animationDuration: number, heightFromTop: number) => {
  if (element) {
    const targetPosition = element.getBoundingClientRect().top - heightFromTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = animationDuration;
    let startTime: number | null;

    const animateScroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const easeProgress = easeInOutCubic(Math.min(progress / duration, 1));
      const scrollY = startPosition + distance * easeProgress;
      window.scrollTo(0, scrollY);

      if (progress < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    const easeInOutCubic = (progress: number) => {
      return 3 * progress * progress - 2 * progress * progress * progress;
    };

    window.requestAnimationFrame(animateScroll);
  }
};
*/
