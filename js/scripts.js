$( document ).ready(function() {

  console.log( "ready!" );
  var headerHeight = $('#header').height();

  $('.menu-item:first-child').click(function() {
    $('#copy-container').slideUp('fast');
    window.scroll(0, 0);
  });


  $('.menu-item:not(:first-child)').click(function() {
    var menuId = event.target.id;

    $('#copy-container > div').hide();

//    switch (menuId) {
//      case "menu-about":
//        $('#about-copy').css('display': 'initial', 'visibility': 'visible');
//        break;
//      case "menu-services":
//        $('#services-copy').css('display': 'initial', 'visibility': 'visible');
//        break;
//      case "menu-pack":
//        $('#pack-copy').css('display': 'initial', 'visibility': 'visible');
//        break;
//      case "menu-contact":
//        $('#contact-copy').css('display': 'initial', 'visibility': 'visible');
//        break;
//    }



    $('#copy-container').slideDown('fast', function() {

      switch (menuId) {
        case "menu-about":
          $('#about-copy').fadeIn('fast');
          break;
        case "menu-services":
          $('#services-copy').fadeIn('fast');
          break;
        case "menu-pack":
          $('#pack-copy').fadeIn('fast');
          break;
        case "menu-contact":
          $('#contact-copy').fadeIn('fast');
          break;
      }
    });

  });



  var carouselIndex = 0;

  $('#carousel-button-left').click(function() {
    if (carouselIndex > 0) {
      carouselIndex--
    }
    if (carouselIndex == 0) {
      $('#carousel-button-left').fadeOut();
    }
    if (carouselIndex < 4) {
      $('#carousel-button-right').fadeIn();
    }
    $('#carousel-slide').css('left', -1 * carouselIndex * $('#carousel-window').width() - 1);
  });
  $('#carousel-button-right').click(function() {
    if (carouselIndex < 4) {
      carouselIndex++
    }
    if (carouselIndex == 4) {
      $('#carousel-button-right').fadeOut();
    }
    if (carouselIndex > 0) {
      $('#carousel-button-left').fadeIn();
    }
    $('#carousel-slide').css('left', -1 * carouselIndex * $('#carousel-window').width() - 1);
  });























});
