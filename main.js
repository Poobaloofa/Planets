var earth = new planet( "#1a75ff", 6.371e6, 5.972e24, new vector2(0,146e9), new vector2(1.09e8,0), new vector2(0,0))
var mars = new planet( "#c73e1f", 3.39e6, 6.39e23, new vector2(0,206e9), new vector2(9.54e7,0), new vector2(0,0))
var venus = new planet( "#dfbe9f", 6.052e6 , 4.867e24, new vector2(0,107e9), new vector2(1.269e8,0), new vector2(0,0))
var mercury = new planet( "#8c8c8c", 2.439e6 , 3.3011e23, new vector2(0,46e9), new vector2(2.123e8,0), new vector2(0,0))
sun.draw()
setInterval(function(){
ctx.fillStyle = "black"
ctx.fillRect(0,0,c.width,c.height)
sun.draw()
earth.fullUpdate()
mars.fullUpdate()
venus.fullUpdate()
mercury.fullUpdate()
}, 10)
