import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Challenge } from '../../models/challenge';
import { FsItemService } from '../../service/fs-item.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

@Pipe({ name: 'safeHTML'})
export class SafeHTMLPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer ){}
  transform(value:any) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  currentChallenge = 0;
  challengeList = [{}];

  updateErste(num:number){
    this.currentChallenge = num;
  }

  constructor(public itemService: FsItemService, public router:Router,private dataService: DataServiceService) {
    
    }

  ngOnInit(): void {
    this.challengeList = this.dataService.getChallenges();
   //initializations and fetching things on load

   //commented bottom lines to remove database storage for now
/*    this.itemService.getChallenges().subscribe(actionArray => {
      
    this.challenges = actionArray.map(challenge => {
      return challenge as Challenge;
    })
  }); */
 }

 
}
