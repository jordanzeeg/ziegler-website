import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss']
})
export class SnakeGameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	this.snakeGame();
  }
  snakeGame():  void {
  	//setup canvas
  	const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
  	const ctx = canvas.getContext('2d')!; //get context
  	canvas.height = canvas.offsetHeight;
  	canvas.width = canvas.offsetWidth;

  	//create snake object. created in snakeGame because lazy
	  class Snake {
	  	scale = 20;
	  	size = 1;
	  	total = 0;
	  	tail: Tail[] = [];
	  	x:number = Math.random() * (canvas.width - this.scale);
	  	y:number = Math.random() * (canvas.height - this.scale);
	  	xspeed:number = 0;
	  	yspeed:number = 0;
	  	
	  	

	  	update() {
	  		for(var i =0;i < this.total-1;i++)
	  		{
	  			this.tail[i] = this.tail[i+1];
	  		}
	  		if(this.total >= 1)
	  		{
	  			this.tail[this.total-1] = new Tail(this.x,this.y); 
	  			}
	  		this.x = this.x + this.xspeed;
	  		this.y = this.y + this.yspeed;
	  		//constrain object to the board
	  		if(this.x > (canvas.width-this.scale))
	  		{
	  			this.x = canvas.width - this.scale;
	  			this.xspeed = 0;
	  		}
	  		if(this.y > (canvas.height - this.scale))
	  		{
	  			this.y = canvas.height - this.scale;
	  			this.yspeed = 0;
	  		}
	  		if(this.x < 0)
	  		{
	  			this.x = 0;
	  			this.xspeed = 0;
	  		}
	  		if(this.y < 0)
	  		{
	  			this.y = 0;
	  			this.yspeed = 0;
	  		}

	  		
	  	}
	  	show() {
	  		ctx.fillStyle = 'white';
	  		ctx.fillRect(this.x, this.y, this.scale, this.scale);
	  		for(var i = 0; i <this.tail.length; i++)
	  		{
	  			ctx.fillStyle = 'white';
	  			ctx.fillRect(this.tail[i].x, this.tail[i].y,this.scale,this.scale);
	  		}
	  	}
	  	eat(food) {
	  		var xs = food.x - this.x;
	  		var ys = food.y - this.y;
	  		var total = xs * xs + ys * ys;
	  		total = Math.sqrt(total);
	  		if(total < 20)
	  		{
	  			food.x = Math.random() * (canvas.width - food.scale);
	  			food.y = Math.random() * (canvas.height- food.scale);
	  			if(this.size <= 7)
	  			{
	  				this.size = this.size + 1;
	  			}
	  			this.total = this.total + 1;
	  			console.log("the size is "+ this.size);
	  		}
	  	}
	  	death()
	  	{
	  		for(let i = 0; i < this.tail.length; i++)
	  		{
	  			let pos = this.tail[i];
	  		var xs = pos.x - this.x;
	  		var ys = pos.y - this.y;
	  		var total = xs * xs + ys * ys;
	  		total = Math.sqrt(total);

	  		if(total < 1) 
	  		{
	  			console.log("starting over");
	  			this.total = 0;
	  			this.size = 1;
	  			this.tail = [];
	  		} 
	  		}
	  	}
	  }
	  class Tail {
	  	x:number;
	  	y:number;
	  	constructor(a,b){
	  		this.x = a;
	  		this.y = b;
	  	}
	  }
	  class Food {
	  	scale:number = 20;
	  	x:number = Math.random() * (canvas.width - this.scale);
	  	y:number = Math.random() * (canvas.height - this.scale);
	  	
	  	show() {
	  		ctx.fillStyle = 'green';
	  		ctx.fillRect(this.x,this.y, this.scale, this.scale);
	  	}
	  }
	  var s = new Snake();
	  var f = new Food();
	  var isPaused = false;
	  var h = setInterval(function() {
	  	if(!isPaused)
	  	{
		  	ctx.clearRect(0, 0, canvas.width, canvas.height);
		  	s.update();
		  	s.eat(f);
		  	s.show();
		  	f.show();
		  	s.death();
		  }
	  },10);
	  canvas.onkeydown = keyboardInput;
	  function keyboardInput(e) {
	  	console.log(e.code); //verify key is recorded
	  	if(e.code == 'KeyD'|| e.code == 'ArrowRight')
	  	{
	  		s.xspeed = s.size;
	  		s.yspeed = 0;
	  	}
	  	else if(e.code == 'KeyA' || e.code == 'ArrowLeft')
	  	{
	  		s.xspeed = -1 * s.size;
	  		s.yspeed = 0;
	  	}
	  	else if(e.code == 'KeyW' || e.code == 'ArrowUp')
	  	{
	  		s.xspeed = 0;
	  		s.yspeed = -1 * s.size;
	  	} 
	  	else if(e.code == 'KeyS' || e.code == 'ArrowDown')
	  	{
	  		s.xspeed = 0;
	  		s.yspeed = 1 * s.size;
	  	}
	  	else if(e.code == 'KeyP' || e.code == 'Space')
	  	{
	  		isPaused = !isPaused;
	  	}   
	  }
	}
}
