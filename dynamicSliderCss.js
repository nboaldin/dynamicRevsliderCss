
var api = revapi7;

api.on('revolution.slide.onchange', function(e, data) {
  var current = data.currentslide[0];
  var currentIndex = data.slideIndex;

  if (currentIndex) {
    jQuery(current).removeClass('grayscale-true').addClass('grayscale-' + api.find('li').attr('grayscale-color'));
  }

});

api.on('revolution.slide.onafterswap', function(e, data) {
  var previous = data.prevslide[0];

  jQuery(previous).removeClass('grayscale-true');
});
