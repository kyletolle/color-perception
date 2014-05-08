var lightenBackgroundInterval;

window.onload = function() {
  lightenBackgroundInterval = window.setInterval(lightenBackground, 200);
};

// Inspired by http://www.quirksmode.org/dom/getstyles.html
function getStyle(tagName, styleName) {
  var element = document.getElementsByTagName(tagName)[0];

  if (element.currentStyle) {
    var property = element.currentStyle[styleName];

  } else if (window.getComputedStyle) {
    var property =
      document.defaultView.
      getComputedStyle(element,null).
      getPropertyValue(styleName);
  }

  return property;
}


function lightenBackground() {
  var tagName = 'body';
  var styleName = 'background-color';
  var currentColor = getStyle(tagName, styleName);

  if (currentColor == 'rgb(255, 255, 255)') {
    window.clearInterval(lightenBackgroundInterval);
  }

  var newColor = incrementColor(currentColor);

  document.body.style.backgroundColor = newColor;
}

function incrementColor(currentColor) {
  var colors = currentColor.replace('rgb(','').replace(')','').split(',');

  var currentR = parseInt(colors[0],10)
  var currentG = parseInt(colors[1],10);
  var currentB = parseInt(colors[2],10);

  var newR = currentR+1;
  var newG = currentG+1;
  var newB = currentB+1;

  return 'rgb(' + [newR,newG,newB].join(',') + ')';
}



function backgroundColor() {
  document.body.style.backgroundColor;
}


