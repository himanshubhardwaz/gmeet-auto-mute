const createNewMeetbutton = document.getElementById(
  "createMeetButton"
) as HTMLButtonElement;

createNewMeetbutton.addEventListener("click", () => {
  chrome.tabs.create({ url: "https://meet.new" });

  chrome.runtime.sendMessage("create-new-meet");
});
