import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../../service/data-service.service';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.scss']
})
export class CompletionComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.data = this.dataService.getCompletions();
  }
  @Input() dId: number = 0;
  data:any;
  
}
