const createNewMeetbutton = document.getElementById(
  "create-meet-button"
) as HTMLButtonElement;

// createNewMeetbutton.addEventListener("click", async () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     const currentTab = tabs[0];
//     if (currentTab.id) {
//       chrome.tabs.sendMessage(currentTab.id, "create-new-meet", (response) => {
//         if (chrome.runtime.lastError) {
//           console.error(
//             "Error sending message:",
//             JSON.stringify({ error: chrome.runtime.lastError })
//           );
//         } else {
//           console.log("Message sent successfully:", response);
//         }
//       });
//     } else {
//       console.error("Error getting current tab:", chrome.runtime.lastError);
//     }
//   });
// });

createNewMeetbutton.addEventListener("click", async () => {
  chrome.tabs.create({ url: "https://meet.new/" }, (tab) => {
    if (tab?.id) {
      chrome.tabs.sendMessage(tab.id, "create-new-meet", (response) => {
        if (chrome.runtime.lastError) {
          console.error("Error sending message:", chrome.runtime.lastError);
        } else {
          console.log("Message sent successfully:", response);
        }
      });
    }
  });
});
