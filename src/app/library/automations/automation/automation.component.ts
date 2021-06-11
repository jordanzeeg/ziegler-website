import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-automation',
  templateUrl: './automation.component.html',
  styleUrls: ['./automation.component.scss']
})
export class AutomationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() dId: number = 0;
    //data stores all the automations. 
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
