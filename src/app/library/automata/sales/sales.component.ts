import { Component, OnInit } from '@angular/core';
import { isJSDocThisTag } from 'typescript';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor() { }
  
  height: number = 400;
  width: number = 400;
  res: number = 1 ;
  NumPoints: number = 5;
  cities:any; //used for brute force approach
  citiesConstant:any; //used for every other approach
  intervalId:any;
  lexicalId:any;
  recordDistance = 0;
  c2RecordDistance = 0;
  c3RecordDistance = 0;
  order:any = [];
  bestOrder:any;
  lexicalBool= false; //tracks if lexicalgraphicorder is finished
  ngOnInit(): void {
    //this function generatesCities. it uses the Num
    this.cities = this.generateCities(this.NumPoints)
    //how to copy array. shallow copies the elements, but because it's not nested arrays it's fine
    this.citiesConstant = [...this.cities];
    this.order = this.generateOrder(this.NumPoints)
    this.recordDistance= this.calcDistance(this.cities)

    //setup canvas1, also sets up the cities, and recordDistance
    //initial draw displays spawn order
    
    this.setupCanvas1()
    this.drawCanvas1()
    
    //setup canvas2, uses the cities from canvas1, and sets c2RecordDistance
    //initial draw displays spawn order
    this.setupCanvas2()
    this.drawCanvas2()


    var that = this;
    
    var timesRun = 0;
    
    //setinterval function to draw at intervals. 
    this.intervalId = setInterval(function() {
      that.drawCanvas1()
      if(timesRun === 1000)
      {
        clearInterval(that.intervalId)
      }
    },100)


    //lexicographical order section
    //this.lexicographicOrder(this.vals)
    this.lexicalId = setInterval(function() {
      that.order = that.lexicographicOrder(that.order);
      that.drawCanvas2()
      if(that.lexicalBool)
      {
        clearInterval(that.lexicalId);
      }
    },300)
    
  }
  ngOnDestroy(){
    if(this.intervalId)
    {
      clearInterval(this.intervalId)
      
    }
    if(this.lexicalId)
    {
      clearInterval(this.lexicalId)
    }
  }
  rerun() {
    this.ngOnDestroy()
    this.ngOnInit()
  }
  generateCities(Num:number)
  {
    var arr = new Array()
    for (var i = 0; i < Num; i++)
    {
      var test = new vector(Math.floor(Math.random() * this.width), Math.floor(Math.random() * (this.height-5)));
      arr.push(test)
      //console.log(this.width, this.height)
      //console.log(arr)
    }
    return arr;
  }
  generateOrder(num:number)
  {
    var array = new Array(num);
    this.lexicalBool = false;
    for(var i = 0; i < num; i++)
    {
      array[i] = i;
    }
    return array;
  }
  //-------------------------------------------------------------------------------------------------canvas 1 brute force approach--------------------------------//
  setupCanvas1(): void {
    const canvas = document.getElementById("canvas1") as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    ctx?.clearRect(0,0,canvas.width,canvas.height)
    canvas.width = Math.floor(canvas.offsetWidth);
  	canvas.height = Math.floor(canvas.width/1.5);
    this.height = Math.floor(canvas.height/this.res)
    this.width = Math.floor(canvas.width/this.res)
    
     
  }
  drawCanvas1() {

    const canvas = document.getElementById("canvas1") as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if(ctx)
    {
      ctx.clearRect(0,0,canvas.width,canvas.height);
    }

    for( var i = 0; i < this.cities.length; i++)
    {
      //draw the stuff
      if(ctx){
        
        //draws cities as circles filled
        ctx.beginPath()
        ctx.arc(this.cities[i].x, this.cities[i].y,10,0,2*Math.PI)
        ctx.fillStyle = 'green';
        ctx.fill()
        ctx.closePath()
        //end drawing of city circle
        //draw lines between cities in order
        if(i < this.cities.length-1)
        {
          ctx.beginPath()
          ctx.moveTo(this.cities[i].x,this.cities[i].y)
          ctx.lineTo(this.cities[i+1].x,this.cities[i+1].y)
          ctx.closePath();
          ctx.stroke();
        }
        //end drawing of lines between cities
      }

    }
    //business logic (comes after draw the stuff so that it applies on next draw)
    var a = Math.floor(Math.random() * this.NumPoints)
    var b = Math.floor(Math.random() * this.NumPoints)
    this.cities = this.swap( this.cities,a, b)
    var d = this.calcDistance(this.cities);
    if( d < this.recordDistance) {
      this.recordDistance = d;
      //console.log(this.recordDistance)
    }
    else {
      this.cities = this.swap(this.cities,b,a)
    }
  }
  //swap two elements in an array
  swap(arr:any,i:number,j:number) {
    if(i < arr.length || j < arr.length)
    {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      
    }
    else{
      console.log("swap failed")
    }
    return arr;
  }

  //calcs distance sum of journey
  //this is actually slow, can be faster
  calcDistance(points:any) {
    var sum = 0;
    for(var i = 0; i < points.length-1; i++)
    {
      var x1 = points[i].x;
      var y1 = points[i].y;
      var x2 = points[i+1].x;
      var y2 = points[i+1].y;
      var d = Math.pow(Math.pow(x2-x1,2)+Math.pow(y2-y1,2),.5)
      sum += d;
    }
    return sum;
  }
  //------------------------------------------------end canvas1 functionality------------------------------------------------------------//
  //Lexicographic order
  
  lexicographicOrder(array:any) {
    //console.log("lexic array: ")
    //console.log(array)

    //basically looping through to find the last point where the element is less than the element to the right
    //https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering
    //step one of lexicographic order from website
    var largestI = -1;
    for(var i = 0; i < array.length -1; i++)
    {
      if(array[i] < array[i+1])
      {
        largestI = i;
      }
    }
    if(largestI == -1)
    {
      // console.log('finished')
      this.lexicalBool = true;
      // console.log('finishedArray(local): ' + array)
      return array; 
    }

    //step 2: find the rightmost element smaller than the i chosen earlier
    var largestJ = -1;
    for(var j = 0; j < array.length; j++)
    {
      if(array[largestI] < array[j])
      {
        largestJ = j;
      }
    }
    
    //step three: swap the two found spots
    this.swap(array,largestI,largestJ);

    //step four: reverse from largestI+1 to end (which after the swap is actually the element that was largest j)
    var endArray = array.splice(largestI+1);
    
    endArray.reverse();
    
    array = array.concat(endArray);
    return array;
    //right now it recursively calls
    //deleting this reference and creating a boolean will allow for calls to happen through set interval
    //this.lexicographicOrder(array)
    
  }

  //--------------------canvas2 functionality---------------------------------------------------//
  setupCanvas2(){
    //setup the canvas2
    const canvas = document.getElementById('canvas2') as HTMLCanvasElement
    const ctx = canvas.getContext('2d');
    canvas.width = Math.floor(canvas.offsetWidth); //set width
  	canvas.height = Math.floor(canvas.width/1.5); //set height dynamically based on width
    ctx?.clearRect(0,0,canvas.width,canvas.height)
    //instead of rewriting, we're going to assume setupCanvas1 gets run, and use values from there
    //values used: this.citiesConstant
    if(this.citiesConstant)
    {
      var d = this.calcDistance(this.citiesConstant);
      this.c2RecordDistance = d;
      this.bestOrder = [...this.order]
    }
    
  }

  //Lexicographical order drawing
  //use this.order[]
  drawCanvas2() {
    const canvas = document.getElementById('canvas2') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if(ctx)
    {
      ctx.clearRect(0,0,canvas.width,canvas.height)
      for( var i = 0; i < this.order.length; i++)
      {
        var n = this.order[i]
        if(i<this.order.length-1)
        {
          var n2 = this.order[i+1]
        }
        
      //draw the stuff
        
        
        //draws cities as circles filled
        ctx.beginPath()
        ctx.arc(this.citiesConstant[n].x, this.citiesConstant[n].y,10,0,2*Math.PI)
        ctx.fillStyle = 'green';
        ctx.fill()
        ctx.closePath()
        //end drawing of city circle
        //draw lines between cities in order
        if(i<this.order.length-1)
        {
          ctx.beginPath()
          ctx.moveTo(this.citiesConstant[n].x,this.citiesConstant[n].y)
          ctx.lineTo(this.citiesConstant[n2].x,this.citiesConstant[n2].y)
          ctx.closePath();
          ctx.strokeStyle = 'black'
          ctx.stroke();
        }
        //end drawing of lines between cities
         
      }
      //business logic after drawing (probably includes drawing the best option so far)
      var d = this.calcDistanceOrder(this.citiesConstant, this.order)
      if(d < this.c2RecordDistance)
      {
        this.c2RecordDistance = d;
        this.bestOrder = [...this.order] //shallow copy 
      }
      for(var i = 0; i < this.bestOrder.length; i++)
      {
        var n = this.bestOrder[i]
        if(i < this.bestOrder.length-1)
        {
          var n2 = this.bestOrder[i+1]
          ctx.beginPath()
          ctx.moveTo(this.citiesConstant[n].x, this.citiesConstant[n].y)
          ctx.lineTo(this.citiesConstant[n2].x,this.citiesConstant[n2].y)
          ctx.closePath();
          ctx.strokeStyle = 'purple';
          ctx.lineWidth = 3
          ctx.stroke();
          ctx.lineWidth = 1
          
        }
      }
      
      
      
    }
  }
  calcDistanceOrder(points:any, order:any) {
    var sum = 0;
    for(var i = 0; i < order.length-1; i++)
    {
      var cityAIndex = order[i]
      var cityA = points[cityAIndex];
      var cityBIndex = order[i+1];
      var cityB = points[cityBIndex];

      var x1 = cityA.x;
      var y1 = cityA.y;
      var x2 = cityB.x;
      var y2 = cityB.y;
      var d = Math.pow(Math.pow(x2-x1,2)+Math.pow(y2-y1,2),.5)
      sum += d;
    }
    return sum;
  }
}




//class used in canvas1
class vector {
    x: number;
    y: number;
    constructor(x = 0, y= 0)
    {
      this.x = x;
      this.y = y;
    }
}
