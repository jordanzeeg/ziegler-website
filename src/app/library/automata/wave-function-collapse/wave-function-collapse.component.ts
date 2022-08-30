import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wave-function-collapse',
  templateUrl: './wave-function-collapse.component.html',
  styleUrls: ['./wave-function-collapse.component.scss']
})
export class WaveFunctionCollapseComponent implements OnInit {

  tiles: any;
  constructor() { }
  width:number = 400;
  height: number = 400;
  interval:any;
  ngOnInit(): void {
    this.setup();
    var that = this;
    this.interval = setInterval(function(){
      that.draw()

      //a quick and dirty way to make it run once (don't ever do this irl)
      if(that.interval)
      {
        clearInterval(that.interval)
      }
    },500)
  }
  //checks if this.interval exists and destroys if it does
  //also clears the canvas since a lot of other components use the same canvas name
  ngOnDestroy(): void {
    if(this.interval)
    {
      clearInterval(this.interval)
    }
    const canvas = document.getElementById("canvaswfc") as HTMLCanvasElement
    const ctx = canvas?.getContext('2d')
    ctx?.clearRect(0,0,canvas.width,canvas.height)
  }

  preload()
  {
    const canvas = document.getElementById("canvaswfc") as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    var downImage = new Image();
    downImage.src = './assets/wavefunc/down.png';
    var blankImage = new Image();
    blankImage.src = './assets/wavefunc/blank.png';
    var leftImage = new Image();
    leftImage.src = './assets/wavefunc/left.png';
    var rightImage = new Image();
    rightImage.src = './assets/wavefunc/right.png';
    var upImage = new Image();
    upImage.src = './assets/wavefunc/up.png';
    this.tiles = new Array;
    this.tiles.push(blankImage);
    this.tiles.push(upImage);
    this.tiles.push(rightImage);
    this.tiles.push(downImage);
    this.tiles.push(leftImage);
    console.log(this.tiles)
    for(var i = 0; i < this.tiles.length; i++)
    {
      let x = this.tiles[i];
      x.onload = () => {
        
      }
      
    }    
    //if you don't do it nested as a function it wont wait for the image to load
    //img.onload = () => { ctx?.drawImage(img, 20,20,20,20);   }
  }

  //setup canvas with width and height
  setup()
  {
    const canvas = document.getElementById("canvaswfc") as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    ctx?.clearRect(0,0,canvas.width,canvas.height)
    canvas.width = Math.floor(canvas.offsetWidth);
  	canvas.height = Math.floor(canvas.width/1.8);
    this.width = canvas.width;
    this.height = canvas.height;
    this.preload();
  }
  draw()
  {
    for(var i = 0; i < this.tiles.length; i++)
    {
      let x = this.tiles[i];
      const canvas = document.getElementById("canvaswfc") as HTMLCanvasElement
      const ctx = canvas.getContext('2d')
      ctx?.drawImage(x,32 * i, 32,32,32)
      console.log("duplicate?")
    }    
  }
  clear()
  {

  }

}
