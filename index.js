const checkbtnEl = document.querySelector(".checkbtn");
const leftEl = document.querySelector(".left");
const counterEl = document.querySelector(".counter");
const closeIconEl = document.querySelector(".close-icon");
const loginEl = document.querySelector(".login");
const profileEl = document.querySelector(".icon");
const navEl=document.querySelector(".navbar")


let count=JSON.parse(localStorage.getItem("count-cart"))
if(!count){
  count=[]
}
// alert(count.length)
counterEl.innerHTML=count.length;

window.addEventListener("scroll",()=>{
  if(scrollY>80){
    navEl.style.boxShadow="2px 2px 5px rgba(0, 0, 0, 0.4)";
  }else{
    navEl.style.boxShadow="none";
  }
})

let v = 0;
checkbtnEl.addEventListener("click", () => {
  if (v === 0) {
    leftEl.style.left = 0 + "px";
    leftEl.style.opacity = 1;
    v++;
  } else {
    leftEl.style.left = -500 + "px";
    v--;
  }
});



closeIconEl.addEventListener("click", () => {
  loginEl.style.top = -80+"%";
  loginEl.style.opacity = 1;
});

profileEl.addEventListener("click", () => {
  loginEl.style.top = 50 + "%";
  loginEl.style.opacity = 1;
});
