// background.js
// Listen for a custom event (e.g., "reloadExtension") from your content script or popup script.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // if (message.action === "reloadExtension") {
  //   chrome.runtime.reload();
  // }
});
