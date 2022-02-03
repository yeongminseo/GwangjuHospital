const hamberger = document.querySelector(".hamberger_btn")
const mobileGnb = document.querySelector(".mobile_gnb")

hamberger.addEventListener("click",()=>{
    hamberger.classList.toggle("active")

        mobileGnb.classList.toggle("active")
    
})

const mobileLi = document.querySelectorAll(".mobile_gnb li")
const mobileA = document.querySelectorAll(".mobile_gnb li a")
const mobileI = document.querySelectorAll(".mobile_gnb i")

function onClick (e) {
    e.target.classList.toggle("active")
}
console.log(mobileLi)
mobileLi.forEach((el,index)=>{
    el.addEventListener("click",onClick)
})
