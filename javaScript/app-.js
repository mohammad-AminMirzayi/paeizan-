// if scroll change header backgrond color and size backgroundcolor white
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header')

    if (window.pageYOffset > 0) {
        header.classList.add('sticky')
        arrowUp.classList.add('show-arrowUp')
    } else {
        header.classList.remove('sticky')

    }
})
// if scroll change header backgrond color and size backgroundcolor yellow
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header')

    if (window.pageYOffset > 690) {
        header.classList.add('sticky-3')
    } else {
        header.classList.remove('sticky-3')
        arrowUp.classList.remove("show-arrowUp")

    }


})
// if scroll change header backgrond color and size backgroundcolor green
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header')

    if (window.pageYOffset > 990) {
        header.classList.add('sticky-')

    } else {
        header.classList.remove('sticky-')
    }
})
// arrowup button
const arrowUp = document.querySelector('.Up')

// if click the button (arrowup) scrollto 0 0 of index
arrowUp.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo(0, 0)
})


// show mobile menu and hide if click button
const btn = document.querySelector("#btn"),
    headerMenu = document.querySelector('.header-menu')
let nav = document.querySelectorAll(".nav")

btn.addEventListener("click", () => {
    // e.preventDefault()
    if (headerMenu.className === "header-menu") {
        headerMenu.classList.add("show")
    } else {
        headerMenu.classList.remove("show")
    }

    if (headerMenu.className === "show") {
        headerMenuItem = document.querySelectorAll('.header-menu-item').style.display = "block";

    }
})

const trint = document.querySelector('#trint'),
    tape = document.querySelector('#tape'),
    truck = document.querySelector('#truck'),
    edit = document.querySelector('#edit'),
    mainSection = document.querySelector(".price"),
    ptTrint = document.querySelector(".trint-p")

// icon section listener click

trint.addEventListener('click', () => {

    alert("در قالیشویی پائیزان از بهترین شامپو ها برای شستن فرش های شما عزیزان استفاده میکنند")
});
truck.addEventListener('click', () => {
    alert("تحویل سریع به موقع و با نظم را با قالیشویی پائیزان تجربه کنید")
});
edit.addEventListener('click', () => {
    alert("فاکتور دقیق فرش شما درب منزل")
});
tape.addEventListener('click', () => {
    alert("بسته بندی و کاور منظم در قالیشویی پائیزان با بهترین دستگاها")
})