let currentTry = 1;
const maxTry = 10;

async function wait(time = 500): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      currentTry++;
      try {
        muteAudioAndVideo();
        resolve();
      } catch (error) {
        reject(error);
      }
    }, time);
  });
}

function muteAudioAndVideo(): void {
  const audioToggle = document.querySelector(
    '[data-is-muted="false"][aria-label="Turn off microphone (⌘ + d)"]'
  ) as HTMLLIElement;

  const videoToggle = document.querySelector(
    '[data-is-muted="false"][aria-label="Turn off camera (⌘ + e)"]'
  ) as HTMLLIElement;

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

function waitRecurcively(time: number): void {
  console.log("GOING TO WAIT FOR: ", time, " ms");
  if (currentTry < maxTry) {
    wait(time)
      .then(() => {
        if (window.location.pathname !== "/") {
          try {
            muteAudioAndVideo();
          } catch (error) {
            throw error;
          }
        }
      })
      .catch((error) => {
        console.error(error);
        if (currentTry < maxTry) {
          waitRecurcively(time * 1.5);
        }
      });
  }
}

waitRecurcively(500);
