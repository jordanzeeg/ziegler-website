import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallerService {

  // If I make this feature available for people that aren't me to update, 
  //then I need to think about hosting a version of his code myself
  readonly Pretty_URL = 'http://hilite.me/api';
  readonly NotPretty_URL = 'https://jsonplaceholder.typicode.com/todos/1'
  
  prettyCode = "";
  constructor(private http: HttpClient) { }

  //TODO: probably need to make sure this is tracking the error
  getPrettyCode(code:string, language: string) {
    
    language.toLowerCase(); //api only accepts lowercase values for lexer
    let params = new HttpParams().set('code', code).set('lexer',language);
    this.http.get<string>(this.NotPretty_URL, {params}).subscribe(
      val => this.prettyCode = val
    );
    return this.prettyCode;
  }
}
