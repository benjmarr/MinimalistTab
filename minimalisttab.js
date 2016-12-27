// Copyright Benjamin Developments (c) 2016-2017 - All rights reserved
console.log("Minimalist Tab copyright Benjamin Developments (c) 2016-2017 - All rights reserved.");
var gitUrl = "https://github.com/BenAndy/MinimalistTab/tree/master";
var newColour;
// Cookie handlers
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
};
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  };
  return "";
};
// Anti-Right click
if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    if (document.activeElement.tagName != "INPUT") {
      e.preventDefault();
    };
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    if (document.activeElement.tagName != "INPUT") {
      window.event.returnValue = false;
    };
  });
};
// Check for background color
if (getCookie("background") === "") {
  setCookie("background", "#BDBDBD", 365);
};
// Clock and date
var nyear;
var nmonth;
var ndate;
var hourtf;
var tmonth = new Array ("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
setInterval(clock, 100);
function clock() {
  var d = new Date();
  nyear = d.getYear();
  nmonth = d.getMonth();
  ndate = d.getDate();
  var nhour = d.getHours(), nmin = d.getMinutes(), ap;
  var thour = d.getHours();
  if (nhour === 0) {
    ap = " AM";
    nhour = 12;
  } else if (nhour < 12) {
    ap = " AM";
  } else if (nhour === 12) {
    ap = " PM";
  } else if (nhour > 12) {
    ap = " PM";
    nhour -= 12;
  };
  if (nmin <= 9) {
    nmin = "0" + nmin;
  };
  nyear = nyear + 1900;
  document.getElementById("clockbox").innerHTML = nhour + ":" + nmin + ap;
  document.getElementById("datebox").innerHTML = ndate + " " + tmonth[nmonth] + " " + nyear;
};
// Button click
document.getElementById("options").addEventListener("click", function() {
  var ex = "Ex. #BDBDBD";
  newColour = prompt("Choose your new background color. You must imput a HTML Hex colour code.", ex);
  if (newColour === null || newColour === "" || newColour === ex) {
    setCookie("background", "#BDBDBD", 365);
    document.getElementById("body").style.backgroundColor = getCookie("background");
    document.getElementById("options").style.backgroundColor = getCookie("background");
  } else {
    document.getElementById("body").style.backgroundColor = newColour;
    document.getElementById("options").style.backgroundColor = newColour;
    setCookie("background", newColour, 365);
  };
}, false);
// Load complete function
window.onload = function() {
  document.getElementById("body").style.backgroundColor = getCookie("background");
  document.getElementById("options").style.backgroundColor = getCookie("background");
  setTimeout(function() {
    document.getElementById("clockbox").style.opacity = "1";
    document.getElementById("options").style.opacity = "1";
  }, 300);
  setTimeout(function() {
    document.getElementById("datebox").style.opacity = "1";
  }, 600);
  setTimeout(function() {
    document.getElementById("text").style.opacity = "1";
    setTimeout(function() {
      document.getElementById("text").style.opacity = "0";
      setTimeout(function() {
        document.getElementById("text").innerHTML = "Minimalist Tab";
        document.getElementById("text").style.opacity = "1";
      }, 500);
    }, 2000);
  }, 1000);
  // Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-89454896-2', 'auto');
  ga('send', 'pageview');
};
