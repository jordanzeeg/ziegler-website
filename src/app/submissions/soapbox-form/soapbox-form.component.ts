import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FsItemService } from '../../service/fs-item.service';

@Component({
  selector: 'app-soapbox-form',
  templateUrl: './soapbox-form.component.html',
  styleUrls: ['./soapbox-form.component.scss']
})
export class SoapboxFormComponent implements OnInit {

  title = "";
  content = "";
  createdBy = "";
  createdTime:Date = new Date;
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(private itemservice: FsItemService, private router:Router) { }


  ngOnInit(): void {
  }
  soapboxSubmit() {
    this.clearErrorMessage();
    if (this.validateForm(this.title, this.content)) {
      this.itemservice.soapboxSubmit(this.title, this.content,this.createdBy)
        .then(() => {
          this.message = "you have submitted your page to the soapbox"
          //this.router.navigate(['/userinfo'])
        }).catch(_error => {
          this.error = _error;
          this.router.navigate(['/dashboard/soapbox-form']);
        })
    }
  }

  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '' , message:''};
  }
  validateForm(title1:string, description1: string){
    if(title1.length <= 0){
      this.errorMessage = "Title cannot be blank";
      return false;
    }
    else if (description1.length <= 0){
      this.errorMessage = "Description cannot be blank";
      return false;
    }
    return true;
  }

}
