const copyMailToClipboard = () => {
  const email = "neusgarciadev@gmail.com";
  console.log("email", email);
  navigator.clipboard.writeText(email);
};

const showTooltip = (button) => {
  const tooltip = document.createElement("span");
  tooltip.className = "tooltip";
  tooltip.textContent = "Copied neusgarciadev@gmail.com to the clipboard!";

  button.appendChild(tooltip);

  setTimeout(() => {
    tooltip.classList.add("show");
  }, 500);

  setTimeout(() => {
    tooltip.classList.remove("show");
    tooltip.remove();
  }, 2000);
};

const emailButtons = document.querySelectorAll('[id="email-button"]');

emailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    try {
      copyMailToClipboard();
      showTooltip(button);
    } catch (err) {
      alert("There was an error copying the email to the clipboard", err);
    }
  });
});
