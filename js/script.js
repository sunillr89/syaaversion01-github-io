(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(700);
  });

  //  Search Form Open
  $('#searchOpen').on('click', function () {
    $('.search-form').addClass('open');
  });
  $('#searchClose').on('click', function () {
    $('.search-form').removeClass('open');
  });

  //Hero Slider
  $('.hero-slider').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>',
    dots: true,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false,
    customPaging: function (slider, i) {
      
      
    },
    responsive: [{
      breakpoint: 576,
      settings: {
        arrows: false
      }
    }]
  });
  $('.hero-slider').slickAnimation();

  // hero slider without pagination
  $('.hero-slider-2').slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: false
  });
  $('.hero-slider-2').slickAnimation();

  // slick slider
  $('.work-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // about slider
  $('.about-slider').slick({
    arrows: true,
    autoplay: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>'
  });
  // about post slider
  $('.post-slider').slick({
    arrows: true,
    autoplay: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>'
  });

  // Accordions
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
  });

  // testimonial slider
  $('.testimonial-slider').slick({
    infinite: false,
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>'
  });

  // clients logo slider
  $('.client-logo-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //   magnific popup video
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-zoom-in',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true
  });

  // Magnific Popup Image
  $('.popup-image').magnificPopup({
    type: 'image',
    removalDelay: 160, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    closeOnContentClick: true,
    midClick: true,
    fixedContentPos: true,
    fixedBgPos: true
  });

  // filter
  $(document).ready(function () {
    var containerEl = document.querySelector('.filtr-container');
    var filterizd;
    if (containerEl) {
      filterizd = $('.filtr-container').filterizr({});
    }
    //Active changer
    $('.fltr-controls').on('click', function () {
      $('.fltr-controls').removeClass('active');
      $(this).addClass('active');
    });
  });

  // animation scroll js
  var html_body = $('html, body');
  $('nav a, .page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 90
        }, 1500, 'easeInOutExpo');
        return false;
      }
    }
  });

  // easeInOutExpo Declaration
  jQuery.extend(jQuery.easing, {
    easeInOutExpo: function (x, t, b, c, d) {
      if (t === 0) {
        return b;
      }
      if (t === d) {
        return b + c;
      }
      if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      }
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  });

  // back to top button
  $('.back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
  });

  // -----------------------------
  //  Count Up
  // -----------------------------
  function counter() {
    var oTop;
    if ($('.count').length !== 0) {
      oTop = $('.count').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });

  // syotimer
  $('#simple-timer').syotimer({
    year: 2019,
    month: 1,
    day: 31,
    hour: 0,
    minute: 0
  });

  // AOS
  AOS.init();


  //  Parallax background
  function bgParallax() {
    if ($('.parallax').length) {
      $('.parallax').each(function () {
        var height = $(this).position().top;
        var resize = height - $(window).scrollTop();
        var doParallax = -(resize / 5);
        var positionValue = doParallax + 'px';
        var img = $(this).data('bg-image');

        $(this).css({
          backgroundImage: 'url(' + img + ')',
          backgroundPosition: '50%' + positionValue,
          backgroundSize: 'cover'
        });
      });
    }
  }

  // DATA BACKGROUND IMAGE
  var sliderBgSetting = $('.slide-bg-image');
  sliderBgSetting.each(function (indx) {
    if ($(this).attr('data-background')) {
      $(this).css('background-image', 'url(' + $(this).data('background') + ')');
    }
  });

  // SWIPER SLIDER
  var menu = [];
  jQuery('.swiper-slide').each(function (index) {
    menu.push(jQuery(this).find('.slide-inner').attr('data-text'));
  });
  var interleaveOffset = 0.5;
  var swiperOptions = {
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false
    },
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    on: {
      progress: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector('.slide-inner').style.transform =
            'translate3d(' + innerTranslate + 'px, 0, 0)';
        }
      },

      /* touchStart: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = '';
        }
      }, */

      setTransition: function (speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + 'ms';
          swiper.slides[i].querySelector('.slide-inner').style.transition =
            speed + 'ms';
        }
      }
    }
  };
  var swiper = new Swiper('.swiper-container', swiperOptions);


})(jQuery);