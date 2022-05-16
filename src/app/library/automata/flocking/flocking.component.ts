import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flocking',
  templateUrl: './flocking.component.html',
  styleUrls: ['./flocking.component.scss']
})
export class FlockingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setupCanvas()
    this.draw()
  }
  setupCanvas(){
    const canvas = document.getElementById("canvas1") as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    ctx?.clearRect(0,0,canvas.width,canvas.height)
    canvas.width = Math.floor(canvas.offsetWidth);
  	canvas.height = Math.floor(canvas.width/1.5);
  }
  draw(){
    const canvas = document.getElementById('canvas1') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if(ctx)
    {
      ctx.fillStyle = 'green'
      ctx.fillRect(0,0,100,100)
    }
    
  }

}



class Boid {
  x:number;
  y:number;
  constructor(x:number,y:number) {
    this.x = x;
    this.y = y;
  }
}
