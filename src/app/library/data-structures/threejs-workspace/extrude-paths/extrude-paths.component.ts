import { Component, ElementRef, OnInit, TestabilityRegistry, ViewChild } from '@angular/core';
import * as THREE from 'three';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader';
import * as dat from 'dat.gui';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

@Component({
  selector: 'app-extrude-paths',
  templateUrl: './extrude-paths.component.html',
  styleUrls: ['./extrude-paths.component.scss']
})
export class ExtrudePathsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderExtrude();
  }
  renderExtrude(){
    //steps necessary for rendering 
    //scene declaration
    //camera declaration
    //light declaration
    //geometry declaration
    //material declaration
    //mesh declaration
    //renderer declaration
    //orbital controls declaration
    //html create div. append renderer.domElement to the parent div created
    const renderer = new THREE.WebGLRenderer({alpha: true})
    renderer.setSize(700,700);
    renderer.setPixelRatio(devicePixelRatio);
    
    var percentage = 0;
    var texts = percentage.toString()+"%";
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, 
      1,
      .1,
      1000);
    //experiment with this vs orbitalcontrols
    //var orbitCon =  new OrbitControls(camera,renderer.domElement);  
    let controls = new TrackballControls( camera, renderer.domElement );
    controls.minDistance = 200;
    controls.maxDistance = 500;  
    
    const secondTutorialArea = document.getElementById("renderContainer"); 
    secondTutorialArea?.appendChild(renderer.domElement); 
    camera.position.z = 500;

        scene.add( new THREE.AmbientLight( 0x222222 ) );

				const light = new THREE.PointLight( 0xffffff );
				light.position.copy( camera.position );
				scene.add( light );

				//

				const closedSpline = new THREE.CatmullRomCurve3( [
					new THREE.Vector3( -100, 0, 100 ),
          new THREE.Vector3( -50, 50, 50 ),
          new THREE.Vector3( 0, 0, 0 ),
          new THREE.Vector3( 50, -50, 50 ),
          new THREE.Vector3( 100, 0, 100 )
				] );

				//closedSpline.curveType = 'catmullrom';
				//closedSpline.closed = true;

        //assuming base 700 px
        //curve 1 of 3 for agg
        const curve1 = new THREE.CubicBezierCurve3(
          new THREE.Vector3( -300, 150, 0 ),
          new THREE.Vector3( -100, 150, 0 ),
          new THREE.Vector3( 0, 350, 0 ),
          new THREE.Vector3( 300, 50, 0 )
        );
        
        const points = curve1.getPoints( 50 );

				const extrudeSettings1 = {
					steps: 100,
					bevelEnabled: false,
					extrudePath: curve1
				};


        const circleRadius = 10;
        const circleShape = new THREE.Shape()
					.moveTo( 0, circleRadius )
					.quadraticCurveTo( circleRadius, circleRadius, circleRadius, 0 )
					.quadraticCurveTo( circleRadius, - circleRadius, 0, - circleRadius )
					.quadraticCurveTo( - circleRadius, - circleRadius, - circleRadius, 0 )
					.quadraticCurveTo( - circleRadius, circleRadius, 0, circleRadius );

				const geometry1 = new THREE.ExtrudeGeometry( circleShape, extrudeSettings1 );

				const material1 = new THREE.MeshLambertMaterial( { color: 0xb00000, wireframe: false } );

				const mesh1 = new THREE.Mesh( geometry1, material1 );

				scene.add( mesh1 );

        //curve 2 of 3 for agg
        const curve2 = new THREE.CubicBezierCurve3(
          new THREE.Vector3( -300, 0, 0 ),
          new THREE.Vector3( 200, 250, 0 ),
          new THREE.Vector3( -50,-50 , 0 ),
          new THREE.Vector3( 300, 0, 0 )
        );
        const extrudeSettings2 = {
					steps: 100,
					bevelEnabled: false,
					extrudePath: curve2
				};
        const geometry2 = new THREE.ExtrudeGeometry( circleShape, extrudeSettings2 );

				const material2 = new THREE.MeshLambertMaterial( { color: 0xb00000, wireframe: false } );

				const mesh2 = new THREE.Mesh( geometry2, material2 );

				scene.add( mesh2 );
        //curve 3 of 3 for agg
        const curve3 = new THREE.CubicBezierCurve3(
          new THREE.Vector3( -300, -150, 0 ),
          new THREE.Vector3( 0, 200, 0 ),
          new THREE.Vector3( 200, -200 , 0 ),
          new THREE.Vector3( 300, -50, 0 )
        );
        const extrudeSettings3 = {
          steps: 100,
          bevelEnabled: false,
          extrudePath: curve3,
          depth: 0
        };
        const geometry3 = new THREE.ExtrudeGeometry( circleShape, extrudeSettings3 );

        const material3 = new THREE.MeshLambertMaterial( { color: 0xb00000, wireframe: false } );

        var mesh3 = new THREE.Mesh( geometry3, material3 );
        console.log(curve2.getPoints());
        scene.add( mesh3 );
        console.log(mesh3);
        //end addition of wires

        //sphere addition

        const sphereGeometry = new THREE.SphereGeometry(30,32,16);
        const sphereMaterial = new THREE.MeshLambertMaterial( { color: 0x0000bb, wireframe: false } );
        
        const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere1.position.set(-300, 150, 0);
        scene.add(sphere1);
        const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere2.position.set(-300, 0, 0);
        scene.add(sphere2);
        const sphere3 = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere3.position.set(-300, -150, 0);
        scene.add(sphere3);



        let fraction = 0;
        let waitVar = 100;
        //renderer.render(scene, camera);
      function animate() {
        requestAnimationFrame(animate);
         scene.remove(mesh3);
        renderer.dispose();
        const curve4 = new THREE.CubicBezierCurve3(
          new THREE.Vector3( -300, -150, 0 ),
          new THREE.Vector3( 0, 200, fraction*100+400 ),
          new THREE.Vector3( 200, -200 , 200 ),
          new THREE.Vector3( fraction*300-218.4, fraction*200-149.6, 200-fraction*200 )
        );
        const extrudeSettings4 = {
          steps: 100,
          bevelEnabled: false,
          extrudePath: curve4,
          depth: 0
        };
        const geometry4 = new THREE.ExtrudeGeometry( circleShape, extrudeSettings4 );

        

        mesh3 = new THREE.Mesh( geometry4, material3 );
        
        scene.add( mesh3 );   
        if(sphere1)
        {
          const newPosition = curve1.getPoint(fraction)
          sphere1.position.copy(newPosition); 
        }      
        renderer.render(scene,camera);
        fraction+= 0.005;
        if(fraction > 1)
        {
          fraction = 1;
          if(waitVar == 0)
          {
            waitVar =100;
            fraction = 0;
          }
          waitVar--;
        }

      
      }
      animate();


  }
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
//levenshtein distance
function stringMatch(s1:string,s2:string)
{
  var table = new Array(s1.length+1)
  for(var i = 0; i < s1.length+1; i++)
  {
    table[i] = new Array(s2.length+1);
    table[i][0] = i;
  }
  for(var i = 0; i < s2.length+1; i++)
  {
    table[0][i] = i;
  }
  for(var i = 1; i < s1.length+1; i++)
  {
  	for(var j = 1; j < s2.length+1; j++)
    {
    	var a,b,c = 0;
    	if(s1[i-1]===s2[j-1])
      {
      	table[i][j] = table[i-1][j-1];
      }
      else
      {
      	a = table[i][j-1];
        b = table[i-1][j];
        c = table[i-1][j-1];
        if(a <=b && a <=c)
        {
        	table[i][j] = a + 1;
        }
        else if(b <=a && b <=c)
        {
        	table[i][j] = b + 1;
        }
        else 
        {
        	table[i][j] = c + 1;
        }
      }
    }
  }
  return table[s1.length][s2.length]
}
