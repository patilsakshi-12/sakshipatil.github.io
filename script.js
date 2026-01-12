function validateForm() {
  let name = document.getElementById("sakshi pramod patil").value;
  let email = document.getElementById("patilsakshi3002@gmail.com").value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
    return false;
  }
  alert("Message sent successfully!");
  return true;const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

}
