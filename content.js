chrome.runtime.onInstalled.addListener(() => {
  window.open(chrome.runtime.getURL("index.html"));
});

