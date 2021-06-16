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
      information: 
      [
        {
        subTitle: 'defaultsubtitle',
        description: `this is a table`,
        code: `print("Hello World")`,
        image: ''
        }
      ]
    },
    {
      id: 1,
      title: 'Section 1',
      subTitle: 'SubSection A',
      codeLanguage:'defaultLang',
      information: 
      [
        {
        subTitle: 'Sub SubSection A',
        description: `this is a table`,
        code: `print("Hello World")`,
        image: 'images/camfel.jpg'
        },
        {
          image: 'images/camfel2.jpg'
        }
      ]
    }
  ]
}
