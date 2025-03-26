const menu = document.getElementById("toggle-menu");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  menu.classList.toggle("fa-x")
});
