// Triggers animation change when element becomes visible
// state (visible state of component), setState (set the visibility state),
// ref (DOM element)
const makeVisible = (state, setState, ref) => {
  let distance = state;
  const currentTitle = ref.current.getBoundingClientRect().top - window.innerHeight;

  window.addEventListener('scroll', () => {
    distance = currentTitle;
    if (distance < -200) {
      setState(1);
    }
  });
};

export const executeOnScroll = (f) => {
  let lastKnownScrollPosition = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        f(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  });
};

export default [makeVisible, executeOnScroll];
