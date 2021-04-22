import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Challenge } from '../models/challenge';
import { FsItemService } from '../service/fs-item.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Pipe({ name: 'safeHTML'})
export class SafeHTMLPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer){}
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
  challengeList = [
    {
      id: 0,
      title: 'Table', 
      url: "table", 
      codeLanguage: ''
    },
    {
      id: 1,
      title: 'FizzBuzz', 
      url: "erste", 
      codeLanguage: 'python'
    },
    {
      id: 2, 
      title: 'Detect Capital', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 3, title: 'Kids With the Greatest # of Candies', url: "erste"
    },
    {
      id: 4, 
      title: 'Shuffle the Array', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 5, 
      title: 'Number of Good Pairs', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 6, 
      title: 'Running Sum of 1d Array', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 7, 
      title: 'Group Given Group Size They Belong To',  
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 8, 
      title: 'Find Numbers With Even Number of Digits', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 9, 
      title: 'Subtract Product and Sum of Integer', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 10, 
      title: '# of Numbers Smaller Than Current', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 11, 
      title: 'Jewels and Stones', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 12, 
      title: 'XOR Operation in Array', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 13, 
      title: 'Corresponding Node of Binary Tree in a Clone Tree', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 14, 
      title: 'Number of steps to get to zero', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 15, 
      title: 'Count Items Matching a Rule', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 16, 
      title: 'Design Parking System', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 17, 
      title: 'Richest Customer Wealth', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 18, 
      title: 'Three Consecutive Odds', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 19, 
      title: 'Create Target Array In Order', 
      url: "erste", 
      codeLanguage: 'java'
    },
    {
      id: 20, 
      title: 'Shuffle String', 
      url: "erste", 
      codeLanguage: 'java'
    },

  ];

  updateErste(num:number){
    this.currentChallenge = num;
    console.log("updateErste Called");
  }

  constructor(public itemService: FsItemService, public router:Router) {
    
    }

  ngOnInit(): void {
   //initializations and fetching things on load

   //commented bottom lines to remove database storage for now
/*    this.itemService.getChallenges().subscribe(actionArray => {
      
    this.challenges = actionArray.map(challenge => {
      return challenge as Challenge;
    })
  }); */
 }

 
}
