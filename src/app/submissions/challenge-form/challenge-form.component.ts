import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FsItemService } from 'src/app/service/fs-item.service';

@Component({
  selector: 'app-challenge-form',
  templateUrl: './challenge-form.component.html',
  styleUrls: ['./challenge-form.component.scss']
})
export class ChallengeFormComponent implements OnInit {

  title = "";
  question = "";
  content = "";
  createdBy = "";
  programmingLanguage="";
  createdTime:Date = new Date;
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle
  programmingLanguages: any = ['python','java','javascript'];

  constructor(public itemservice:FsItemService, private router: Router) { }

  ngOnInit(): void {
  }
  challengeSubmit() {
    this.clearErrorMessage();
    if (this.validateForm(this.title, this.content, this.question, this.createdBy)) {
      this.itemservice.challengeSubmit(this.title, this.question,this.content,this.programmingLanguage,this.createdBy)
        .then(() => {
          this.message = "you have submitted your page to the soapbox"
          this.router.navigate(['/challenge'])
        }).catch(_error => {
          this.error = _error;
          this.router.navigate(['/dashboard/soapbox-form']);
        })
    }
  }

  validateForm(title1:string, description1: string,question1:string, createdBy1:string){
    if(title1.length <= 0){
      this.errorMessage = "Title cannot be blank";
      return false;
    }
    else if (description1.length <= 0){
      this.errorMessage = "Description cannot be blank";
      return false;
    }
    else if (question1.length<= 0)
    {
      this.errorMessage = "Question cannot be blank";
      return false;
    }
    else if(this.createdBy.length<=0){
      this.errorMessage = "Creator cannot be blank";
      return false;
    }
    return true;
  }
  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '' , message:''};
  }

}
