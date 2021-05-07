import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-table',
  templateUrl: './challenge-table.component.html',
  styleUrls: ['./challenge-table.component.scss']
})
export class ChallengeTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.canvasDrawing();
  }

  canvasDrawing() : void {
    //necessary steps to work with canvas
      const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
      const ctx = canvas.getContext('2d')!;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      let zspeed = 50;
    // consts to help transform 2d to 3d
    let PROJECTION_CENTER_X = canvas.width / 2; // X center of the canvas HTML
    let PROJECTION_CENTER_Y = canvas.height / 2; // Y center of the canvas HTML
    let PERSPECTIVE = canvas.width * 0.8;
    var image2 = new Image();
    image2.src = "../assets/Azir_Render.png";
    image2.alt = "testgif failed to load";

  
    //class contains one image/video to be maneuvered around the screen
    class Hobby {
      x: number;
      y: number;
      z: number;
      radius: number;
      xProjected: number;
      yProjected: number;
      scaleProjected:number;
      constructor(a: number, b: number, c: number) {
        this.x = (Math.random() - 0.5) * 2 * canvas.width; //currently gives random x position
        this.y = (Math.random() - 0.5) * 2 * canvas.height; //currently gives random y position
        this.z = (Math.random() - 0.5) * 2 * 10000; //gives random z, notable z is always positive and 
        this.radius = 250;

        this.xProjected = 0;
        this.yProjected = 0;
        this.scaleProjected = 0;
      }
      // update() {
      //   this.z = this.z - speed; 
      //   if (this.z < 1) {
      //     this.z = width;
      //     this.x = 
      //   }
      
      project() {
        // The scaleProjected will store the scale of the element based on its distance from the 'camera'
        this.scaleProjected = PERSPECTIVE / (PERSPECTIVE + this.z);
        // The xProjected is the x position on the 2D world
        this.xProjected = (this.x * this.scaleProjected) + PROJECTION_CENTER_X;
        // The yProjected is the y position on the 2D world
        this.yProjected = (this.y * this.scaleProjected) + PROJECTION_CENTER_Y;
      }
      draw() {
        this.project(); //converts x y and z to 2d
        ctx.fillStyle = 'green';
        //ctx.fillRect(this.xProjected - this.radius, 
        //             this.yProjected - this.radius, 
        //             this.radius *2 * this.scaleProjected,
        //             this.radius *2 * this.scaleProjected); //replace this later with the image drawing
        // ctx.drawImage(image2, this.xProjected - this.radius, 
        //             this.yProjected - this.radius, 
        //             this.radius *2 * this.scaleProjected,
        //             this.radius *2 * this.scaleProjected)
        
        ctx.strokeText("testText", this.xProjected - this.radius, 
                    this.yProjected - this.radius, 
                    this.radius *2 * this.scaleProjected)        


      }
    }
    //create list of objects
    const hobbylist:Hobby[] = [];
    for(var i = 0; i < 80; i++)
    {
      hobbylist.push(new Hobby(1,1,10000)); 
      
    };
    
    var h = setInterval(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for(var i = 0; i < 80; i++)
      {
        if(hobbylist[i].z >-1000)
        {
          hobbylist[i].z = hobbylist[i].z - zspeed;
        }
        else {
          hobbylist[i].z = 10000;
          hobbylist[i].x = (Math.random() - 0.5) * 2 * canvas.width;
          hobbylist[i].y = (Math.random() - 0.5) * 2 * canvas.height;
        }
        hobbylist[i].draw(); 
      }
      
    },10);
  
  }


}
