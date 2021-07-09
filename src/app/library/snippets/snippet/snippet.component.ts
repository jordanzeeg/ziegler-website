import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../../service/data-service.service';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss']
})
export class SnippetComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.data = this.dataService.getSnippets();
  }
  @Input() dId: number = 0;

  //data stores all the snippets. 
  data:any;
  
}
