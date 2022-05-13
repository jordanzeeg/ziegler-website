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
  frameDuration = 200;
  NumPoints: number = 8;
  cities:any; //used for brute force approach
  citiesConstant:any; //used for every other approach
  intervalId:any;
  lexicalId:any;
  recordDistance = 0;
  c2RecordDistance = 0;
  c3RecordDistance = Infinity;
  order:any = [];
  staticOrder:any;
  bestOrder:any;

  lexicalBool= false; //tracks if lexicalgraphicorder is finished
  //calculate totalPermutations using factorial
  totalPermutations: number = 0;
  count = 0;
  percentage:any;

  //variables for genetic algorithm
  population:any;
  genAlgBool = false;
  genAlgId:any;
  c3bestOrder:any;
  c3currentBest:any;
  fitness:any;
  ngOnInit(): void {
    //this function generatesCities. it uses the Num
    this.cities = this.generateCities(this.NumPoints)
    //how to copy array. shallow copies the elements, but because it's not nested arrays it's fine
    this.citiesConstant = [...this.cities];
    this.order = this.generateOrder(this.NumPoints)
    this.recordDistance= this.calcDistance(this.cities)
    this.totalPermutations = this.factorial(this.NumPoints)

    //setup canvas1, also sets up the cities, and recordDistance
    //initial draw displays spawn order
    
    this.setupCanvas1()
    this.drawCanvas1()
    
    //setup canvas2, uses the cities from canvas1, and sets c2RecordDistance
    //initial draw displays spawn order
    this.setupCanvas2()
    this.drawCanvas2()

    this.setupCanvas3()
    this.drawCanvas3()

    var that = this;
    
    var timesRun = 0;
    
    //setinterval function to draw at intervals. 
    this.intervalId = setInterval(function() {
      that.drawCanvas1()
      timesRun++;
      if(timesRun === 1000)
      {
        clearInterval(that.intervalId)
      }
    },this.frameDuration)

    //lexicographical order section
    //this.lexicographicOrder(this.vals)
    //draws updates for canvas2 
    this.lexicalId = setInterval(function() {
      that.order = that.lexicographicOrder(that.order);
      that.drawCanvas2()
      that.count++;
      that.percentage = (100* that.count/that.totalPermutations)
      that.percentage = that.percentage.toFixed(2)
      if(that.lexicalBool)
      {
        clearInterval(that.lexicalId);
      }
    },this.frameDuration)
    this.genAlgId = setInterval(function() {
      that.drawCanvas3()
      if(that.lexicalBool)    //that.genAlgBool)
      {
        clearInterval(that.genAlgId)
      }
    },this.frameDuration)

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
  factorial(n:number) :number{
    if(n==1){
      return 1;
    }
    else {
      return n* this.factorial(n-1);
    }
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
          ctx.strokeStyle = "purple"
          ctx.lineWidth = 3
          ctx.stroke();
          ctx.lineWidth = 1
        }
        //end drawing of lines between cities
      }

    }
    //business logic (comes after draw the stuff so that it applies on next draw)
    var a = Math.floor(Math.random() * this.cities.length)
    var b = Math.floor(Math.random() * this.cities.length)
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
  swap(array:any,i:number,j:number) {
    var arr = array.slice()
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
  shuffle(array:any, num:any){
    var arr = array.slice();
    for (var i = 0; i < num; i++)
    {
      var indexA = Math.floor(Math.random() * (arr.length));
      var indexB = Math.floor(Math.random() * (arr.length));
      if(indexA < arr.length && indexB < arr.length)
      {
        arr = this.swap(arr,indexA,indexB)
      }
      else{
        console.log( "out of bounds error caught")
      }
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
    array = this.swap(array,largestI,largestJ);

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
  //----------------------------------end canvas2 functionality-------------------------------------//

  //----------------------------------begin canvas3 functionality ----------------------------------//
  //canvas3 is set up for the genetic algorithm
  setupCanvas3(){
    //setup the canvas2
    const canvas = document.getElementById('canvas3') as HTMLCanvasElement
    const ctx = canvas.getContext('2d');
    canvas.width = Math.floor(canvas.offsetWidth); //set width
  	canvas.height = Math.floor(canvas.width/1.5); //set height dynamically based on width
    ctx?.clearRect(0,0,canvas.width,canvas.height)
    //instead of rewriting, we assume functions called earlier than this one in nginit ran successfully
    //values used: this.citiesConstant
    // if(this.citiesConstant)
    // {
    //   var d = this.calcDistance(this.citiesConstant);
    //   this.c2RecordDistance = d;
    //   this.bestOrder = [...this.order]
    // }
    //the idea is we have a population of different orders to evaluate fitness thereof
    this.staticOrder = this.generateOrder(this.NumPoints)
    this.population = new Array();
    for(var i = 0; i< 10; i++)
    {
      var temp = this.staticOrder.slice();
      temp = this.shuffle(temp,temp.length)
      this.population.push( temp);
    }
    this.fitness = new Array(this.population.length)
  }

  //Lexicographical order drawing
  //use this.order[]
  drawCanvas3() {
    const canvas = document.getElementById('canvas3') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if(ctx)
    {
      ctx.clearRect(0,0,canvas.width,canvas.height)
      for( var i = 0; i < this.staticOrder.length; i++)
      {
        var n = this.staticOrder[i]
        if(i<this.staticOrder.length-1)
        {
          var n2 = this.staticOrder[i+1]
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
        if(i<this.staticOrder.length-1)
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
      this.calculateFitness();
      this.normalizeFitness();
      this.nextGeneration();
      
      var d = this.calcDistanceOrder(this.citiesConstant, this.staticOrder)
      if(d < this.c2RecordDistance)
      {
        this.c2RecordDistance = d;
        this.c3bestOrder = [...this.staticOrder] //shallow copy 
      }
      for(var i = 0; i < this.c3bestOrder.length; i++)
      {
        var n = this.c3bestOrder[i]
        if(i < this.c3bestOrder.length-1)
        {
          var n2 = this.c3bestOrder[i+1]
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


  //-----------------------------end canvas3 functionality-----------------------------------------------------//

  //--------------------------genetic algorithm begins------------------------------------------------------//
  calculateFitness() {
    var currentRecord = Infinity;
    for(var i = 0; i< this.population.length; i++)
    {
      var d = this.calcDistanceOrder(this.citiesConstant,this.population[i]);
      if (d < this.c3RecordDistance)
      {
        this.c3RecordDistance = d;
        this.c3bestOrder = this.population[i].slice() //copy
      }
      if(d <currentRecord)
      {
        currentRecord = d
        this.c3currentBest = this.population[i].slice()
      }
      this.fitness[i] = 1/(Math.pow(d,8) + 1)
    }
    
    
  }
  normalizeFitness() {
    var sum = 0;
    //make sure fitness gets initialized
    for(var i = 0; i < this.fitness.length; i++)
    {
      sum += this.fitness[i]
    }
    for(var i = 0; i < this.fitness.length; i++)
    {
      this.fitness[i] = this.fitness[i]/sum;
    }
  }

  nextGeneration() {
    var newPopulation = new Array();
    for(var i = 0; i < this.population.length; i++)
    {
      var orderA = this.pickOne(this.population,this.fitness)
      var orderB = this.pickOne(this.population,this.fitness)
      var order = this.crossOver(orderA,orderB)
      
      order = this.mutate(order,0.01);
      
      newPopulation[i] = order;
    }
    this.population = newPopulation;
  }

  pickOne(list:any,prob:any)
  {
    var index = 0;
    var r = Math.random();
    while (r> 0)
    {
      r = r-prob[index]
      index++;
    }
    index--;
    return list[index].slice()
  }

  crossOver(orderA:any,orderB:any)
  {
    var start = Math.floor(Math.random() * orderA.length)
    var end = Math.floor(Math.random() * (orderA.length - start+1))
    var newOrder = orderA.slice(start,end);
    for(var i = 0; i < orderB.length; i++)
    {
      var city = orderB[i];
      if(!newOrder.includes(city))
      {
        newOrder.push(city)
      }
    }
    return newOrder;

  }
  mutate(order:any,mutationRate:any)
  {
    for(var i = 0; i<order.length; i++)
    {
      if(Math.random()<mutationRate)
      {
        var indexA = Math.floor(Math.random() * order.length)
        var indexB = (indexA + 1) %order.length;
          order = this.swap(order,indexA,indexB);
        
        
      }
    }
    return order;
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
