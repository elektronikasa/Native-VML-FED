var $ = global.jQuery = global.$ = require('jquery');
require('./third-party/bootstrap.min');
require('particles.js');
require('./third-party/scotch/dist/scotchPanels');

import './modules'

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'static/particles.json', function() {
  console.log('callback - particles.js config loaded');
});



var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock(){
var d=new Date();
var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
if(nyear<1000) nyear+=1900;

var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap="am";}
else if(nhour==12){ap="pm";}
else if(nhour>12){ap="pm";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

document.getElementById('clocktime').innerHTML=""+nhour+":"+nmin+ap+"";

document.getElementById('clockdate').innerHTML=""+tmonth[nmonth]+" "+ndate+", "+nyear+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}

console.log('app.js has loaded!')
