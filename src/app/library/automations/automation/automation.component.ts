import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../../service/data-service.service';

@Component({
  selector: 'app-automation',
  templateUrl: './automation.component.html',
  styleUrls: ['./automation.component.scss']
})
export class AutomationComponent implements OnInit {

  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.data = this.dataService.getAutomations();
  }
  @Input() dId: number = 0;
    //data stores all the automations. 
    data:any;
    
}
