(() => {
  // customize hotkeys on line 22
  // default: Control + Shift + L
  const HIDE_ON_LAUNCH = true;
  let lastValue = "block";

  const toggleLinkedRefDisplay = () => {
    const stylesheet = document.styleSheets[1];
    const className = ".rm-reference-main";
    const property = "display";
    const value = lastValue === "block" ? "none" : "block";
    lastValue = value;
    // Add the new rule to the stylesheet
    const index = Array.from(stylesheet.cssRules).findIndex(
      (rule) => rule.selectorText === ".rm-reference-main"
    );
    if (index !== -1) stylesheet.deleteRule(index);
    stylesheet.insertRule(
      className + " { " + property + ": " + value + " !important; }",
      stylesheet.cssRules.length
    );
  };
  const onKeyDown = (e) => {
    // customize HOTKEYS here
    if (e.key.toLowerCase() === "l" && e.ctrlKey && e.shiftKey) {
      toggleLinkedRefDisplay();
    }
  };
  document.addEventListener("keydown", onKeyDown);
  if (HIDE_ON_LAUNCH) toggleLinkedRefDisplay();
})();
