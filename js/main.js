$(document).ready(function() {

  /* hamburger handler */
  $('#hamburger').click(function() {
    $('#hamburger').toggleClass("is-active");
    $('.navbar-collapse').toggleClass("collapse");
    if($(window).scrollTop() == 0) {
      /* Add background to navbar */
      $('.navbar').toggleClass('scrolled');
    }
  });
  $('.nav-link').click(function() {
    if($('#hamburger').css('display') == "block") {
      $('#hamburger').toggleClass("is-active");
      $('.navbar-collapse').toggleClass("collapse");  
    }
  });

  /* Images grid height handler - on load */
  var gridWidth = $('.grid').width();
  $('.grid').height(gridWidth);

  /* Images grid height handler - on resize */
  $(window).resize(function() {
    var gridWidth = $('.grid').width();
    $('.grid').height(gridWidth);
  });

  /* Animated scroll */
  $('.scrollTo').click(function() {
    var page = $(this).attr('href');
    var speed = 750; 
    if (page == "#") {
      $('html, body').animate( { scrollTop: 0 }, speed );
    }
    else {
      $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
    }
    return false;
  });


  var sections = $('section.container');

  /* Handlers for if page is loaded at scroll position != 0 */
  if($(window).scrollTop() > 0) {
      /* Add background to navbar */
      $('.navbar').addClass('scrolled');

      /* Activate the 'scrollSpy' function */
      sections.each(function(index, tag) {

      var section = $(tag),
          offset = section.offset().top,
          height = section.outerHeight(),
          id = section.attr('id');

      if($(window).scrollTop() >= (offset - 100) && $(window).scrollTop() <= (offset + height)) {
        $('.nav-link[href="#'+id+'"').addClass('active');
      }
      else {
        $('.nav-link[href="#'+id+'"').removeClass('active');
      }
    });
  }


  /* On scroll handlers */
  $(window).scroll(function() {

    /* Handle background to navbar */
    if($(window).scrollTop() > 0) {
      $('.navbar').addClass('scrolled');
    }
    else {
      $('.navbar').removeClass('scrolled');
    }

    /* Handle the 'scrollSpy' function */
    sections.each(function(index, tag) {

      var section = $(tag),
          offset = section.offset().top,
          height = section.outerHeight(),
          id = section.attr('id');

      if($(window).scrollTop() >= (offset - 100) && $(window).scrollTop() <= (offset + height)) {
        $('.nav-link[href="#'+id+'"').addClass('active');
      }
      else {
        $('.nav-link[href="#'+id+'"').removeClass('active');
      }

    });

    /* Handle animation for 'join us' section content */
    if($(window).scrollTop() >= ($('#join').offset().top - 200) && $(window).scrollTop() <= ($('#join').offset().top + $('#join').outerHeight())) {
      $('.join-content').each(function(index, tag) {
        var div = $(tag);

        div.css('animation-delay', ''+index/$('.join-content').length+'s');
        div.removeClass('animated fadeOutDown');
        div.addClass('animated fadeInUp');
      });
    }
    else {
      $('.join-content').each(function(index, tag) {
        var div = $(tag);


        div.removeClass('animated fadeInUp');
        div.addClass('animated fadeOutDown');
      });
    }

    /* Handle animation for 'tarifs' section content */
    if($(window).scrollTop() >= ($('#tarifs').offset().top - 200) && $(window).scrollTop() <= ($('#tarifs').offset().top + $('#tarifs').outerHeight())) {
      $('.pricing-cards').each(function(index, tag) {
        var card = $(tag);

        card.css('animation-delay', ''+index/$('.pricing-cards').length+'s');
        card.removeClass('animated fadeOutDown');
        card.addClass('animated fadeInUp');
      });
      setTimeout(function(){
        $('.pricing-infos').removeClass('animated fadeOutDown');
        $('.pricing-infos').addClass('animated fadeInUp');
      }, 1000);
    }
    else {
      $('.pricing-cards').each(function(index, tag) {
        var card = $(tag);

        card.removeClass('animated fadeInUp');
        card.addClass('animated fadeOutDown');
      });
      $('.pricing-infos').removeClass('animated fadeInUp');
      $('.pricing-infos').addClass('animated fadeOutDown');
    }

    /* Handle animation for 'coachs' section content */
    if($(window).scrollTop() >= ($('#coachs').offset().top - 200) && $(window).scrollTop() <= ($('#coachs').offset().top + $('#coachs').outerHeight())) {
      $('.coach-cards').each(function(index, tag) {
        var card = $(tag);

        card.css('animation-delay', ''+index/$('.coach-cards').length+'s');
        card.removeClass('animated fadeOutDown');
        card.addClass('animated fadeInUp');
      });
    }
    else {
      $('.coach-cards').each(function(index, tag) {
        var card = $(tag);

        card.removeClass('animated fadeInUp');
        card.addClass('animated fadeOutDown');
      });
    }

    /* Handle animation for 'family' section content */
    if($(window).scrollTop() >= $('#family').offset().top && $(window).scrollTop() <= ($('#grid').offset().top + $('#grid').outerHeight())) {
      $('.grid').each(function(index, tag) {
        var image = $(tag);

        image.css('animation-delay', ''+index/$('.grid').length+'s');
        image.removeClass('animated zoomOut');
        image.addClass('animated zoomIn');
      });
    }
    else {
      $('.grid').each(function(index, tag) {
        var image = $(tag);

        image.removeClass('animated zoomIn');
        image.addClass('animated zoomOut');
      });
    }
  });  
});