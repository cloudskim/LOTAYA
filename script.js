const active=document.querySelector('.image')
var next=active.nextElementSibling
var next1=next.nextElementSibling
active.addEventListener('click',()=>{
    active.classList.remove('active')
    next.classList.add('active')
})
next.addEventListener('click',()=>
{
    next.classList.remove('active')
    next1.classList.add('active')
})
next1.addEventListener('click',()=>
{
    next1.classList.remove('active')
    active.classList.add('active')
})