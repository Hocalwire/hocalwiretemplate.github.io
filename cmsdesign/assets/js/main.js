
$(document).ready(function(){

  $('.sidebar-menu ul li').on("click",function(){
    $('.h-down-arrow').css('transform','rotate(90deg)');
  });

  // tooltip start
  tippy('[data-tippy-content]',{
    animation: 'fade',
    placement: 'right',
    arrow: true,
    animation: 'fade',
    interactive: true,
    theme: 'light',
  });
});

// sidebar start
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange(); 
});

// sidebar end
