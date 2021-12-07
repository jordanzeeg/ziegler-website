import { Component, ElementRef, OnInit, TestabilityRegistry, ViewChild } from '@angular/core';
import * as THREE from 'three';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader';
import * as dat from 'dat.gui';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

@Component({
  selector: 'app-extrude-paths',
  templateUrl: './extrude-paths.component.html',
  styleUrls: ['./extrude-paths.component.scss']
})
export class ExtrudePathsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    //html create div. append renderer.domElement to the parent div created
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);
    const camera = new THREE.Camera();
    const light = new THREE.DirectionalLight();
    const renderer = new THREE.WebGLRenderer();
    const parent = document.getElementById("renderContainer");
    if(parent)
    {
      const pHeight = parent.clientHeight;
      const pWidth = parent.clientWidth;
      renderer.setPixelRatio(window.devicePixelRatio);
      if(pWidth && pHeight)
      {
        renderer.setSize(pWidth,pHeight);
      }
      else 
      {
        renderer.setSize(500,500);
      }
      parent.appendChild(renderer.domElement);
    }
   
  }
}
