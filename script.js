var loader=document.getElementById("loading")
function myfunc(){
  loader.style.display="none"
}
var navbar=document.getElementById("navbarId")
var container=document.getElementById("contains")
var scrollbtn=document.getElementById("scroll-btn");
window.onscroll=function() {
    if (window.pageYOffset > 20) {
    navbar.classList.add("sticky");
    container.style.boxShadow="0px 0px 0px 2px rgb(238, 235, 235)"
  } else {
    navbar.classList.remove("sticky");
    container.style.boxShadow="5px 10px 10px 2px rgba(33, 33, 33, 0.373)"
    
  }
  if(window.pageYOffset>500){
    scrollbtn.classList.add("show");
  }else{
    scrollbtn.classList.remove("show")
  }
    
}


var navmenu = document.getElementById("menuId");
var menu = document.getElementById("menubar");
function showmenu() {
  navmenu.classList.toggle("active");
  menu.classList.toggle("active");
}
function hidemenu(){
  navmenu.classList.remove("active");
  menu.classList.remove("active");
}
var up_arrow=document.getElementById("up-arrow")
var answer=document.getElementById("answer")
function change(){
  console.log(up_arrow.classList)
  up_arrow.classList.toggle("fa-angle-up")
  up_arrow.classList.toggle("fa-angle-down")
  answer.classList.toggle("active")
}
var up_arrow2=document.getElementById("up-arrow2")
var answe2r=document.getElementById("answer2")
function change1(){
  
  up_arrow2.classList.toggle("fa-angle-up")
  up_arrow2.classList.toggle("fa-angle-down")
  answer2.classList.toggle("active")
}
var up_arrow3=document.getElementById("up-arrow3")
var answer3=document.getElementById("answer3")
function change2(){
  
  up_arrow3.classList.toggle("fa-angle-up")
  up_arrow3.classList.toggle("fa-angle-down")
  answer3.classList.toggle("active")
}
var up_arrow4=document.getElementById("up-arrow4")
var answer4=document.getElementById("answer4")
function change3(){
  
  up_arrow4.classList.toggle("fa-angle-up")
  up_arrow4.classList.toggle("fa-angle-down")
  answer4.classList.toggle("active")
}