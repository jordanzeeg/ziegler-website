import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss']
})
export class SnippetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() dId: number = 0;

  //data stores all the challenges. 
  data = 
  [
    {
      id: 0,
      title: 'default',
      codeLanguage:'defaultLang',
      description: `default query`,
      code:`print("Hello World")`
    }
  ]
}
