import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flocking',
  templateUrl: './flocking.component.html',
  styleUrls: ['./flocking.component.scss']
})
export class FlockingComponent implements OnInit {

  constructor() { }
  flock:Array<Boid> = new Array();
    
  width:number = 400;
  height: number = 400;
  interval:any;
  ngOnInit(): void {
    
    this.setupCanvas()
    this.flock = this.setupBoids()
    this.draw()
    const that = this;
    this.interval = setInterval(function(){
      that.draw()
      that.flock = that.updateBoids(that.flock);
    },50)
  }

  ngOnDestroy():void {
    if(this.interval)
    {
      clearInterval(this.interval)
      const canvas = document.getElementById("canvas1") as HTMLCanvasElement
      const ctx = canvas?.getContext('2d')
      ctx?.clearRect(0,0,canvas.width,canvas.height)
    }
  }

  setupCanvas(){
    const canvas = document.getElementById("canvas1") as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    ctx?.clearRect(0,0,canvas.width,canvas.height)
    canvas.width = Math.floor(canvas.offsetWidth);
  	canvas.height = Math.floor(canvas.width/1.7);
    this.width = canvas.width;
    this.height = canvas.height;
  }
  
  draw(){
    const canvas = document.getElementById('canvas1') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if(ctx)
    {
      ctx.clearRect(0,0,this.width, this.height);
      for( let boid of this.flock)
      {
        this.drawBoid(boid,ctx);
        
        
      }


    }
    this.flock = this.updateBoids(this.flock);
    
  }
  setupBoids(){
    //in here we create an array of boids
    let arr = new Array();
    for(let i = 0; i < 200; i++)
    {
      let x = Math.floor(Math.random() * this.width);
      let y = Math.floor(Math.random() * this.height);
      var test =  new Boid(x,y);
      arr.push(test);
    }
    return arr;
    

  }
  updateBoids(flock:Array<Boid>) {
    for( let boid of flock)
    {
      
      let aligVec = boid.align(flock);
      let coheVec = boid.cohesion(flock);
      let sepVec = boid.separation(flock); //goes to boid.xacc and boid.yacc
      boid.sumVectors(aligVec,coheVec,sepVec);
      boid.keepErMovin();
      boid.edges();
      boid.update();
      
    }
    return flock;
  }
  drawBoid(boid:Boid, ctx:any){
    //this is a draw function so that i can use the position and direction to draw this as a triangle
    //still requires thought 
    ctx.fillStyle = 'cyan';
    //ctx.fillRect(boid.x,boid.y,10,10);
    //get mag of xvel and yvel
    //get unit vector of xvel and yvel
    //get cross vector crossX crossY
    //get unit vector of cross
    var x1 = boid.xvel
    var y1 = boid.yvel
    var x2 = 0;
    var y2 = 0;
    let crossX = 1
    let crossY = -(x1/y1)
    let crossM = Math.pow(Math.pow(x2-crossX,2)+Math.pow(y2 - crossY,2),.5)
    let m = Math.pow(Math.pow(x2-x1,2)+Math.pow(y2-y1,2),.5)
    let crossXU = crossX/crossM * 4
    let crossYU = crossY/crossM * 4
    x1 = x1/m *13 
    y1 = y1/m *13
    //let point1 = boid.x, boid.y
    let point2x = boid.x-x1+crossXU
    let point2y = boid.y-y1+crossYU
    let point3x = boid.x-x1-crossXU
    let point3y = boid.y-y1-crossYU
    ctx.beginPath()
    ctx.moveTo(boid.x,boid.y)
    ctx.lineTo(point2x,point2y)
    ctx.lineTo(point3x,point3y)
    ctx.lineTo(boid.x,boid.y)
    ctx.closePath()
    ctx.strokeStyle = "rgb(" + boid.colorR + ","+boid.colorG+","+boid.colorB+")";
    ctx.stroke();
    
  }


}



class Boid {
  //when making this class, I separated out x and y for everything. the reason i did this was to simplify things because i didn't have a vector
  //the flocking simulation from the coding train uses vectors and vector math (addition in the case of align) which i am unsure how separation impacts
  //For this implementation I will initially simply keep separating the vectors out, and if there's no issue do it that way. 
  //however when I use this in game dev i WILL have access to vectors and therefore might be better off using his code as a template than this code
  // https://youtu.be/mhjuuHl6qHM is the link to his video on flocking simulation

  x:number;
  y:number;
  xvel:number;
  yvel:number;
  xacc:number;
  yacc:number;
  inertia:number= .04;
  colorR = Math.random() * 125
  colorG = Math.random() *125
  colorB = Math.random() *125
  constructor(x?:number,y?:number, xvel?:number, yvel?:number, xacc?:number,yacc?:number) {
    this.x = x || 0;
    this.y = y || 0;
    this.xvel = xvel || (Math.random() * 2 - 1);
    this.yvel = yvel || (Math.random() * 2 - 1);
    this.xacc = xacc || 0;
    this.yacc = yacc || 0;
  }
  update() {
    this.xvel = this.xvel + this.xacc;
    this.yvel = this.yvel + this.yacc;
    this.x = this.x + this.xvel;
    this.y = this.y + this.yvel;

    this.xacc = 0;
    this.yacc = 0;
  }

  edges() {
    let canvas = document.getElementById('canvas1') as HTMLCanvasElement
    if(this.x > canvas.width)
    {
      this.x = 0;
    }
    else if(this.x < 0)
    {
      this.x = canvas.width;
    }
    if(this.y > canvas.height)
    {
      this.y = 0;
    }
    else if(this.y < 0)
    {
      this.y = canvas.height;
    }
  }
  align(boids:any){
    let avgX = 0;
    let avgY = 0;
    let xaccMod = 0;
    let yaccMod = 0;
    let totalOthers = 0;
    let perception = 75;
    for(let other of boids)
    {
      //calc distance between other and this
      //if distance is ~ close (he uses the perception variable)
      //it influences the average
      var x1 = this.x;
      var y1 = this.y;
      var x2 = other.x;
      var y2 = other.y;
      var d = Math.pow(Math.pow(x2-x1,2)+Math.pow(y2-y1,2),.5)

      if(other!= this && d < perception)
      {
        avgX += other.xvel;
        avgY += other.yvel;
        totalOthers++;

      }
      
      
    }
    if(totalOthers > 0)
    {
       avgX /= totalOthers;
       avgY /= totalOthers;
      // vector math is fun
       avgX = avgX - this.xvel;
       avgY = avgY - this.yvel;

      //he returns this and then sets it here in a later step
      xaccMod = avgX * this.inertia;
      yaccMod = avgY * this.inertia;
    }
    let returnVec = new vector(xaccMod,yaccMod);
    return returnVec;
    
  }
  keepErMovin() {
    var x1 = this.xvel;
    var y1 = this.yvel;
    var x2 = 0;
    var y2 = 0;

    let m = Math.pow(Math.pow(x2-x1,2)+Math.pow(y2-y1,2),.5)
    if(m < .5 || m > 5)
    {
      this.xvel = x1/m
      this.yvel = y1/m
    }

  }
  cohesion(boids:any){
    let avgX = 0;
    let avgY = 0;
    let xaccMod = 0;
    let yaccMod = 0;
    let totalOthers = 0;
    let perception = 50;
    for(let other of boids)
    {
      //calc distance between other and this
      //if distance is ~ close (he uses the perception variable)
      //it influences the average
      var x1 = this.x;
      var y1 = this.y;
      var x2 = other.x;
      var y2 = other.y;
      var d = Math.pow(Math.pow(x2-x1,2)+Math.pow(y2-y1,2),.5)

      if(other!= this && d < perception)
      {
        avgX += other.x;
        avgY += other.y;
        totalOthers++;

      }
      
      
    }
    if(totalOthers > 0)
    {
       avgX /= totalOthers;
       avgY /= totalOthers;
      // vector math is fun
       avgX = avgX - this.x;
       avgY = avgY - this.y;

      //he returns this and then sets it here in a later step
      xaccMod += avgX * this.inertia;
      yaccMod += avgY * this.inertia;
    }
    return new vector(xaccMod,yaccMod)
  }
  separation(boids:any){
    //handles the separation of close boids
    //to add object avoidance do something similar to this. 
    let avgX = 0;
    let avgY = 0;
    let xaccMod = 0;
    let yaccMod = 0;
    let perception = 50;
    for(let other of boids)
    {
      //calc distance between other and this
      //if distance is ~ close (he uses the perception variable)
      //it influences the average
      var x1 = this.x;
      var y1 = this.y;
      var x2 = other.x;
      var y2 = other.y;
      var d = Math.pow(Math.pow(x2-x1,2)+Math.pow(y2-y1,2),.5)

      if(other!= this && d < perception)
      {
        let x3 = x1-x2
        let y3 = y1-y2
        
        avgX += x3/d
        avgY += y3/d
        //these are the modifiers this function adds to acceleration for separation force
        xaccMod += avgX * this.inertia;
        yaccMod += avgY * this.inertia;
        
      }


    }
    let returnVec = new vector(xaccMod,yaccMod);
    return returnVec;
  }
  sumVectors(vec1:vector, vec2:vector,vec3:vector){
    //ghetto vector math
    let result = new vector();
    result.x +=vec1.x + vec2.x + 3* vec3.x;
    result.y +=vec1.y + vec2.y + 3* vec3.y;
    this.xacc = result.x;
    this.yacc = result.y;
  }



  
}

//class used in canvas1
//could be used to convert all the things that are complicated by my desire to use x and y here
class vector {
  x: number;
  y: number;
  constructor(x = 0, y= 0)
  {
    this.x = x;
    this.y = y;
  }
}
