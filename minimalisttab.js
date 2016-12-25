// Copyright Benjamin Developments (c) 2016-2017 - All rights reserved
console.log("Minimalist Tab copyright Benjamin Developments (c) 2016-2017 - All rights reserved.");
var gitUrl = "https://github.com/BenAndy/MinimalistTab/tree/master";
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
// Load complete function
window.onload = function() {
  document.getElementById("body").style.backgroundColor = "#BDBDBD";
  setTimeout(function() {
    document.getElementById("clockbox").style.opacity = "1";
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
      }, 2000);
    }, 7000);
  }, 1500);
};
