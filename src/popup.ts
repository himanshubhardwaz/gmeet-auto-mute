// src/popup.ts

document.addEventListener("DOMContentLoaded", () => {
  // Your popup script logic here
  const popupElement = document.getElementById("popup-content");
  if (popupElement) {
    popupElement.textContent = "Hello from your popup! let see if it changes";
  }
});
