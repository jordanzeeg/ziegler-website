import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wave-function-collapse',
  templateUrl: './wave-function-collapse.component.html',
  styleUrls: ['./wave-function-collapse.component.scss']
})
export class WaveFunctionCollapseComponent implements OnInit {

  tiles = [];
  constructor() { }
  width:number = 400;
  height: number = 400;
  interval:any;
  ngOnInit(): void {
    this.setup();
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
  }
  draw()
  {

  }
  clear()
  {

  }

}
