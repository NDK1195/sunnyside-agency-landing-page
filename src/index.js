const iconMenuMobile = document.getElementById("icon-menu-mobile");
const menuMobile = document.getElementById("menu-mobile");

iconMenuMobile.addEventListener("click", () => {
  menuMobile.classList.toggle("hidden");
});
