$(document).ready(function () {


});
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
//////////////////  main  //////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
$(document).ready(function () {
  // load
  // $('.loader').fadeOut("slow");

  // Tooltips Initialization
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  //navbar animation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();

    if ((appScroll > 60) && (appScroll < 99999999999)) {
      $(".navbar").addClass("animatedNav");

    };
    if ((appScroll > 0) && (appScroll < 60)) {
      $(".navbar").removeClass("animatedNav");
    };
  });


  // select2
  $('.select2').select2({
    minimumResultsForSearch: -1
  });
  $('.select2-search').select2({});
  // img gallery
  $('[data-fancybox]').fancybox({
    buttons: [
      "zoom",
      // "share",
      "slideShow",
      "fullScreen",
      // "download",
      "thumbs",
      "close"
    ],
    transitionEffect: "slide",
  });

  //dropify
  $('.dropify').dropify();


  var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });

  wow.init();

});