const createNewMeetbutton = document.getElementById(
  "create-meet-button"
) as HTMLButtonElement;

createNewMeetbutton.addEventListener("click", async () => {
  chrome.tabs.create({ url: "https://meet.new/" }, (tab) => {
    if (tab?.id) {
      chrome.tabs.sendMessage(tab.id, "create-new-meet", (response) => {
        if (chrome.runtime.lastError) {
          chrome.runtime.sendMessage(
            "Error sending message: " +
              JSON.stringify({ error: chrome.runtime.lastError })
          );
        } else {
          chrome.runtime.sendMessage(
            "Successfully sent message to content script"
          );
          console.log("Message sent successfully:", response);
        }
      });
    }
    chrome.runtime.sendMessage("Error sending message, could not get tab id");
  });
});
