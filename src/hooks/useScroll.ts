export const useScroll = () => {
  const scrollToTop = () => {
    if (typeof window !== undefined)
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return {
    scrollToTop,
  };
};
