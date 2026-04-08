const menuBtn = document.querySelector(".ri-menu-line");
const closeBtn = document.querySelector(".ri-close-line");
const sidebar = document.querySelector(".mobile_side_bar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});