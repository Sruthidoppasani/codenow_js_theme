var container=document.querySelector('#container')
var icon=document.querySelector('#icon')
var btn=document.querySelector('#btn')

btn.addEventListener('click',()=>{
    if(container.classList.contains('dark')){
        container.classList.remove('dark')
        container.classList.add('light')
        icon.classList.add('ri-lightbulb-flash-fill')
        icon.classList.remove('ri-lightbulb-line')
        btn.textContent='OFF'
    }
    else{
        container.classList.remove('light')
        container.classList.add('dark')
        icon.classList.add('ri-lightbulb-line')
        icon.classList.remove('ri-lightbulb-flash-fill')
        btn.textContent='ON'
    }
})
    
