import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies-page',
  templateUrl: './hobbies-page.component.html',
  styleUrls: ['./hobbies-page.component.scss']
})
export class HobbiesPageComponent implements OnInit {
  isCollapsed=true;
  ngOnInit(): void {

    this.canvasDrawing();
    //this.moveDemoFunction();
  }
  
// moveDemoFunction is a movement like a dvd bouncing using the box (div_elem)
//   moveDemoFunction(): void {
//     var div_elem = document.getElementById("demo");
//     var plane = document.getElementById("planediv");
//     let x = 0;
//     let y = 0;
//     let xspeed = 10;
//     let yspeed = 10;
//     var maxX = plane.offsetWidth;
//     var maxY = plane.offsetHeight;
//   //div_elem.style.top = "100px";
//   //alert(div_elem.id);
//   var h = setInterval(function () {
//     var maxX = plane.offsetWidth;
//     var maxY = plane.offsetHeight;
//    div_elem.style.top = y + yspeed +"px"; //Math.floor((Math.random() * 100) + 1);  Generates random number between 1 and 100
//    div_elem.style.left = x + xspeed +"px"; //Math.floor((Math.random() * 200) + 1);  Generates random number between 1 and 200
//    x = x + xspeed;
//    y = y + yspeed; 
//    if( x + 150 >= maxX)
//    {
//     xspeed = xspeed *-1;
//     x = maxX - 150;
//    }
//    else if (x < 0)
//    {
//     xspeed = xspeed *-1;
//     x = 0;
//    }
//    if( y + 150 > maxY)
//     {
//      yspeed = yspeed *-1;
//      y = maxY-150;
//     }
//    else if (y < 25)
//    {
//     yspeed = yspeed *-1;
//     y = 25;
//    }
// }, 100)
//   }
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
    image2.src = "./images/Azir_Render.png";
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
        // ctx.fillRect(this.xProjected - this.radius, 
        //             this.yProjected - this.radius, 
        //             this.radius *2 * this.scaleProjected,
        //             this.radius *2 * this.scaleProjected); //replace this later with the image drawing
        ctx.drawImage(image2, this.xProjected - this.radius, 
                    this.yProjected - this.radius, 
                    this.radius *2 * this.scaleProjected,
                    this.radius *2 * this.scaleProjected)


      }
    }
    //create list of objects
    const hobbylist:Hobby[] = [];
    for(var i = 0; i < 80; i++)
    {
      hobbylist.push(new Hobby(1,1,10000)); 
      
    };
    
    let h = setInterval(function() {
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
// var div0 = document.createElement("div");
// var div1 = document.createElement("div");
// var div2 = document.createElement("div");
// var div3 = document.createElement("div");
// var div4 = document.createElement("div");
// var div5 = document.createElement("div");
// var div6 = document.createElement("div");
// var div7 = document.createElement("div");
// let arrayOfDivs = [div0,div1,div2,div3,div4,div5,div6,div7];


