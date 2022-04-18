import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-automations',
  templateUrl: './automations.component.html',
  styleUrls: ['./automations.component.scss']
})
export class AutomationsComponent implements OnInit {

  constructor( public router:Router, private dataService: DataServiceService) { }

  currentAutomation = 0;
  automationList:any;

  ngOnInit(): void {
    this.automationList = this.dataService.getAutomations();
  }
  updateErste(num:number){
    this.currentAutomation = num;
  }
}
