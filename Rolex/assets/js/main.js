(function ($) {
	"use strict";

    jQuery(document).ready(function($){

     // -- services review -- //
        $(".menu_triggers").on('click', function(){
            $(".offcanvas_menu").addClass("active");
            $(".offcanvas_menu_overlay").addClass("active");
        });
        $(".menu_close i.fa, .offcanvas_menu_overlay").on('click', function(){
            $(".offcanvas_menu").removeClass("active");
            $(".offcanvas_menu_overlay").removeClass("active");
        });

     // -- type sources -- //
     var textWrapper = document.querySelector('.ml11 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
        .add({
        targets: '.ml11 .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 1000
        })
        .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 1000,
        delay: 200
        }).add({
        targets: '.ml11 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i+1)
        }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 2000
        });
        // -- services review -- //
        $(".sales_progressbar").circleProgress({
        animation:{
        duration:2000,
        easing:"circleProgressEasing",
        },
        delay: 3000,
        lineCap: "round",
        value: 0.67,
        size: 210,
        thickness: 8,
        emptyFill:'#fff',
        fill: {
        gradient: ['#393939'],
        }
        }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.progress_parcentage').html(Math.round(67 * progress) + '<i>%</i>');
        });

        $(".client_progressbar").circleProgress({
        animation:{
        duration:2000,
        easing:"circleProgressEasing",
        },
        delay: 3000,
        lineCap: "round",
        value: 0.30,
        size: 210,
        thickness: 8,
        emptyFill:'#fff',
        fill: {
        gradient: ['#393939'],
        }
        }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.progress_parcentage').html(Math.round(30 * progress) + '<i>%</i>');
        });

        $(".conversion_progressbar").circleProgress({
        animation:{
        duration:2000,
        easing:"circleProgressEasing",
        },
        delay: 3000,
        lineCap: "round",
        value: 0.50,
        size: 210,
        thickness: 8,
        emptyFill:'#fff',
        fill: {
        gradient: ['#393939'],
        }
        }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.progress_parcentage').html(Math.round(50 * progress) + '<i>%</i>');
        });
     // -- smooth menu trigger -- //
     $(".smooth_menu a").on('click', function(e){
         var anchor = $(this);
         $("html, body").stop().animate({
             scrollTop: $(anchor.attr('href')).offset().top - 65
         }, 1000);
         e.preventDefault();
     });
     // -- header sticky -- //
     $(".header_area").sticky({
        topSpacing:0,
     });
     // -- wow -- //
     var wow = new WOW({
        mobile: false
     });
     wow.init();       
     });

   jQuery(window).load(function(){
     // -- body preloader -- //
     $(".spinner").fadeOut();
     $(".rolex_preloader_wrap").delay(450).fadeOut('slow');
   });

}(jQuery));	