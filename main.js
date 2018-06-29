var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;

var started = false;

var fbrush=false;
var fline = false;
var fcircle = false;
var fFilledCircle = false;
var frectangle = false;
var fFilledRectange = false;
var fGum = false;


function toolsFalse()
{
  fbrush = false;
  fline = false;
  fcircle = false;
  fFilledCircle = false;
  frectangle = false;;
  fFilledRectange = false;
  fGum = false;
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2;
