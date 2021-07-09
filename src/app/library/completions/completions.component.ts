import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FsItemService } from 'src/app/service/fs-item.service';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-completions',
  templateUrl: './completions.component.html',
  styleUrls: ['./completions.component.scss']
})
export class CompletionsComponent implements OnInit {

  constructor(public itemService: FsItemService, public router:Router, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.completionList = this.dataService.getCompletions();
  }
  currentCompletion = 0;
  completionList:any;
  updateErste(num:number){
    this.currentCompletion = num;
  }
}
