const btns = document.querySelectorAll(".menu-btn");
const mnBox = document.querySelectorAll(".menu-box");
const arrow = document.querySelectorAll(".arrow");
const overlay = document.querySelector(".overlay");
const ham = document.querySelector(".ham-btn");
const hamImg = document.querySelector(".ham-img");
const clickMenu = document.querySelector(".header-lt");
const menOvly = document.querySelector(".ovly");


ham.addEventListener("click", (e) => {
    const menuOpt = clickMenu.classList
    if (menuOpt.contains("open-m")) {
        menuOpt.remove("open-m")
        menOvly.classList.remove("show")
        hamImg.src = "images/icon-hamburger.svg"
    } else {
        menuOpt.add("open-m")
        menOvly.classList.add("show")
        hamImg.src = "images/icon-close.svg"

    }
})
menOvly.addEventListener("click", (e) => {
    clickMenu.classList.remove("open-m")
    menOvly.classList.remove("show")
    hamImg.src = "images/icon-hamburger.svg"

})

btns.forEach(openList)
function openList(btn) {
    btn.addEventListener("click", (e) => {

        removeBox()

        const taget = e.currentTarget.id
        const show = `.${taget}-box`
        const owo = document.querySelector(`${show}`)
        const ctarg = document.querySelector(`.${taget}`)
        owo.classList.add('show')
        ctarg.classList.add(`atv`)
        overlay.classList.add("show")



    })

}
function removeBox() {
    mnBox.forEach((item) => item.classList.remove('show'))
    btns.forEach((item) => item.classList.remove('atv'))

    overlay.classList.remove("show")

}
overlay.addEventListener("click", removeBox)
