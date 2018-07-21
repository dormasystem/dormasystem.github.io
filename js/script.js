$(document).on('ready', function() {

  "use strict";

  /*-------------------------------------
    Animations
  -------------------------------------*/
  $('[data-vp-animate]').each(function() {
    var classToAdd = 'visible-o animated '+($(this).data('vp-animate') ? $(this).data('vp-animate') : 'fadeIn');

    var delay = ($(this).data('vp-delay') ? $(this).data('vp-delay') : 0)+'ms';

    $(this).css({'animation-delay': delay});

    $(this).addClass('hidden-o').viewportChecker({
      classToAdd: classToAdd,
    });
  });

  /* =================================
  LOADER
  =================================== */
  $(".loader").delay(1200).fadeOut();
  $(".animationload").delay(1200).fadeOut("slow");

  /* =================================
  NAVBAR
  =================================== */
  jQuery(window).on('scroll', function() {
    var top = jQuery(document).scrollTop();
    var batas = jQuery(window).height();
    var header = jQuery('#header');
    var windowW = $( window ).width();

    if ( top > 0 ) {
      $('.if-s').addClass('sticky');
    }else {
      $('.if-s').removeClass('sticky');
    }
  });

  /* =================================
  TO TOP
  =================================== */
  var scroll = $(document).scrollTop();
  var toTop =  $('#back-to-top');

  /*-------------------------------------
  Top menu - fixed
  -------------------------------------*/
  jQuery(window).on('ready', function() {
    var winTop = $(document).scrollTop();

    if(winTop >= 150){
      toTop.addClass("visible");
    }else{
      toTop.removeClass("visible");
    }
  })

  /* =================================
  ISOTOP
  =================================== */
  function isotope() {

    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      isFitWidth: true,
      filter: '.all',
      masonry: {
        columnWidth: '.grid-sizer',
        isRTL: true
      }
    });

    $grid.imagesLoaded().progress( function() {
      $grid.isotope('layout');
    });

    $('.portfolio_filter a').on('click', function() {
      $('.portfolio_filter .active').removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      $grid.isotope({
        filter: selector,
        animationOptions: {
          duration: 500,
          animationEngine : "jquery"
        }
      });
      return false;
    });

    var $grid2 = $('.grid2').isotope({
      itemSelector: '.grid-item2',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer2',
        gutter: '.gutter-sizer2'
      }
    });

    $grid2.imagesLoaded().progress( function() {
      $grid2.isotope('layout');
    });

    var $grid3 = $('.grid3').isotope({
      itemSelector: '.grid-item3',
      isFitWidth: true,
      masonry: {
        columnWidth: '.grid-sizer3'
      }
    });

    $grid3.imagesLoaded().progress( function() {
      $grid3.isotope('layout');
    });

    var $gridv1 = $('.grid-v1');
    $gridv1.isotope({
      itemSelector: '.grid-item-v1',
      isFitWidth: true,
      filter: '.all',
      masonry: {
        columnWidth: '.grid-sizer-v1'
      }
    });

    $gridv1.imagesLoaded().progress( function() {
      $gridv1.isotope('layout');
    });

    $('.portfolio_filter a').on('click', function() {
      $('.portfolio_filter .active').removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      $gridv1.isotope({
        filter: selector,
        animationOptions: {
          duration: 500,
          animationEngine : "jquery"
        }
      });
      return false;
    });

    var $gridv2 = $('.grid-v2');
    $gridv2.isotope({
      itemSelector: '.grid-item-v1',
      isFitWidth: true,
      filter: '.design',
      masonry: {
        columnWidth: '.grid-sizer-v1'
      }
    });

    $gridv2.imagesLoaded().progress( function() {
      $gridv2.isotope('layout');
    });
  }
  isotope();
  $('#portfolio').appear(function() {
    isotope();
  });

  /* =================================
  SIDEBAR NAVIGATION
  =================================== */
  var hidden = 'is-hidden';
  var vissible = 'is-vissible';
  var overlay = $('.overlay');
  var sidebar_menu = $('.header-style-5');

  overlay.addClass(hidden);
  $('.open-sidebar').on('click', function() {
    sidebar_menu.addClass(vissible);
    overlay.removeClass(hidden);
  });

  $('.close-sidebar').on('click', function() {
    sidebar_menu.removeClass(vissible);
    overlay.addClass(hidden);
  });

  overlay.on('click', function() {
    sidebar_menu.removeClass(vissible);
    overlay.addClass(hidden);
  });

  /* =================================
  COUNTER
  =================================== */
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  /* =================================
  SKILLBAR
  =================================== */
  $('.skill').each(function () {
    var $this = $(this);
    var doughnutArray = [document.getElementById('doughnut').getContext('2d'), document.getElementById('doughnut2').getContext('2d'), document.getElementById('doughnut3').getContext('2d'), document.getElementById('doughnut4').getContext('2d')];
    for (var i = 0; i < doughnutArray.length; i++) {
      doughnutArray[i].lineWidth = 6; //thickness of the line
      doughnutArray[i].fillStyle = '#ededed';
      doughnutArray[i].strokeStyle = "#ededed";
      doughnutArray[i].beginPath();
      doughnutArray[i].arc(60, 60, 55, 4.72, 15, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
      doughnutArray[i].stroke();
    }

    $this.appear(function() {
      loadSkills1();
      loadSkills2();
      loadSkills3();
      loadSkills4();
    });

    /*Load skills one function*/
    function loadSkills1() {
      var ctx = document.getElementById('skill1').getContext('2d');
      var al = 0;
      var start = 4.72;
      var cw = ctx.canvas.width;
      var ch = ctx.canvas.height;
      var diff;
      ctx.fillStyle = "#fc4e1b";
      ctx.strokeStyle = "#fc4e1b";

      function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 7; //thickness of the line
        ctx.textAlign = 'center';
        ctx.font = "800 26px Poppins";
        ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        ctx.stroke();
        if (al >= 95) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
          clearTimeout(sim);
          // Add scripting here that will run when progress completes
        }
        al++;
      }
      var sim = setInterval(progressSim, 10); //speed
    }

    /*loadSkills2 function*/
    function loadSkills2() {
      var ctx = document.getElementById('skill2').getContext('2d');
      var al = 0;
      var start = 4.72;
      var cw = ctx.canvas.width;
      var ch = ctx.canvas.height;
      var diff;
      ctx.fillStyle = "#fc4e1b";
      ctx.strokeStyle = "#fc4e1b";

      function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 7; //thickness of the line
        ctx.textAlign = 'center';
        ctx.font = "800 26px Poppins";
        ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        ctx.stroke();
        if (al >= 90) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
          clearTimeout(sim);
          // Add scripting here that will run when progress completes
        }
        al++;
      }
      var sim = setInterval(progressSim, 10); //speed
    }

    /* loadSkill3 function*/
    function loadSkills3() {
      var ctx = document.getElementById('skill3').getContext('2d');
      var al = 0;
      var start = 4.72;
      var cw = ctx.canvas.width;
      var ch = ctx.canvas.height;
      var diff;
      ctx.fillStyle = "#fc4e1b";
      ctx.strokeStyle = "#fc4e1b";

      function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 7; //thickness of the line
        ctx.textAlign = 'center';
        ctx.font = "800 26px Poppins";
        ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        ctx.stroke();
        if (al >= 80) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
          clearTimeout(sim);
          // Add scripting here that will run when progress completes
        }
        al++;
      }
      var sim = setInterval(progressSim, 10); //speed
    }

    /* loadSkill4 function*/
    function loadSkills4() {
      var ctx = document.getElementById('skill4').getContext('2d');
      var al = 0;
      var start = 4.72;
      var cw = ctx.canvas.width;
      var ch = ctx.canvas.height;
      var diff;
      ctx.fillStyle = "#fc4e1b";
      ctx.strokeStyle = "#fc4e1b";

      function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 7; //thickness of the line
        ctx.textAlign = 'center';
        ctx.font = "800 26px Poppins";
        ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        ctx.stroke();
        if (al >= 75) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
          clearTimeout(sim);
          // Add scripting here that will run when progress completes
        }
        al++;
      }
      var sim = setInterval(progressSim, 10); //speed
    }
  });

  /* =================================
  VIDEO
  =================================== */
  var video = $('.video-wrap');
  if (video.length) {
    $(".overlay-image").on("click", function(){
      $(this).addClass("hide");
      $("#video-frame")[0].src += "&autoplay=1";
    });
  }

  /* =================================
  FAQ
  =================================== */
  $(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
    if (e.type=='show'){
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
    }
  });

  /* =================================
  SCROLL TO
  =================================== */
  $('.navbar-nav li a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
  $('a#back-to-top[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
  $('a.scroll-down[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
  $('.demo-banner a.btn-primary[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });


  /* =================================
  MAGNIFIC POPUP
  =================================== */
  $('.popup-with-zoom-anim').magnificPopup({
    type:'inline',
    fixedContentPos: false,
    removalDelay: 100,
    preloader: true,
    mainClass: 'my-mfp-zoom-in'
  });

  $('.popup-gallery-zoom').magnificPopup({
    type:'inline',
    fixedContentPos: false,
    removalDelay: 100,
    preloader: true,
    mainClass: 'my-mfp-zoom-in',
    callbacks: {
      open: initSliders
    }
  });

  $('.popup-youtube').magnificPopup({
    type: 'iframe',
    fixedContentPos: false,
    removalDelay: 100,
    mainClass: 'my-mfp-zoom-in',
    preloader: true,
  });

  /*-------------------------------------
    Slider portfolio
  -------------------------------------*/
  function initSliders(){
    var swiper = new Swiper('.swiper-gallery-container', {
      slidesPerView: 1,
      fixedContentPos: true,
      removalDelay: 100,
      closeBtnInside: true,
      preloader: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  /* =================================
  SWIPER SLIDER
  =================================== */
  if ($(".swiper-banner-container").length){
    var swiperAnimation = new SwiperAnimation();
    var mySwiper4 = new Swiper('.swiper-banner-container', {
      on: {
        init: function () {
          swiperAnimation.init(this).animate();
        },
        slideChange: function () {
          swiperAnimation.init(this).animate();
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  var swiper = new Swiper('.swiper-testimonial-container', {
    slidesPerView: 2,
    fixedContentPos: true,
    removalDelay: 100,
    closeBtnInside: true,
    preloader: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 640px
      992: {
        slidesPerView: 1,
      }
    },
    loop: 'true',
  });

  var swiper = new Swiper('.swiper-works-container', {
    slidesPerView: 3,
    fixedContentPos: true,
    removalDelay: 100,
    closeBtnInside: true,
    preloader: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      // when window width is <= 640px
      992: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
      }
    },
    loop: 'true',
  });

  var swiper = new Swiper('.swiper-gallery-container', {
    slidesPerView: 1,
    fixedContentPos: true,
    removalDelay: 100,
    closeBtnInside: true,
    preloader: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: 'true',
  });

  /* =================================
  WORDS ANIMATIONS
  =================================== */
  if ($(".tlt").length){
    $('.tlt').textillate({
      minDisplayTime: 1000,
      loop: true
    });
  }

  /* =================================
  DYNAMIC CARD
  =================================== */
  function SmallHeader(container){
    "use strict"
    this.container=container;
    this.matrixValues={
      "background":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,],
      "title":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,],
    }
    this.objectEvent=!1;
    this.init();
    this.movingTarget
  }

  SmallHeader.prototype={
    constructor:SmallHeader,
    init:function(){
      this.addEvents();
      this.movingTarget=$(this.container).find(".dynamic-card")
    },
    addEvents:function(){
      var self=this;
      if(this.objectEvent){
        $('#wrap').on("mousemove",this.container,function(e){
          self.moveMouse(e.clientX,e.clientY)
        });
        $('#wrap').on("mouseout",this.container,function(e){console.log('left');
          $(this).addClass("is-out");
          setTimeout(function(){
            $(this).removeClass("is-out")
          },500)
          var wrapper=this.container.find(".dynamic-card");
          self.rotateAll(wrapper,self.matrixValues.title,0.01,0.01,0)})
      }else{
        $(window).on("mousemove",function(e){
          self.moveMouse(e.clientX,e.clientY)
        })
      }
    },
    moveMouse:function(x,y){
      if(this.objectEvent){
        var targetOffsetX=$(this.movingTarget).offset().left;
        var targetOffsetY=$(this.movingTarget).offset().top;
        var targetWidth=$(this.movingTarget).outerWidth();
        var targetHeight=$(this.movingTarget).outerHeight();
        var centeredXPos=(x-targetOffsetX)-(targetWidth/2);
        var centeredYPos=(y-targetOffsetY)-(targetHeight/2)
      }else{
        var targetWidth=window.innerWidth;
        var targetHeight=window.innerHeight;
        var centeredXPos=x-(targetWidth/2);
        var centeredYPos=y-(targetHeight/2)
      }
      centeredXPos=centeredXPos.map(-(targetWidth/2),
        targetWidth/2,
        Math.PI,2*Math.PI);
      centeredYPos=centeredYPos.map(-(targetHeight/2),
        targetHeight/2,
        Math.PI,2*Math.PI);
      centeredXPos=Math.cos(centeredXPos);
      centeredYPos=Math.cos(centeredYPos);
      var wrapper=this.container.find(".dynamic-card");
      this.rotateAll(wrapper,this.matrixValues.title,centeredYPos*5,centeredXPos*5,0)
    },
    translateTarget:function(target,matrix,x,y,z){
      matrix[12]=x;
      matrix[13]=y;
      matrix[14]=z;
      matrix[15]=1;
      this.applyTransform(target,matrix)
    },
    rotateAll:function(target,matrix,x,y,z){
      x=x*Math.PI/180;
      y=y*Math.PI/180;
      z=z*Math.PI/180;
      var sin=Math.sin;
      var cos=Math.cos;
      matrix[0]=cos(y)*cos(z);matrix[1]=-cos(y)*sin(z);
      matrix[2]=sin(y);matrix[3]=0;
      matrix[4]=cos(x)*sin(z)+sin(x)*sin(y)*cos(z);
      matrix[5]=cos(x)*cos(z)-sin(x)*sin(y)*sin(z);
      matrix[6]=-sin(x)*cos(y);
      matrix[7]=0;
      matrix[8]=sin(x)*sin(z)-cos(x)*sin(y)*cos(z);
      matrix[9]=sin(x)*cos(z)+cos(x)*sin(y)*sin(z);
      matrix[10]=cos(x)*cos(y);matrix[11]=0;
      this.applyTransform(target,matrix)
    },
    rotateX:function(target,angle){
      var radians=angle*Math.PI/180;
      var sin=Math.sin;
      var cos=Math.cos;this.matrixValues[5]=cos(radians);
      this.matrixValues[6]=sin(radians);
      this.matrixValues[8]=sin(radians);
      this.matrixValues[9]=cos(radians);
      this.applyTransform(target)
    },
    rotateY:function(target,angle){
      var radians=angle*Math.PI/180;
      var sin=Math.sin;
      var cos=Math.cos;
      this.matrixValues[0]=cos(radians);
      this.matrixValues[2]=sin(radians);
      this.matrixValues[7]=-sin(radians);
      this.matrixValues[9]=cos(radians);this.applyTransform(target)
    },
    rotateZ:function(target,angle){
      var radians=angle*Math.PI/180;
      var sin=Math.sin;
      var cos=Math.cos;
      this.matrixValues[0]=cos(radians);
      this.matrixValues[1]=-sin(radians);
      this.matrixValues[4]=sin(radians);
      this.matrixValues[5]=cos(radians);
      this.applyTransform(target)
    },
    applyTransform:function(target,matrix){
      var matrix3d="matrix3d("+matrix.toString()+")";
      target.css({
        '-webkit-transform':matrix3d,
        '-moz-transform':matrix3d,
        '-ms-transform':matrix3d,
        '-o-transform':matrix3d,
        'transform':matrix3d
      })
    }
  }

  Number.prototype.map=function(in_min,in_max,out_min,out_max){
    return(this-in_min)*(out_max-out_min)/(in_max-in_min)+out_min
  }

  do_home_hero_anime()

  function do_home_hero_anime(){
    if($('#banner').hasClass('banner-style-1')){
      if($(".dynamic-wrapper").length>0&&$(".dynamic-wrapper").outerWidth()>640){
        var smallHeader=new SmallHeader($(".dynamic-wrapper"))
      }
    }
  }

  /* =================================
  PARALLAX
  =================================== */
  if($('body').outerWidth()>480){

    $('#banner.parallax').parallax("50%", 0.5);
    $('#about-us.parallax').parallax("50%", 0.5);
    $('#team.parallax').parallax("50%", 0.5);
    $('#prices.parallax').parallax("50%", 0.5);
    $('#testimonial.parallax').parallax("50%", 0.5);
    $('#page-info.parallax').parallax("50%", 0.5);

  }

  $(window).on('load', function() {
    'use strict';
    var ini =  $(this);
    var currentheight =  ini.height();
    if(currentheight >= 600){
      /* =================================
      PARTICLES
      =================================== */
      if ($("#particles-js").length){
        particlesJS("particles-js", {
          particles: {
            number: {
              value: 140,
              density: { enable: true, value_area: 1000 }
            },
            color: { value: "#ffffff" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 4 },
              image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
              value: 0.4,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
              enable: true,
              distance: 120,
              color: "#ffffff",
              opacity: 0.1,
              width: 1
            },
            move: {
              enable: true,
              speed: 4,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
            }
          },
          retina_detect: true
        });
      }

      /*banner*/
      if ($("#particles-banner-js").length){
        particlesJS("particles-banner-js", {
          particles: {
            number: {
              value: 140,
              density: { enable: true, value_area: 1000 }
            },
            color: { value: "#ffffff" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 4 },
              image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
              value: 0.4,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
              enable: true,
              distance: 120,
              color: "#ffffff",
              opacity: 0.1,
              width: 1
            },
            move: {
              enable: true,
              speed: 4,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
            }
          },
          retina_detect: true
        });
      }
    }
  });

  /* =================================
  COMING SOON
  =================================== */
  if ($("#countdown").length){
    $('#countdown').countdown({
      date: "December 14, 2018 18:03:26",
      render: function(data) {
        var el = $(this.el);
        el.empty()
        //.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
          .append("<div class='col-md-3 col-xs-3'><div class='text-gradient'>" + this.leadingZeros(data.days, 2) + "</div><span>days</span></div>")
          .append("<div class='col-md-3 col-xs-3'><div class='text-gradient'>" + this.leadingZeros(data.hours, 2) + "</div><span>hours</span></div>")
          .append("<div class='col-md-3 col-xs-3'><div class='text-gradient'>" + this.leadingZeros(data.min, 2) + "</div><span>min</span></div>")
          .append("<div class='col-md-3 col-xs-3'><div class='text-gradient'>" + this.leadingZeros(data.sec, 2) + "</div><span>sec</span></div>");
      }
    });
  }

});