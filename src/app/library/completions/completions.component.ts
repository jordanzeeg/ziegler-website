import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FsItemService } from 'src/app/service/fs-item.service';

@Component({
  selector: 'app-completions',
  templateUrl: './completions.component.html',
  styleUrls: ['./completions.component.scss']
})
export class CompletionsComponent implements OnInit {

  constructor(public itemService: FsItemService, public router:Router) { }

  ngOnInit(): void {
  }
  currentCompletion = 0;
  snippetCompletion = [
    {
      id: 0,
      title: 'Table', 
      url: "table", 
      codeLanguage: ''
    },
    {
      id:1,
      title: 'verification',
      url: 'completion',
      codeLanguage:''
    }
  ]
  updateErste(num:number){
    this.currentCompletion = num;
    console.log("updateErste Called");
  }
}
