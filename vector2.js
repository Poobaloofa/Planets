function vector2(x,y){
  this.x = x;
  this.y = y;
  this.dist = function(){
    return (Math.sqrt(this.x*this.x+this.y*this.y))
  }
  this.add = function(v2){
    this.x += v2.x;
    this.y += v2.y;
  }
  this.mult = function(scalar){
    this.x *= scalar;
    this.y *= scalar;
  }
}
