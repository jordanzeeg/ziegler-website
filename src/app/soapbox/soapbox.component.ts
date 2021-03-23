import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Soapbox } from '../models/soapbox';
import { FsItemService } from '../service/fs-item.service';

@Component({
  selector: 'app-soapbox',
  templateUrl: './soapbox.component.html',
  styleUrls: ['./soapbox.component.scss']
})
export class SoapboxComponent implements OnInit {

  soapboxes:Soapbox[];

  constructor(public itemService:FsItemService) {
    
   }

   ngOnInit(): void {
    //initializations and fetching things on load
    this.itemService.getSoapboxes().subscribe(actionArray => {
      
      this.soapboxes = actionArray.map(soapbox => {
        return soapbox as Soapbox;
      })
    });
  }

}
