import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FsItemService } from 'src/app/service/fs-item.service';

@Component({
  selector: 'app-automations',
  templateUrl: './automations.component.html',
  styleUrls: ['./automations.component.scss']
})
export class AutomationsComponent implements OnInit {

  constructor(public itemService: FsItemService, public router:Router) { }

  currentAutomation = 0;
  automationList = [
    {
      id: 0,
      title: 'Table', 
      url: "table", 
      codeLanguage: ''
    },
    {
      id: 1,
      title: 'lazygit.py',
      url: 'automation',
      codeLanguage: ''
    }
  ]

  ngOnInit(): void {
  }
  updateErste(num:number){
    this.currentAutomation = num;
    console.log("updateErste Called");
  }
}
