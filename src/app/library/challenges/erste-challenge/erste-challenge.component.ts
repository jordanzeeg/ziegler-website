import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../../service/data-service.service';
@Component({
  selector: 'app-erste-challenge',
  templateUrl: './erste-challenge.component.html',
  styleUrls: ['./erste-challenge.component.scss']
})
export class ErsteChallengeComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
      this.getChallenges();
  }
  @Input() dId: number = 0;

  getChallenges(): void {
      this.data = this.dataService.getChallenges();
  }

  //data stores all the challenges. 
  data:any;
  
   }
