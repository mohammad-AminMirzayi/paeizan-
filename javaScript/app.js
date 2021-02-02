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