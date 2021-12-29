$(document).ready(function(){

  // dropdown menu
  $(".dropdown").click(function(){
      $(this).find(".dropdown-menu").slideToggle("fast");
  });

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

  // Tabs start
  $(function(){
    $('.tabsingle').click(function(){
    $('.targetdiv').hide();
    $('#div'+$(this).attr('target')).show();
    $('.tabsingle').removeClass('tab-active');
    $(this).addClass("tab-active");
    });
  });
  // tooltip start
  tippy('[data-tippy-content]',{
    animation: 'fade',
    placement: 'right',
    arrow: true,
    animation: 'fade',
    theme: 'light',
  });

  // light slider start
  $("#lightSlider").lightSlider({
    item: 5,
    pauseOnHover: true,
    controls: true,
    autoWidth: false,
    slideMove: 1,
    slideMargin: 15,
    pause: 5000,
    responsive: [{
            breakpoint: 992,
            settings: {
                item: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                item: 1
            }
        }
    ]
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
