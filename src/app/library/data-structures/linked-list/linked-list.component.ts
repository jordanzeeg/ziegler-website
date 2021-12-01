import { Component, OnInit } from '@angular/core';
import { relative } from 'path';
import { element } from 'protractor';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.scss']
})
export class LinkedListComponent implements OnInit {

//zybooks number of buttons
  numButtons = 7;
  resultDec = 0;
  constructor() { }
  testLL = new LinkedList;
  generateButtonsAndViews(){
    //create buttons
    var parentWindow = document.getElementById("parentDiv");
    console.log(parentWindow);
    for(let i = this.numButtons; i>=0; i--)
    {
      let newButton = document.createElement("div");
      newButton.classList.add("button");
      newButton.classList.add("btn");
      newButton.style.backgroundColor = "blue";
      newButton.style.color = "white";
      newButton.id = "node"+ i;
      newButton.innerHTML = "0";
      newButton.addEventListener('mousedown', e=>{
        let nodeE = <HTMLDivElement>e.currentTarget;
        let nodeid = nodeE.id;
        let nodeId = nodeid.match(/(\d+)/)?.join();
        if(nodeId){
          let nodeStatus = parseInt(nodeE.innerHTML);
          let nodeNum = parseInt(nodeId);
          if(nodeStatus == 0){

          this.resultDec+= Math.pow(2,nodeNum);
          nodeE.innerHTML = "1";
          }
          if(nodeStatus ==1){
            this.resultDec-= Math.pow(2,nodeNum);
            nodeE.innerHTML = "0";
          }
          
          
          //assuming nodeNum = iterator

          //result += Math.pow(2,nodeNum)
          document.getElementById("result").innerHTML = this.resultDec;
          

        }
        
         
      })


      parentWindow?.appendChild(newButton);
      
      
    }
    
  }
  ngOnInit(): void {
    this.generateButtonsAndViews();
    var testLL = this.testLL;
    testLL.appendFront("first add");
    testLL.appendBack("second add");
    testLL.appendFront("third add");
    console.log("first " + testLL.getFirst().data);
    console.log("second " + testLL.getFirst().next.data);
    console.log("third " + testLL.getFirst().next.next.data);
    console.log("getFirst " + testLL.getFirst().data);
    console.log("getLast " + testLL.getLast().data + " " + testLL.getLast().next);
    
    this.displayList();
  }
  canvasDrawing(): void {
    //initialize canvas
    const canvas = document.getElementById("canvas1")as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    let loopy = this.testLL.getFirst(); 
    let listContainer = document.getElementById("linkedListContainer");
    if(!listContainer)
    {
      let listParent = document.getElementById("linkedListParent");
      let listContainer = document.createElement("div");
      listContainer.id = "linkedListContainer";
      listContainer.classList.add("linkedBox");
      //TODO: set size of listContainer
      listParent?.appendChild(listContainer);
    }
    while(loopy)
    {
      if(ctx && loopy.next && listContainer)
      {
        let nextx = loopy.next.x *.85* (listContainer.offsetWidth/100) + 20;
        let nexty = loopy.next.y *.80 * (listContainer.offsetHeight/100) + 20;
        let drawx = loopy.x *.85* listContainer.offsetWidth/100 + 20;
        let drawy = loopy.y *.8*  listContainer.offsetHeight/100 + 20;
        ctx.beginPath();
        ctx.moveTo(drawx,drawy);
        ctx.lineTo(nextx, nexty);
        console.log("canvas width " + canvas.width + " height " + canvas.height)
        ctx.stroke();
        
      }
      loopy = loopy.next;
    }
  }
  displayList (){
    //delete old div
    //create new div (canvas lite)
    let that = this; 
    let listParent = document.getElementById("linkedListParent");
    let oldList = document.getElementById("linkedListContainer");
    if(oldList){
      oldList.parentNode?.removeChild(oldList);
    }
    let listContainer = document.createElement("div");
    listContainer.id = "linkedListContainer";
    listContainer.classList.add("linkedBox");
    //TODO: set size of listContainer
    listParent?.appendChild(listContainer);
    let iterator = 0;
    let loopy = this.testLL.getFirst(); 

    //initialize canvas
    

    //loop through linked list
    //TODO: separate to 3 functions
    //TODO: create search function for LL
    while(loopy)
    {
      //create new node
      let newNode = document.createElement("div");
      //add data to the viewable element
      newNode.id = "node"+ iterator;
      loopy.id = newNode.id;
      newNode.classList.add("linkedNode"); 
      newNode.innerHTML = loopy.data;
      newNode.style.position = "relative";
      //calculate x and y as percentage
      //calculates to get px using the vh and vw that listcontainer is set with to maintain flexibility
      let calcx = loopy.x*.85* (listContainer.offsetWidth)/100;
      
      newNode.style.left = calcx + "px";
      //added iterator calculation to y to offset natural space taking of position relative
      let calcy = loopy.y *.80 * (listContainer.offsetHeight)/100 - iterator*50;
      newNode.addEventListener('mousedown', e=>{

        //i dont know why e.currentTarget gets the element, or e.clientX/clientY gets the mouse position but it does 
        let nodeE = <HTMLElement>e.currentTarget;
        let nodeid = nodeE.id;
        let x = e.clientX;
        let y = e.clientY;
        console.log("first x: " + x + " y: " + y);
        
        if(nodeid){
          let node = document.getElementById(nodeid);
          if(node!= null){
          console.log("node? " + (node.id ? node.id: "0"));
          
             
            document.onmousemove = function movement(e) {
              console.log("mousemoving");
              let newX = x - e.clientX;
              
              let newY = y - e.clientY;
              console.log("x: " + x + " y: " + y);
              x = e.clientX;
              y = e.clientY;
              
              
              console.log("newx: " + newX + " newy: " + newY);
              console.log("ex: " + e.clientX + " ey: " + e.clientY);
              console.log("node offset: " + node?.offsetTop);
              if(node){
                node.style.top =  calcy - newY + "px";
                node.style.left = calcx - newX + "px";
                calcx = calcx - newX;
                calcy = calcy - newY;
                //that.displaylines() so that the lines get redrawn
                let movedNode = that.testLL.search(node.id);
                if(movedNode != "dnf")
                {
                  console.log("search found " + movedNode.data);
                  movedNode.x = calcx*100/(0.85)/listContainer.offsetWidth;
                  let nodeId = node?.id.match(/(\d+)/)?.join(); 
                  if(nodeId != null){
                    movedNode.y = (calcy+(parseInt(nodeId)*50))*100/(0.80)/listContainer.offsetHeight;
                  }
                  
                }
              }
              
            };
            document.addEventListener('mouseup', function clears(e){
              that.canvasDrawing();
              document.removeEventListener('mouseup',clears);
              document.onmousemove = null;
            });
          }
          
        }
        
        // calling anonymous functions to preserve variable continuity
       
      });
      newNode.style.top = calcy + "px";
      
      
      listContainer.appendChild(newNode);
      
      //draw lines using canvas
      //check for ctx, check for loopy.next
      this.canvasDrawing();
      
      //iterate to next node in LL
      iterator += 1;
      loopy = loopy.next;
    }
    
      //create div for each node using x and y data points
      //draw linked lines (the real canvas) (using x+ size/2 and y+size/2 to get center of node, and then drawing to next node's center. )
  }
  //adds to front. creates new node, adds element using data from input field. 
  //change happened so recreate the display list
  addFunction() {
    let data = <HTMLInputElement>document.getElementById("inputData");
    let x = data.value; 
    if(x)
    {
      this.testLL.appendFront(x);
      console.log("addFunction ran with: " + x);
      console.log("testLL front: "+ this.testLL.getFirst().data);
      data.value = '';
    }
    else
    {
      this.testLL.appendFront("test");
      console.log("addFunction ran with: " + "test");
      console.log("testLL front: "+ this.testLL.getFirst().data);
      data.value = '';
    }
    this.displayList();
  }

  //adds to back. creates new node, adds element using data from input field \
  //change happened so recreate the display list
  addToBack(){
    let data = <HTMLInputElement>document.getElementById("inputData");
    let x = data.value; 
    if(x)
    {
      this.testLL.appendBack(x);
      console.log("addToBack ran with: " + x);
      console.log("testLL back: "+ this.testLL.getLast().data);
      data.value = '';
    }
    else
    {
      this.testLL.appendBack("test");
      console.log("addFunction ran with: " + "test");
      console.log("testLL back: "+ this.testLL.getLast().data);
      data.value = '';
    }
    this.displayList();
  }

  //remove front element. 
  //change happened so recreate display list
  removeFront() {
    this.testLL.removeFront();
    console.log("removeFront ran");
    this.displayList();
  }

  //remove back element. change happened so recreate display list
  removeBack() {
    this.testLL.removeBack();
    console.log("removeBack ran");
    this.displayList();
  }
  
  
  
}


class LinkedListNode {
  data: string;
  next: any;
  x: number;
  y: number;
  id: string;

  

  constructor(data: string, maxX:number,maxY:number, next = null) {
    this.data = data;
    this.next = next;
    this.x = (Math.random())  * maxX;
    this.y = (Math.random())  * maxY;
    this.id = "";
  }
}
class LinkedList {
  head: any;
  maxX: number;
  maxY: number;
  numButtons = 7;
  constructor(head = null, maxX = 100, maxY=100){
    this.head = head;
    this.maxX = maxX;
    this.maxY = maxY;
  }
  size() {
    let count = 0;
    let node = this.head;
    while(node){
      count++;
      node = node.next;
    }
    return count;
  }
  clear() {
    this.head = null;
  }
  getLast(){
    let lastNode = this.head;
    if(lastNode) {
      while(lastNode.next) { 
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
  getFirst() {
    return this.head;
  }
  appendFront(data: string) {
    let oldHead = this.head;
    let newHead = new LinkedListNode(data,this.maxX, this.maxY);
    newHead.next = oldHead;
    this.head = newHead;
  }
  appendBack(data: string) {
    let oldBack = this.getLast();
    let newBack = new LinkedListNode(data,this.maxX, this.maxY);
    if(oldBack){
      oldBack.next = newBack;
    }
    else {
      this.head = newBack;
    }
    
  }
  removeFront(){
    let oldHead = this.head;
    if(oldHead.next){
      this.head = oldHead.next;
    }
    else {
      this.clear();
      console.log("There is no next to replace as head. clearing list.")
    }
  }
  removeBack() {
    let secondLast = this.head;
    if(secondLast){
      if(!secondLast.next)
      {
        this.clear();
      }
      while(secondLast.next)
      {
        let last = secondLast.next;
        if(!last.next)
        {
          secondLast.next = null;
        }
        else {
          secondLast = secondLast.next;
        }
      }
      
    }
  }
  search(id:string) {
    //get specific node
    let loopy = this.getFirst();
    while(loopy)
    {
      if(loopy.id == id)
      {
        return loopy;
      }
      loopy = loopy.next;
    }
    console.log("search function did not find string");
    return "dnf";
  }
  getPrev(node:any) {
    //get previous node, for redrawing lines on click events
  }
  getNext(node:any) {
    //get next node, for redrawing lines on click events
  }

  

}
