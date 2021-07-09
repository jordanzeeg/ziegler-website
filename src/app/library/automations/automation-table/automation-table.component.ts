import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../service/data-service.service';

@Component({
  selector: 'app-automation-table',
  templateUrl: './automation-table.component.html',
  styleUrls: ['./automation-table.component.scss']
})
export class AutomationTableComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  automationList:any;

  ngOnInit(): void {
    this.automationList = this.dataService.getAutomations();
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

  
    //class contains one image/video to be maneuvered around the screen
    class Hobby {
      x: number;
      y: number;
      z: number;
      text: string;
      radius: number;
      xProjected: number;
      yProjected: number;
      scaleProjected:number;
      colorR: number;
      colorG: number;
      colorB: number;
      
      constructor(newText:string) {
        console.log(canvas.width);
        this.x = (Math.random() - 0.5) * 2 * canvas.width; //currently gives random x position
        this.y = (Math.random() - 0.5) * 2 * canvas.height; //currently gives random y position
        this.z = (Math.random() - 0.5) * 2 * 10000; //gives random z, notable z is always positive and
        this.colorR = (Math.random() *255); //random colors
        this.colorG = (Math.random()*255); //random colors
        this.colorB = (Math.random()*255); //random colors
        this.radius = 250;
        this.text = newText;
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
        ctx.fillStyle = 'rgb(' + this.colorR + ','+ this.colorG+ ',' + this.colorB+ ')';
        //ctx.fillRect(this.xProjected - this.radius, 
        //             this.yProjected - this.radius, 
        //             this.radius *2 * this.scaleProjected,
        //             this.radius *2 * this.scaleProjected); //replace this later with the image drawing
        // ctx.drawImage(image2, this.xProjected - this.radius, 
        //             this.yProjected - this.radius, 
        //             this.radius *2 * this.scaleProjected,
        //             this.radius *2 * this.scaleProjected)
        
        ctx.fillText(this.text, this.xProjected - this.radius/3, 
                    this.yProjected - this.radius/2, 
                    this.radius * this.scaleProjected)        


      }
    }
    //create list of objects
    const hobbylist:Hobby[] = [];
    for(var i = 0; i < 80; i++)
    {
      const v = i%this.automationList.length;
      hobbylist.push(new Hobby(this.automationList[v].title)); 
      
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
          hobbylist[i].z = (Math.random() - 0.5) * 10000;
          hobbylist[i].x = (Math.random() - 0.5) * 2 * canvas.width;
          hobbylist[i].y = (Math.random() - 0.5) * 2 * canvas.height;
        }
        hobbylist[i].draw(); 
      }
      
    },30);
  
  }

}
