import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { FsItemService } from '../service/fs-item.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  items:Item[];
  constructor(public itemService: FsItemService) { }

  ngOnInit(): void {
    //initializations and fetching things on load
    this.itemService.getItems().subscribe(actionArray => {
      
      this.items = actionArray.map(item => {
        return item as Item;
      })
    });
  }

}
