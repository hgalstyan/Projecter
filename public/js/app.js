const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const header = document.querySelector('.navigation-container');

hamburger.onclick = (e) => {
    //const nav = document.getElementsByTagName("nav")[0];
    hamburger.classList.toggle("is-active");
  
    (hamburger.classList[2] === "is-active") ? toggleHeight("300px","block") : toggleHeight("64px","none");
  };
  
  toggleHeight = (height, display) => {
    nav.style.display = display;
    header.style.height = height;
  }
  
  document.querySelector("body").onresize = () =>{
    hamburger.classList.remove("is-active");
    if(window.innerWidth > 1000) {
      toggleHeight("auto", "flex");
    } else {
      toggleHeight("64px", "none");
    }
  };
  
  nav.onclick = () => {
    if(window.innerWidth < 1000){
      hamburger.classList.remove("is-active");
      toggleHeight("64px", "none");
    }
  }