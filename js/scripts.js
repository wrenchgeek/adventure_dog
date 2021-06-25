$( document ).ready(function() {

  console.log( "ready!" );

  var headerHeight = $('#header').height();

  $('.menu-item:first-child').click(function() {
    $('#copy-container').slideUp('fast');
    window.scroll(0, 0);
  });


  $('.menu-item:not(:first-child)').click(function() {
    $('#copy-container').css('display', 'inline-block');
    $('#copy-container > div').hide();
    $('#copy-container').slideDown('slow', function() {


      switch (event.target.id) {
        case "menu-about":
          $('#about-copy').fadeIn();
          break;
        case "menu-services":
          $('#services-copy').fadeIn();
          break;
        case "menu-pack":
          $('#pack-copy').fadeIn();
          break;
        case "menu-contact":
          $('#contact-copy').fadeIn();
          break;
      }
    });


  });


  $('#carousel-button-left').click(function() {
    $('#carousel-slide').css('left', '-500px');
  });
  $('#carousel-button-right').click(function() {
    $('#carousel-slide').css('left', '0px');
  });


});
