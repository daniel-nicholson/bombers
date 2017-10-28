// Parse the URL parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// Give the parameter a variable name
var dynamicContent = getParameterByName('stm');

 $(document).ready(function() {

  // Check if the URL parameter is apples
  if (dynamicContent == 'family') {
    $('#family-price').show();
    $('#family-header').show();
  }
  // Check if the URL parameter is oranges
  else if (dynamicContent == 'U25' || dynamicContent == 'u25' ) {
    $('#U25-price').show();
    $('#U25-header').show();
  }
  // Check if the URL parmeter is empty or not defined, display default content
  else {
    $('#regular-price').show();
    $('#regular-header').show();
  }
});
