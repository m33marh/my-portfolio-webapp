form.addEventListener("submit", function (e) {
  const email = form.querySelector('input[type="email"]').value;
  if (!email.includes("@")) {
    e.preventDefault();
    alert("Please enter a valid email address.");
  }
});
// Toggle dark mode on button click
document.getElementById("toggle-mode").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
// Image preview modal
const modal = document.getElementById("imagePreviewModal");
const modalImg = document.getElementById("modalImage");
const profileImg = document.querySelector(".profile-img");
const closeBtn = document.querySelector(".close");

profileImg.addEventListener("click", function () {
  modal.style.display = "block";
  modalImg.src = this.src;
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
