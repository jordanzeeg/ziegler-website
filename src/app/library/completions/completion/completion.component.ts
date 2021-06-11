import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.scss']
})
export class CompletionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() dId: number = 0;
  data = 
  [
    {
      id: 0,
      title: 'default',
      subTitle: 'default',
      codeLanguage:'defaultLang',
      information: [{
        subTitle: 'defaultsubtitle',
        description: `this is a table`,
        code: `print("Hello World")`
      }]
    }
  ]
}
