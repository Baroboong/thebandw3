let button = document.getElementById("header__buton")
let menu2 = document.getElementById("navDemo")
button.onclick = function () {
    if (menu2.style.display == "" || menu2.style.display == "none") {
        menu2.style.display = "block"
    }
    else {
        menu2.style.display = "none"
    }
}