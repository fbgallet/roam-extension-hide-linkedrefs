(() => {
  // customize hotkeys on line 19
  // default: Control + Shift + L
  const HIDE_ON_LAUNCH = true;
  const LOCK = true;
  let lastState;

  const toggleLinkedRefDisplay = (toggle = true) => {
    const linkedRefElt = document.querySelectorAll(".rm-reference-main");
    if (linkedRefElt.length > 0) {
      const currentState = toggle ? linkedRefElt[0].style.display : lastState;
      const newState = toggle
        ? currentState === "none"
          ? "block"
          : "none"
        : currentState === undefined || (LOCK && lastState === "none")
        ? "none"
        : "block";
      linkedRefElt.forEach((elt) => (elt.style.display = newState));
      return newState;
    }
  };
  const onKeyDown = (e) => {
    // customize HOTKEYS here
    if (e.key.toLowerCase() === "l" && e.ctrlKey && e.shiftKey) {
      lastState = toggleLinkedRefDisplay(true);
    }
  };
  const onPageLoad = () => {
    setTimeout(() => {
      lastState = toggleLinkedRefDisplay(false);
    }, 20);
  };
  window.addEventListener("popstate", onPageLoad);
  document.addEventListener("keydown", onKeyDown);
  if (HIDE_ON_LAUNCH) onPageLoad();
})();
