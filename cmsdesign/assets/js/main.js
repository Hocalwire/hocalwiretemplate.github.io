$(document).ready(function(){

  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww > 991) {
    $('.sidebar').removeClass('.close');
    } else if (ww >= 0) {
    $('.sidebar').addClass('open');
    };
  };
  $(window).resize(function(){
      alterClass();
  });
  //Fire it when the page first loads:
  alterClass();

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
