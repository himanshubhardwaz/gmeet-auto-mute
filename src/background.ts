chrome.runtime.onInstalled.addListener(async () => {
  const manifest = chrome.runtime.getManifest();
  if (manifest.content_scripts) {
    for (const cs of manifest.content_scripts) {
      if (cs.matches) {
        const tabs = await chrome.tabs.query({ url: cs.matches });
        for (const tab of tabs) {
          if (cs.js && tab.id) {
            chrome.scripting.executeScript({
              files: cs.js,
              target: { tabId: tab.id, allFrames: cs.all_frames },
              injectImmediately: cs.run_at === "document_start",
            });
          }
        }
      }
    }
  }
});
