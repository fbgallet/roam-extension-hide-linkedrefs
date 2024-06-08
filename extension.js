(() => {
  // customize hotkeys in command palette
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
//  const onKeyDown = (e) => {
//    // customize HOTKEYS here
//    if (e.key.toLowerCase() === "l" && e.ctrlKey && e.shiftKey) {
//      lastState = toggleLinkedRefDisplay(true);
//    }
//  };
  const loadCommand = () => {
    window.roamAlphaAPI.ui
      .commandPalette
      .addCommand({label: 'Hide/Display linked references section', 
               callback: () => lastState = toggleLinkedRefDisplay(true),
               "disable-hotkey": false,
               "default-hotkey": "ctrl-shift-l"})
  }
  const onPageLoad = () => {
    setTimeout(() => {
      lastState = toggleLinkedRefDisplay(false);
    }, 20);
  };
  window.addEventListener("popstate", onPageLoad);
  loadCommand();
//  document.addEventListener("keydown", onKeyDown);
  if (HIDE_ON_LAUNCH) onPageLoad();
})();
