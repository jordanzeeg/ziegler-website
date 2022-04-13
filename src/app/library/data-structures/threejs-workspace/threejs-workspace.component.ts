import { Component, ElementRef, OnInit, TestabilityRegistry, ViewChild } from '@angular/core';
import * as THREE from 'three';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader';
import * as dat from 'dat.gui';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from 'gsap';

@Component({
  selector: 'app-threejs-workspace',
  templateUrl: './threejs-workspace.component.html',
  styleUrls: ['./threejs-workspace.component.scss']
})
export class ThreejsWorkspaceComponent implements OnInit {

  

  constructor() { }

  
  ngOnInit(): void {
    //this.secondTutorial();
    this.testTextRender();
  }

  canvasDrawing() {
    const canvas = document.getElementById("canvas1")as HTMLCanvasElement;
  }

  //includes placement of a box, rotation of a box, and includes a plane. 
  //covers 0-40 minutes of chris courses on youtube https://www.youtube.com/watch?v=YK1Sw_hnm58
  firstTutorial(){
    const scene = new THREE.Scene();
    //camera values are field of view, aspect ratio, near clipping plane, far clipping plane (clipping pane means things outside range don't show up)
    //camera values 75, innerWidth/innerHeight, .1, and 1000, are default from tutorial by chris courses on youtube https://www.youtube.com/watch?v=YK1Sw_hnm58
    const camera = new THREE.PerspectiveCamera(
      75, 
      innerWidth/innerHeight,
      .1,
      1000);

    const renderer = new THREE.WebGLRenderer()
    //size of renderer
    renderer.setSize(innerWidth,innerHeight);
    //sets the quality, essentially. uses device quality with "devicePixelRatio"
    renderer.setPixelRatio(devicePixelRatio);
    const firstTutorialArea = document.getElementById("firstTutorialArea"); 

    //we add the renderer as a child because the renderer includes the scene and camera
    firstTutorialArea?.appendChild(renderer.domElement); 
    //these console logs are for testing to make sure that the threejs is working and that we've got the components we need 
    //console.log(scene);
    //console.log(camera);
    //console.log(renderer);

    //boxgeometry creates a box
    const boxGeometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial({color:0x00FF00}); //basically creates a color. can be applied to multiple objects if necessary
    //one way i can see using materials is to create a bank of materials and then use them as necessary
    const mesh = new THREE.Mesh(boxGeometry,material);
    scene.add(mesh);
    camera.position.z = 5;
    const planeGeometry = new THREE.PlaneGeometry(5,5,10, 10);
    const planeMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000, 
      side: THREE.DoubleSide}); //lets both sides of the plane be visible
    const planeMesh = new THREE.Mesh(planeGeometry,planeMaterial);
    scene.add(planeMesh);
      /*
      //this is where i'm testing out text rotation

      var tester: any; 
      const loader = new FontLoader();
      
      loader.load( './assets/fonts/Open_Sans_Regular.json', function ( font ) {
      
        var textGeo = new TextGeometry( 'Hello three.js!', {
          font: font,
          size: .5,
          height: .5,

        } );
        var textMaterial = new THREE.MeshBasicMaterial({color:0xFF0000});
        var textMaterial2 = new THREE.MeshBasicMaterial({color:0x0000FF})
        tester = new THREE.Mesh(textGeo, [textMaterial,textMaterial2]);
        scene.add(tester);

      } );
      console.log(scene);
      // end of test text

      */
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene,camera);
      mesh.rotation.x += .01;
      mesh.rotation.y += .01;
      planeMesh.rotation.x += .01;
      
    }
    animate();
    
    
  }

  //second tutorial is changes made at 40 minutes. here we start deleting some of the things from firstTutorial
  //create the mesh changes to verticies
  //implement dat.gui for fast editing of values
  /* secondTutorial(){

    //if you knew what raycasters are, you'd know what this does
    const raycaster = new THREE.Raycaster()

    const scene = new THREE.Scene();
    //camera values are field of view, aspect ratio, near clipping plane, far clipping plane (clipping pane means things outside range don't show up)
    //camera values 75, innerWidth/innerHeight, .1, and 1000, are default from tutorial by chris courses on youtube https://www.youtube.com/watch?v=YK1Sw_hnm58
    const camera = new THREE.PerspectiveCamera(
      75, 
      innerWidth/innerHeight,
      .1,
      1000);
    
    //this is to edit values in browser
      const gui = new dat.GUI();
      gui.domElement.style.marginTop = '150px';
      //world is data object for things we want edited
      const world = {
        plane: {
          width: 100,
          height:100,
          widthSegments: 50,
          heightSegments: 50
        }
      }

      //create functionality to dat.gui to create new mesh when changed
      //properties are "target object", property of object to vary, min value, max value
      gui.add(world.plane, 'width',1,world.plane.width*2).onChange(()=> {
        //when gui changes, change value in mesh
        //basically delete and re-add the mesh
        generatePlane();
      });
      gui.add(world.plane, 'height',1,world.plane.height*2).onChange(()=> {
        //when gui changes, change value in mesh
        //basically delete and re-add the mesh
        generatePlane();
      });
      gui.add(world.plane, 'widthSegments',1,world.plane.widthSegments*2).onChange(()=> {
        generatePlane();
      });
      gui.add(world.plane, 'heightSegments',1,world.plane.heightSegments*2).onChange(()=> {
        generatePlane();
      });
      
      //function created to generate plane. uses the world.plane defined above.
      //this code is kind of a mess in terms of organization
      //pretty sure only works because of hoisting

      const randomValues:any[] = [];
      function generatePlane() {
        planeMesh.geometry.dispose()
        planeMesh.geometry = new THREE.PlaneGeometry(world.plane.width,world.plane.height,world.plane.widthSegments,world.plane.heightSegments);
        var {array} = planeMesh.geometry.attributes.position; //something called destructuring where you take the thing that's console logged above and break it down
        for(let i = 0; i < array.length; i+=3)
        {
          //all vertices points are stored in array sequentially. basically parsing it out here
          const x = array[i];
          const y = array[i+1];
          const z = array[i+2];
    
          //array[i+2] = z + Math.random();
        }
        const colors:any[] = [];
        for(let i = 0; i < planeMesh.geometry.attributes.position.count; i++)
        {
          colors.push(0,.19,.4);
        }
        //setting it this way explains the structure of attributes we parsed in planeMesh.geometry.attributes.position.array
        //rgb in 3js is 0-1, not 0-255
        planeMesh.geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors),3));
        
        
        var {array} = planeMesh.geometry.attributes.position; //something called destructuring where you take the thing that's console logged above and break it down
        for(let i = 0; i < array.length; i+=3)
        {
          //all vertices points are stored in array sequentially. basically parsing it out here
          const x = array[i];
          const y = array[i+1];
          const z = array[i+2];

          array[i] = x +( Math.random() - 0.5);
          array[i+1] = y +( Math.random() - 0.5);
          array[i+2] = z + Math.random();
          randomValues.push(Math.random()-0.5);
          randomValues.push(Math.random()-0.5);
          randomValues.push(Math.random()-0.5);
        }

        //throws an error but works (autocreates originalPosition which previously didn't exist)
        //probably could also be called bad coding
        planeMesh.geometry.attributes.position.originalPosition = planeMesh.geometry.attributes.position.array;
        planeMesh.geometry.attributes.position.randomValue = randomValues;

      }

    const renderer = new THREE.WebGLRenderer();
    //size of renderer
    renderer.setSize(innerWidth,innerHeight);
    //sets the quality, essentially. uses device quality with "devicePixelRatio"
    renderer.setPixelRatio(devicePixelRatio);
    const firstTutorialArea = document.getElementById("firstTutorialArea"); 

    //we add the renderer as a child because the renderer includes the scene and camera
    firstTutorialArea?.appendChild(renderer.domElement); 
    //these console logs are for testing to make sure that the threejs is working and that we've got the components we need 
    //console.log(scene);
    //console.log(camera);
    //console.log(renderer);


    //this just works for some reason to give orbit controls
    

    //camera needs to be above the plane objects are on
    camera.position.y = -8;
    camera.position.z = 20;
    var orbitCon =  new OrbitControls(camera,renderer.domElement); 
    const planeGeometry = new THREE.PlaneGeometry(world.plane.width,world.plane.height,world.plane.widthSegments,world.plane.heightSegments);
    const planeMaterial = new THREE.MeshPhongMaterial({  //phongmaterial requires a light to illuminate 
      side: THREE.DoubleSide,
    flatShading: true,
    vertexColors: true
  }); //lets both sides of the plane be visible
    const planeMesh = new THREE.Mesh(planeGeometry,planeMaterial);
    generatePlane();
    scene.add(planeMesh);


    const colors:any[] = [];
    for(let i = 0; i < planeMesh.geometry.attributes.position.count; i++)
    {
      colors.push(0,.19,.4);
    }
    //setting it this way explains the structure of attributes we parsed in planeMesh.geometry.attributes.position.array
    //rgb in 3js is 0-1, not 0-255
    planeMesh.geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors),3));

    //create light
    const light = new THREE.DirectionalLight(
      0xffffff, //color of light
      .5); //brightness? i believe max is 1
      light.position.set(0,0,1); //set position. similar to camera it needs to be away from center (i believe cameras and lights by default are pointed at 0,0,0)
      scene.add(light);


      const backlight = new THREE.DirectionalLight(
        0xffffff,
        .3);
        backlight.position.set(0,0,-1);
        scene.add(backlight);

        const mouse = {
          x: -2,
          y: -2
        }
        let frame = 0;
    function animate() {
      frame += 0.01
      requestAnimationFrame(animate);
      renderer.render(scene,camera);

      
      raycaster.setFromCamera(mouse, camera);
      const {array, originalPosition} = planeMesh.geometry.attributes.position;
      for(let i = 0; i <array.length; i+=3)
      {
        array[i] = originalPosition[i] + Math.cos(frame+ randomValues[i]) *0.003;
        array[i+1] = originalPosition[i+1] + Math.sin(frame+ randomValues[i+1]) *0.003;
        array[i+2] = originalPosition[i+2] + Math.sin(frame+ randomValues[i+2]) *0.003;
      }
      planeMesh.geometry.attributes.position.needsUpdate = true;

      const intersects:any = raycaster.intersectObject(planeMesh);
      if(intersects.length > 0 )
      {
        const initialColor = {
          r: 0,
          g: .19,
          b: 0.4
        }
        const hoverColor = {
          r: .1,
          g: .5,
          b: 1
        }

        intersects[0].object.geometry.attributes.color.setX(intersects[0].face?.a, hoverColor.r)
        intersects[0].object.geometry.attributes.color.setY(intersects[0].face?.a, hoverColor.g)
        intersects[0].object.geometry.attributes.color.setZ(intersects[0].face?.a, hoverColor.b)

        intersects[0].object.geometry.attributes.color.setX(intersects[0].face?.b, hoverColor.r)
        intersects[0].object.geometry.attributes.color.setY(intersects[0].face?.b, hoverColor.g)
        intersects[0].object.geometry.attributes.color.setZ(intersects[0].face?.b, hoverColor.b)

        intersects[0].object.geometry.attributes.color.setX(intersects[0].face?.c, hoverColor.r)
        intersects[0].object.geometry.attributes.color.setY(intersects[0].face?.c, hoverColor.g)
        intersects[0].object.geometry.attributes.color.setZ(intersects[0].face?.c, hoverColor.b)



        intersects[0].object.geometry.attributes.color.needsUpdate = true;
        
        
        gsap.to(hoverColor, {
          r: initialColor.r,
          g: initialColor.g,
          b: initialColor.b,
          onUpdate: () => {
        intersects[0].object.geometry.attributes.color.setX(intersects[0].face?.a, hoverColor.r)
        intersects[0].object.geometry.attributes.color.setY(intersects[0].face?.a, hoverColor.g)
        intersects[0].object.geometry.attributes.color.setZ(intersects[0].face?.a, hoverColor.b)

        intersects[0].object.geometry.attributes.color.setX(intersects[0].face?.b, hoverColor.r)
        intersects[0].object.geometry.attributes.color.setY(intersects[0].face?.b, hoverColor.g)
        intersects[0].object.geometry.attributes.color.setZ(intersects[0].face?.b, hoverColor.b)

        intersects[0].object.geometry.attributes.color.setX(intersects[0].face?.c, hoverColor.r)
        intersects[0].object.geometry.attributes.color.setY(intersects[0].face?.c, hoverColor.g)
        intersects[0].object.geometry.attributes.color.setZ(intersects[0].face?.c, hoverColor.b)
          }
        })
      }

    }
    animate();
    
    
    addEventListener('mousemove', (event) =>{

      //these are wrong because innerheight is thrown off by having more stuff on the page
      //normalizing mouse position using innerWidth/innerHeight. instead should use window height/width and position
      //event.clientX gives a number from 0 -> window.innerWidth
      //event.clientY gives a number from 0 ->window.innerHeight
      mouse.x = (event.clientX /innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / innerHeight) * 2 + 1;
    });
  } */

  //testing rendering of text and figuring out how to change the string displayed
  testTextRender() {
    var percentage = 0;
    var texts = percentage.toString()+"%";
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, 
      1,
      .1,
      1000);

    const renderer = new THREE.WebGLRenderer({alpha: true})
    renderer.setSize(100,100);
    renderer.setPixelRatio(devicePixelRatio);
    const secondTutorialArea = document.getElementById("secondTutorialArea"); 
    secondTutorialArea?.appendChild(renderer.domElement); 
    camera.position.z = 10;
     
      //this is where i'm testing out text rotation

      var tester: any; 
      const loader = new FontLoader();
      
      loader.load( './assets/fonts/Open_Sans_Regular.json', function ( font ) {
      
        var textGeo = new TextGeometry( "helloworld", {
          font: font,
          size: .5,
          height: .5,

        } );
        var textMaterial = new THREE.MeshBasicMaterial({color:0xFF0000});
        var textMaterial2 = new THREE.MeshBasicMaterial({color:0x0000FF})
        tester = new THREE.Mesh(textGeo, [textMaterial,textMaterial2]);

        tester.geometry.center();
        console.log(tester);
        scene.add(tester);
      } );
      
      // end of test text

      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene,camera);  
        if(tester)      
        tester.rotation.y += .01;
      }
      animate();

  }
}
