let toastBox = document.getElementById("toastBox");
let successMessage =
  '<i class="fa-solid fa-circle-check"></i>Successfully Message';
let errorMessage = '<i class="fa-solid fa-circle-xmark"></i>Error Message';
let invalidMessage =
  '<i class="fa-solid fa-circle-exclamation"></i>Invalid Message';

function showToast(message) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = message;
  toastBox.appendChild(toast);

  if (message.includes("Error")) {
    toast.classList.add("error");
  }
  if (message.includes("Invalid")) {
    toast.classList.add("invalid");
  }
  setTimeout(() => {
    toast.remove();
  }, 4000);
}
