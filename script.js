const header = document.querySelector(".header");
const menuItemList = document.querySelectorAll(".menu-item");

window.addEventListener("scroll", function () {
  header.classList.add("detached");

  menuItemList.forEach((menuItem) => {
    menuItem.style.color = "var(--W-600)";
  });
});
