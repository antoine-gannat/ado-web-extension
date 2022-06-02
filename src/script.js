// hide an element
function hideElement(el) {
  el.style.position = "absolute";
  el.style.visibility = "hidden";
}

// get the warning element from the DOM
function getElement() {
  const warningContent = "Warning: Multiple merge bases detected";

  const element = document.querySelector(".page-content > div");

  // make sure that the element we got actually contains the warning.
  if (!element || !element.textContent.includes(warningContent)) {
    return null;
  }
  return element;
}

function hideAdoWarning() {
  const element = getElement();
  element && hideElement(element);
}

// on load try to hide the warning.
hideAdoWarning();

// listen to messages from the worker
chrome.runtime.onMessage.addListener((req) => {
  if (req.message === "HIDE_WARNING") {
    hideAdoWarning();
  }
  return Promise.resolve();
});
