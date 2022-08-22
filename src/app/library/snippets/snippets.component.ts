import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.scss']
})


export class SnippetsComponent implements OnInit {

  
  constructor( public router:Router, private dataService: DataServiceService) { }
  ngOnInit(): void {
    this.snippetList = this.dataService.getSnippets();
  }
  updateErste(num:number){
    this.currentSnippet = num;
    console.log("updateErste Called");
  }
  currentSnippet = 0;
  snippetList = [{}];

}
