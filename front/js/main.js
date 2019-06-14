$(function ($) {
    "use strict";
  
    $(document).ready(function () {
  
      /*-----------------------------
        magnific popup activation
      -----------------------------*/
      $('.video-play').magnificPopup({
        type: 'video'
      });
      $('.img-popup').magnificPopup({
        type: 'image'
      });
  
   /**----------------------------
      back to top
      ------------------------------*/
      $(document).on('click', '.bottomtotop', function () {
        $("html,body").animate({
          scrollTop: 0
        }, 2000);
      });
  
  
      /**------------------------
       *  service-slider Area Start
       * ---------------------**/
      var $service_slider = $('.service-slider');
      $service_slider.owlCarousel({
        loop: true,
        autoplay: true,
        autoPlayTimeout: 1000,
        margin: 15,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
          0: {
            items: 1
          },
          450: {
            items: 2
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          },
          1200: {
            items: 4
          }
        }
      });
  
      /**------------------------
       *  about_slider Area Start
       * ---------------------**/
      var $about_slide = $('.about_slider');
      $about_slide.owlCarousel({
        loop: true,
        autoplay: true,
        autoPlayTimeout: 1000,
        margin: 15,
        dots: false,
        nav: true,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
          0: {
            items: 1
          },
          450: {
            items: 1
          },
          768: {
            items: 1
          },
          992: {
            items: 1
          },
          1200: {
            items: 1
          }
        }
      });
  
      /**------------------------
       *  gallery-slider Area Start
       * ---------------------**/
      var $gallery_slider = $('.gallery-slider');
      $gallery_slider.owlCarousel({
        loop: true,
        autoplay: true,
        autoPlayTimeout: 1000,
        margin: 15,
        dots: false,
        center: true,
        nav: true,
        navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
        responsive: {
          0: {
            items: 2
          },
          450: {
            items: 3
          },
          768: {
            items: 3
          },
          992: {
            items: 3
          },
          1200: {
            items: 3
          }
        }
      });
      /**------------------------
       *  Project Area Start
       * ---------------------**/
      var $testimonials_slider = $('.testimonials-slider');
      $testimonials_slider.owlCarousel({
        loop: true,
        autoplay: false,
        autoPlayTimeout: 1000,
        margin: 10,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
        responsive: {
          0: {
            items: 1
          },
          450: {
            items: 1
          },
          768: {
            items: 1
          },
          992: {
            items: 1
          },
          993: {
            items: 1
          },
          1200: {
            items: 1
          }
        }
      });
  
      /**------------------------
       *  Project Area Start
       * ---------------------**/
      var $package_slider = $('.package-slider');
      $package_slider.owlCarousel({
        loop: true,
        autoplay: false,
        autoPlayTimeout: 1000,
        margin: 10,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
        responsive: {
          0: {
            items: 1
          },
          450: {
            items: 1
          },
          768: {
            items: 1
          },
          992: {
            items: 1
          },
          993: {
            items: 1
          },
          1200: {
            items: 1
          }
        }
      });
  
    });
  
  
    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
      /*---------------------------
          back to top show / hide
      ---------------------------*/
      var ScrollTop = $('.bottomtotop');
      if ($(window).scrollTop() > 1000) {
        ScrollTop.fadeIn(1000);
      } else {
        ScrollTop.fadeOut(1000);
      }
      /*--------------------------
       sticky menu activation
      ---------------------------*/
      var st = $(this).scrollTop();
      var mainMenuTop = $('.navigation');
      if ($(window).scrollTop() > 60) {
        if (st > lastScrollTop) {
          // hide sticky menu on scrolldown 
          mainMenuTop.removeClass('nav-fixed');
  
        } else {
          // active sticky menu on scrollup 
          mainMenuTop.addClass('nav-fixed');
        }
  
      } else {
        mainMenuTop.removeClass('nav-fixed ');
      }
      lastScrollTop = st;
  
    });
  
  
    /*-----------------------------
     Blog Comments Reblay Form
     -----------------------------*/
    $(document).on('click', '.replay', function (e) {
      e.preventDefault();
      let parent = $(this).parent().parent().parent();
  
      if (parent.children('.replay-form').length < 1) {
        parent.append(`<div class="replay-form">
              <div class="replay-form-close">&times;</div>
              <form action="#">
                      <input type="text" class="input-field" placeholder="Commenting Publicly as UserName">
                      <button class="replay-comment-btn">SUBMIT COMMENT</button>
              </form>
              </div>`);
      }
    });
  
    $(document).on('click', '.replay-form-close', function (e) {
      e.preventDefault();
      $(this).parent().remove();
    });
  
  
    /*-----------------------------
        Accordion Active js
    -----------------------------*/
    $("#accordion, #accordion2").accordion({
      heightStyle: "content",
      collapsible: true,
      icons: {
        "header": "ui-icon-caret-1-e",
        "activeHeader": " ui-icon-caret-1-s"
      }
    });
  
      /*-----------------------------
        package details Tab
       -----------------------------*/
       $( "#tabs, #tabs2" ).tabs(); 
  
  });