var menu_btn = document.querySelector("#menu-btn")
var sidebar = document.querySelector("#sidebar")
var container = document.querySelector(".main")

if(menu_btn) {
    menu_btn.addEventListener("click", () => {
        sidebar.classList.toggle("active-nav")
        container.classList.toggle("active-cont")
    })
} else {
    menu_btn = null
    sidebar = null
    container = null
}