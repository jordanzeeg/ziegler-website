import { Component, OnInit } from '@angular/core';
import { Challenge } from '../models/challenge';
import { FsItemService } from '../service/fs-item.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  challenges: Challenge[] = [];
  constructor(public itemService:FsItemService) {
    
  }

  ngOnInit(): void {
   //initializations and fetching things on load
   this.itemService.getChallenges().subscribe(actionArray => {
     
     this.challenges = actionArray.map(challenge => {
       
       return challenge as Challenge;
     })
   });
 }
}
