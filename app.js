const body = document.querySelector('body');
const menuButton = document.querySelector(".navbar-menu--icon");
const mobileMenu = document.querySelector(".navbar--list");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

body.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && e.target !== menuButton) {
    mobileMenu.classList.add("hidden");
  }
});

[...mobileMenu.children].forEach(li => {
  li.addEventListener('click', () => {
    document.querySelector('.active') ? document.querySelector('.active').classList.remove('active') : '';
    li.classList.add('active')
  })
});