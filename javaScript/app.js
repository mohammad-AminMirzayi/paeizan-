// if scroll change header backgrond color and size backgroundcolor white
window.addEventListener('scroll', ()=>{
    const header = document.querySelector('.header')
    
    if(window.pageYOffset > 0){
        header.classList.add('sticky')
    }else{
        header.classList.remove('sticky')
    }
})
// if scroll change header backgrond color and size backgroundcolor yellow
window.addEventListener('scroll', ()=>{
    const header = document.querySelector('.header')
    
    if(window.pageYOffset > 690){
        header.classList.add('sticky-3')
        arrowUp.classList.add('visabale')
    }else if(window.pageXOffset > 400){
        
        arrowUp.classList.remove('visibale')
    }else{
        header.classList.remove('sticky-3')
    }
})
// if scroll change header backgrond color and size backgroundcolor green
window.addEventListener('scroll', ()=>{
    const header = document.querySelector('.header')
    
    if(window.pageYOffset > 990){
        header.classList.add('sticky-')
        
    }else{
        header.classList.remove('sticky-')
    }
})
 // arrowup button
const arrowUp = document.querySelector('.Up')

// if click the button (arrowup) scrollto 0 0 of index
arrowUp.addEventListener('click', (e)=>{
    e.preventDefault()
    window.scrollTo(0, 0)
})




const btn = document.querySelector("#btn"),
headerMenu = document.querySelector('.header-menu')
let nav = document.querySelectorAll(".nav")

btn.addEventListener("click", () => {
    // e.preventDefault()
    if(headerMenu.className === "header-menu"){
        headerMenu.classList.add("show")
    }else{
        headerMenu.classList.remove("show")
    }
    
    if(headerMenu.className === "show"){
        headerMenuItem = document.querySelectorAll('.header-menu-item').style.display = "block";
      
    }
})