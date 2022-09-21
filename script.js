const openNav =document.querySelector(".icon1")
const FermerNav =document.querySelector(".fermer")
const Menu =document.querySelector(".menu")

const positionMenu =Menu.getBoundingClientRect().left;

openNav.addEventListener("click", () =>{
    if(positionMenu <0){
        Menu.classList.add("monter")
    }
})


FermerNav.addEventListener("click", () =>{
    if(positionMenu <0){
        Menu.classList.remove("monter")
    }
})