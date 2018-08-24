var api = revapi7.on('revolution.slide.onchange', function(e, data) {

  jQuery('.widget_revslider li').removeClass('grayscale-true').addClass('grayscale-' + api.find('li').attr('grayscale-color'));

});

////////////////////////////////

var api = revapi7.on('revolution.slide.onchange', function(e, data) {
  var current = data.currentslide[0];
  var currentGrayValue = current.attributes.grayscale.value;

  if (currentGrayValue === "true") {
    console.log('Getting somewhere');
    current.style.filter = 'grayscale(100%)';
    current.style.animation = 'grayscale 2.5s 1s 1 forwards';
  }

});

866-635-1330

////////////////////////////////
var api = revapi7;

api.on('revolution.slide.onchange', function(e, data) {
  var current = data.currentslide[0];
  var currentIndex = data.slideIndex;

  if (currentIndex === 1 || currentIndex === 2 || currentIndex === 3) {
    jQuery(current).removeClass('grayscale-true').addClass('grayscale-' + api.find('li').attr('grayscale-color'));
  }

});

api.on('revolution.slide.onafterswap', function(e, data) {
  var previous = data.prevslide[0];

  jQuery(previous).removeClass('grayscale-true');
});
