var setRadius = function(newRadius){
  if(newRadius<minRadius){
    newRadius = minRadius;
  }
  else if(newRadius>maxRadius){
    newRadius = maxRadius;
  }
  radius = newRadius;
  context.lineWidth = radius*2;

  radiusSpan.innerHTML = radius;
}

var minRadius = 0.5;
var maxRadius = 100;
var defaultRadius = 20;
var interval = 5;
var radiusSpan = document.getElementById('radiusval');
var decRadius = document.getElementById('decradius');
var incRadius = document.getElementById('incradius');

decRadius.addEventListener('click', function(){
    setRadius(radius-interval);
});
incRadius.addEventListener('click', function(){
    setRadius(radius+interval);
});

setRadius(defaultRadius);
