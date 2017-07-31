var sun = {
	mass: 1.989e30,
	rad: 6.957e8,
  color: "#ffbb00",
	pos: new vector2(c.width/2,c.height/2),
	draw(){
  	ctx.beginPath();
		ctx.arc(this.pos.x,this.pos.y,Math.log(this.rad*this.rad*this.rad)-40,0,2*Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
    ctx.stroke();
	},
}

function planet(color, radius, mass, v2pos, v2vel, v2acc, scaleBound){
	this.scaleBound = scaleBound
	this.color = color;
	this.rad = radius;
	this.mass = mass;
	this.pos = v2pos;
	this.vel = v2vel;
	this.acc = v2acc;
	this.posUpdate = function(){
		this.pos.add(this.vel);
	};
	this.velUpdate = function(){
		this.vel.add(this.acc);
	};
  this.accUpdate = function(){
  	this.acc.x = G * sun.mass * -this.pos.x / Math.pow(this.pos.dist(),3)
    this.acc.y = G * sun.mass * -this.pos.y / Math.pow(this.pos.dist(),3)
  }
	this.draw = function(){
		ctx.beginPath();
		ctx.arc(sun.pos.x + this.pos.x/scale,sun.pos.y + this.pos.y/scale,Math.log(this.rad*this.rad*this.rad)-40,0,2*Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
    ctx.stroke();
	}
  this.fullUpdate = function(){
  	for(var i = 0; i<speed; i++){
  		this.accUpdate()
  		this.velUpdate()
    	this.posUpdate()
    }
    if(scale<=this.scaleBound){
    	this.draw()
    }
  }
}
