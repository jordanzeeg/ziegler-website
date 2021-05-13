import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FsItemService } from 'src/app/service/fs-item.service';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.scss']
})


export class SnippetsComponent implements OnInit {

  
  constructor(public itemService: FsItemService, public router:Router) { }

  currentSnippet = 0;
  snippetList = [
    {
      id: 0,
      title: 'Table', 
      url: "table", 
      codeLanguage: ''
    },
    {
      id: 1,
      title: 'api.py',
      url: 'snippet',
      codeLanguage: ''
    },
    {
      id: 2,
      title: 'logging',
      url: 'snippet',
      codeLanguage:'python'
    },
    {
      id: 3,
      title: 'json translations',
      url: 'snippet',
      codeLanguage:'python',
    }
  ]
  ngOnInit(): void {
  }
  updateErste(num:number){
    this.currentSnippet = num;
    console.log("updateErste Called");
  }

}
