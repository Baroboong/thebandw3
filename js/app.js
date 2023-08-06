let form__body = document.querySelector(".main__form-container")
let buttonTikets = document.querySelectorAll(".tour__ticket  button")
let formBuy = document.querySelector(".form__buy-ticket")
let clickClose = document.querySelectorAll(".close_form")
let header = document.querySelector("header")
let button = document.getElementById("header__buton")
let menu2 = document.getElementById("navDemo")
button.onclick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (menu2.style.display == "" || menu2.style.display == "none") {
        menu2.style.display = "block"
        header.classList.add("black")
    }
    else {
        menu2.style.display = "none"
        header.classList.remove("black")
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
window.addEventListener("scroll", () => {
    if (window.scrollY > header.scrollHeight) {
        header.classList.add("fixed")
        header.classList.add("black")
    } else if (window.scrollY <= 0) {
        header.classList.remove("fixed")
        header.classList.remove("black")

    }
})