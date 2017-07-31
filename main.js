var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var G = 8.6496e-4 //m^3 kg^-1 hr^-2
var speed = 10 //hrs per frame
var scale = 1e9

var objects = []
var earth = new planet( "#1a75ff", 6.371e6, 5.972e24, new vector2(0,146e9), new vector2(1.09e8,0), new vector2(0,0),6e9)
var mars = new planet( "#c73e1f", 3.39e6, 6.39e23, new vector2(0,206e9), new vector2(9.54e7,0), new vector2(0,0),9e9)
var venus = new planet( "#dfbe9f", 6.052e6 , 4.867e24, new vector2(0,107e9), new vector2(1.269e8,0), new vector2(0,0),4e9)
var mercury = new planet( "#8c8c8c", 2.439e6 , 3.3011e23, new vector2(0,46e9), new vector2(2.123e8,0), new vector2(0,0),2e9)
var jupiter = new planet( "#ffb366", 6.99e7, 1.898e27, new vector2(0,778.55e9), new vector2(4.939e7,0),new vector2(0,0),3e10)
var saturn = new planet( "#f2d98c", 6.0268e7, 5.6834e26, new vector2(0,1352.55e9), new vector2(3.6648e7,0), new vector2(0,0),5e10)
var uranus = new planet( "#99d4ee", 2.5559e7, 8.6813e25, new vector2(0,2741.30e9), new vector2(2.5596e7,0), new vector2(0,0), 1e11)
var neptune = new planet( "#006be6", 2.4764e7, 1.02413e26, new vector2(0,4444.45e9), new vector2(1.9548e7,0), new vector2(0,0), 1.5e11)
var pluto = new planet( "#bb9277", 1.187e6, 1.303e22, new vector2(0,4436.82e9), new vector2(2.196e7,0), new vector2(0,0), 2e11)
sun.draw()
setInterval(function(){
	ctx.fillStyle = "black"
	ctx.fillRect(0,0,c.width,c.height)
	sun.draw()
	earth.fullUpdate()
	mars.fullUpdate()
	venus.fullUpdate()
	mercury.fullUpdate()
  jupiter.fullUpdate()
  saturn.fullUpdate()
  neptune.fullUpdate()
  uranus.fullUpdate()
  pluto.fullUpdate()
}, 10)
