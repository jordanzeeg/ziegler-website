import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { isJSDocThisTag } from 'typescript';

@Component({
  selector: 'app-langton',
  templateUrl: './langton.component.html',
  styleUrls: ['./langton.component.scss']
})
export class LangtonComponent implements OnInit {

  constructor() { }
  intervalId:any;
  grid: any;
  height:number = 400;
  width: number = 400;
  res: number = 20;
  state:number = 0;
  locationx:number = 0;
  locationy:number = 0;
  direction = 0; //0 for North, 1 for East, 2 for South, 3 for West
  ngOnInit(): void {
    let that = this
    this.setupCanvas()
    this.grid = this.setupGrid(this.height,this.width)
    this.state = this.setupState(this.grid)
    console.table(this.grid)
    this.displayGrid()
    
    this.intervalId = setInterval(function(){
      that.moveAnt(that.grid)
      
      
    },10)
  }
  ngOnDestroy(){
    if(this.intervalId)
    {
      clearInterval(this.intervalId)
    }
  }
  setupCanvas(){
    const canvas = document.getElementById("canvas1") as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    ctx?.clearRect(0,0,canvas.width,canvas.height)
    //dynamic sizing of canvas.width
    canvas.width = Math.floor(canvas.offsetWidth);
  	canvas.height = Math.floor(canvas.width/1.5);
    this.height = Math.floor(canvas.height/this.res)
    this.width = Math.floor(canvas.width/this.res)

  }
  setupGrid(cols:number,rows:number)
  {
    let arr = new Array(rows)
    for( let i = 0; i < this.height; i++)
    {
      arr[i] = new Array(cols)
      for(let j = 0; j < this.width; j++)
      {
        arr[i][j] = 0
      }
    }
    return arr
  }
  displayGrid()
  {
    const canvas = document.getElementById("canvas1") as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if(ctx){
      let grid = this.grid
      for(let i = 0; i < this.height; i++)
      {
        let y = i * this.res
        for (let j = 0; j < this.width; j++)
        {
          let x = j * this.res
          
          if(grid[i][j] == 1)
          {
            ctx.fillStyle = 'green'
          }
          else
          {
            ctx.fillStyle = 'blue'
          }
          ctx.fillRect(x, y, this.res-1,this.res-1)
        }
      }
    }
  }
  setupState(grid:any)
  {
    this.locationy = Math.floor(this.height/2)
    this.locationx = Math.floor(this.width/2)
    return grid[this.locationy][this.locationx]
  }
  moveAnt(grid:any)
  {
    this.moveForward(grid,this.locationx, this.locationy, this.direction)
    let state = this.state
    //state change for state of current color and set direction
    if(state == 0)
    {
      if(this.direction < 3)
      {
        this.direction++;
      }
      else
      {
        this.direction = 0
      }
      grid[this.locationy][this.locationx] = 1
      
    }
    else{
      if(this.direction >0)
      {
        this.direction--;
      }
      else
      {
        this.direction = 3
      }
      grid[this.locationy][this.locationx] = 0
    }
    this.state = grid[this.locationy][this.locationx]
    
    //update display of grid
    const canvas = document.getElementById("canvas1") as HTMLCanvasElement
    const ctx = canvas.getContext('2d');
    if(ctx)
    {
      
      ctx.clearRect(this.locationx*this.res,this.locationy*this.res, this.res-1, this.res-1);
      if(grid[this.locationy][this.locationx] ==1)
      {
        ctx.fillStyle = 'green'
      }
      else
      {
        ctx.fillStyle = 'blue'
      }
      ctx.fillRect(this.locationx*this.res,this.locationy*this.res, this.res-1, this.res-1);
    }
  }
  moveForward(grid:any, locationx:number, locationy:number, direction:number)
  {
    //check direction and move in that direction 1
    
    if(direction == 0) //move up
    {
      if(locationy > 0){
        locationy -= 1
      }
      else
      {
        locationy = this.height-1
      }
    }
    else if (direction == 1) //move right
    {
      if(locationx < this.width-1)
      {
        locationx += 1
      }
      else{
        locationx = 0
      }
    }
    else if (direction == 2) //move down
    {
      if(locationy <this.height-1 )
      {
        locationy += 1
      }
      else
      {
        locationy = 0
      }
    }
    else if (direction == 3) //move right
    {
      if(locationx > 0)
      {
        locationx -= 1
      }
      else{
        locationx = this.width-1
      }
    }
    this.state = grid[locationy][locationx]
    this.locationx = locationx
    this.locationy = locationy
  }
}
