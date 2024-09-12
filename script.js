const copyMailToClipboard = () => {
  const email = "neusgarciadev@gmail.com";
  console.log("email", email);
  navigator.clipboard.writeText(email);
};

const showNotification = (button) => {
  const notification = document.createElement("span");
  notification.className = "notification";
  notification.textContent = "Copied neusgarciadev@gmail.com to the clipboard!";

  button.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 500);

  setTimeout(() => {
    notification.classList.remove("show");
    notification.remove();
  }, 4000);
};

const emailButtons = document.querySelectorAll('[id="copy-email"]');

emailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    try {
      copyMailToClipboard();
      showNotification(button);
    } catch (err) {
      alert("There was an error copying the email to the clipboard", err);
    }
  });
});
