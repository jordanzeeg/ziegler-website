import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conway',
  templateUrl: './conway.component.html',
  styleUrls: ['./conway.component.scss']
})
export class ConwayComponent implements OnInit {
  constructor() { }

  grid:any
  grid2:any
  res = 14
  height;
  width;
  ngOnInit(): void {
    //setup 2d grid
    this.setupCanvas();
    this.setupGrid(this.width,this.height);
    
    console.table(this.grid)
    let that = this
    var h = setInterval(function() {
      that.displayGrid();
    }, 2000)
  }
  setupCanvas(){
    const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
  	const ctx = canvas.getContext('2d')!; //get context
    canvas.width = Math.floor(canvas.offsetWidth);
  	canvas.height = Math.floor(canvas.width/1.5);
  	
    this.height = Math.floor(canvas.height/this.res)
    this.width = Math.floor(canvas.width/this.res)
    console.log(this.height, this.width, canvas.height, canvas.width, canvas.offsetHeight, canvas.offsetWidth)
  }
  //setup 2d Grid of random 1s and 0s
  setupGrid(cols,rows)
  {
    
    let arr = new Array(rows)
    for(let i = 0; i < arr.length; i++)
    {
      arr[i] = new Array(cols);
      for(let j = 0; j <arr[i].length; j++)
      {
        arr[i][j] = Math.floor(Math.random() * 2 *.54)
      }
    }
    this.grid = arr
    this.grid2 = arr
    

  }
  displayGrid(){
    const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
  	const ctx = canvas.getContext('2d')!;
    for(let i = 0; i < this.grid.length; i++ ){
      
      for(let j = 0; j < this.grid[0].length; j++){
        let y = i * this.res
        let x = j * this.res
        if(this.grid[i][j] == 1)
        {
          ctx.fillStyle = 'black';
          ctx.fillRect(x,y,this.res-1,this.res-1)
        }
        else
        {
          ctx.fillStyle = 'green';
          ctx.fillRect(x,y,this.res-1,this.res-1)
        }

        //count neighbors for next step
        let sum = 0
        for(let k = -1; k < 2; k++ ){
          for(let l = -1; l < 2; l++){
            let testX = (i+l+this.height)%this.height
            let testY = (j+k + this.width)%this.width
            sum += this.grid[testX][testY]
          }
        }
        sum -= this.grid[i][j]
        let state = this.grid[i][j]
        if(state===0 && sum === 3)
        {
          this.grid2[i][j] = 1
        }
        else if (state ===1 && (sum < 2 || sum >3))
        {
          this.grid2[i][j] = 0
        }
        else if(state === 1 &&(sum ===2 || sum ===3))
        {
          this.grid2[i][j] = 1
        }
        else
        {
          this.grid2[i][j] = 0
        }
        sum = 0
        this.grid = this.grid2
        
      }
    }
  }

}
