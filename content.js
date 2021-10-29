// from stackoverflow - a way to insert code to access objects on the page
// I do not know javascript! don't learn from me ;)
var insertCode = `// Code here.

var url = window.PAGE_MODEL.propertyData.broadband.broadbandCheckerUrl;

// https://stackoverflow.com/questions/1162529/javascript-replace-regex

function reEscape(s) {
    return s.replace(/([.*+?^$|(){}\[\]])/mg, "\\$1");
}

var re = new RegExp(reEscape('.*/rightmove/([a-zA-Z0-9]+)?.*$'));
var postcode = url.replace(re,"$1");

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let speed_display = data.speed_display;
  var addr = document.querySelectorAll('[itemProp=streetAddress]');
  addr[0].innerHTML += ' <em style="color:orange;font-weight:bold;">' + speed_display + ' ' + postcode + ' </em>';
})
.catch(function(error) {
  console.log(error);
});

`;

var script = document.createElement('script');
script.textContent = insertCode;
(document.head||document.documentElement).appendChild(script);
script.remove();

