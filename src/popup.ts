const createNewMeetbutton = document.getElementById(
  "create-meet-button"
) as HTMLButtonElement;

createNewMeetbutton.addEventListener("click", async () => {
  chrome.tabs.create({
    url: `https://meet.new`,
  });
});

/*
  function getCurrentSwitchState(): boolean {
    return autoMuteToggle.checked;
  }

  const autoMuteToggle = document.getElementById(
    "autoMuteToggle"
  ) as HTMLInputElement;

  function storeSwitchState() {
    const isSwitchChecked = autoMuteToggle.checked;
    localStorage.setItem(
      "GMEET_autoMuteEnabled",
      JSON.stringify(isSwitchChecked)
    );
  }

  function retrieveSwitchState() {
    const storedState = localStorage.getItem("GMEET_autoMuteEnabled");
    if (storedState !== null) {
      const isEnabled = JSON.parse(storedState) as boolean;
      autoMuteToggle.checked = isEnabled;
    }
  }

  autoMuteToggle.addEventListener("change", storeSwitchState);

  retrieveSwitchState();
*/
