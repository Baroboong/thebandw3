let button = document.getElementById("header__buton")
let menu2 = document.getElementById("navDemo")
button.onclick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (menu2.style.display == "" || menu2.style.display == "none") {
        menu2.style.display = "block"
    }
    else {
        menu2.style.display = "none"
    }
}
window.addEventListener("click", () => {
    menu2.style.display = "none"
})
document.querySelector(".sub-list").addEventListener("click", function (e) { e.preventDefault() })
window.addEventListener('scroll',
    function () {
        if (this.innerWidth <= 575) {
            menu2.style.display = "none"
        }
    });
let form__body = document.querySelector(".main__form-container")
let buttonTikets = document.querySelectorAll(".tour__ticket  button")
let formBuy = document.querySelector(".form__buy-ticket")
let clickClose = document.querySelectorAll(".close_form")

function hide() {
    formBuy.style.display = "none"
}
function show() {
    formBuy.style.display = "block"
}
buttonTikets.forEach(x => {
    x.addEventListener("click", show)
})
form__body.addEventListener("click", function (e) {
    e.stopPropagation();
})
clickClose.forEach(x => {
    x.onclick = hide;
})
let header = document.querySelector("header")
window.addEventListener("scroll", () => {
    if (window.scrollY > header.scrollHeight) {
        header.classList.add("fixed")
    } else if (window.scrollY == 0) {
        header.classList.remove("fixed")

    }
})