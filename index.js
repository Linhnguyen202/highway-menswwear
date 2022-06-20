const btnShowHead = document.querySelector('.btn-header-responsive.menu')
const searchBtn = document.querySelector('.btn-header-responsive.search')
const headerMB = document.querySelector('.header-menu-responsive')
const boxSearch =  document.querySelector('.box-search')
const overlay = document.querySelector('.overlay')
btnShowHead.addEventListener('click',()=>{
    headerMB.classList.add('active')
    overlay.classList.add('show')
})
overlay.addEventListener('click',()=>{
    headerMB.classList.remove('active')
    overlay.classList.remove('show')
    boxSearch.classList.remove('active')
})
searchBtn.addEventListener('click',()=>{
    boxSearch.classList.add('active')
    overlay.classList.add('show')
})

const MenuResBtn1 = document.querySelectorAll('#menu-response-btn-1')
const MenuHead1 = document.querySelectorAll('#second-menu-smaller-1')
MenuResBtn1.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        if(MenuHead1[index].classList.contains('active')){
            MenuHead1[index].classList.remove('active')
        }
        else{
            MenuHead1[index].classList.add('active')
        }
       
    })
})
const MenuResBtn2 = document.querySelectorAll('#menu-response-btn-2')
console.log(MenuResBtn2)

const MenuHead2 = document.querySelectorAll('#second-menu-smaller-2')
console.log(MenuHead2)
MenuResBtn2.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        if(MenuHead2[index].classList.contains('active')){
            MenuHead2[index].classList.remove('active')
        }
        else{
            MenuHead2[index].classList.add('active')
        }
       
    })
})