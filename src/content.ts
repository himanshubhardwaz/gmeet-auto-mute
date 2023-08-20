function waitForElm(selector: string): Promise<HTMLElement> {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector) as HTMLElement);
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector) as HTMLElement);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

async function muteAudioAndVideo(): Promise<void> {
  const [audioToggle, videoToggle] = await Promise.all([
    waitForElm(
      '[data-is-muted="false"][aria-label="Turn off microphone (⌘ + d)"]'
    ),
    waitForElm('[data-is-muted="false"][aria-label="Turn off camera (⌘ + e)"]'),
  ]);

  if (audioToggle) {
    audioToggle.click();
  } else {
    throw new Error("Could not find audio toggle");
  }

  if (videoToggle) {
    videoToggle.click();
  } else {
    throw new Error("Could not find video toggle");
  }
}

if (window.location.pathname !== "/") {
  muteAudioAndVideo()
    .then(() => {
      console.log("Muted audio and video");
    })
    .catch((error) => {
      console.error(error);
    });
}

chrome.runtime.onMessage.addListener(async (message, _sender, sendResponse) => {
  console.log("FROM POPUP.TS -- ", { message });
  if (message === "copy-meet-url") {
    const copyMeetInfoButton = await waitForElm(
      '[aria-label="Copy joining info"]'
    );
    if (copyMeetInfoButton) {
      copyMeetInfoButton.click();
      sendResponse({ message: "copied-meet-url" });
    } else {
      sendResponse({ message: "could-not-copy-meet-url" });
    }
  }
});
