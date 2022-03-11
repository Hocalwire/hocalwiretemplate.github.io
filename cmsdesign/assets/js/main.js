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
  alterClass();

  

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
            item: 2,
            slideMargin: 10,
        }
      }
    ]
  });
  // accordion start
  $('.acc__title').click(function(j) {
            
    var dropDown = $(this).closest('.acc__card').find('.acc__panel');
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
    
    if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    } else {
    $(this).closest('.acc').find('.acc__title.active').removeClass('active');
    $(this).addClass('active');
    }
    
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });


});

// dropdown Menu start
var acc = document.getElementsByClassName("sidebar_accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var sidebar_dropdown = this.nextElementSibling;
    if (sidebar_dropdown.style.display === "block") {
      sidebar_dropdown.style.display = "none";
    } else {
      sidebar_dropdown.style.display = "block";
    }
  });
}

// sidebar start
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
searchBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
});
// sidebar end