$( document ).ready(function() {

  console.log( "ready!" );

  var headerHeight = $('#header').height();

  $('.menu-item:first-child').click(function() {
    $('#copy-container').slideUp();
    window.scroll(0, 0);
  });

  $('.menu-item:not(:first-child)').click(function() {
    $('#copy-container').slideDown();
    $('#copy-container').css('display', 'inline-block');
console.log(document.body.scrollTop);

//console.log(event.target.id);
//    switch (event.target.id) {
//      case "menu-about":
//        $('#about-copy').fadeIn();
//        break;
//      case "menu-services":
//        $('#services-copy').fadeIn();
//        break;
//    }
//    window.scroll(0, headerHeight);

  });





});
