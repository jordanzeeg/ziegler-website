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
      title: "Camfel's Website",
      subTitle: `This website was designed for Camfel Productions. A company that does motivational programs for high schools, middle schools, and elementary schools. 
      this website was designed to accurately and effectively show what the company does and how it does it. Every year Camfel has new programs that are developed and produced.
      This website is updated frequently to showcase this ever changing inventory of programs. In light of that fact it was important to me 
      and to Camfel that there also be a mechanism for the updates to be done by a layperson with no knowledge of web development. The website was developed using
      ruby on rails. It was created using the cloud9 ide, saved on github, and hosted on digital Ocean. `,
      information: 
      [
        {
          subTitle: 'Home Page',
          description: `The home page was designed to direct people to the shows most relevant. The primary goal of the home page was to motivate moving to the next one.
          It accomplished this by giving a brief summary of the goal of the company, followed with an attempt to provide the most relevant information. 
          This section was constructed with banners and a background photo that showcases what camfel feels is important. The color scheme draws the eye to what is truly important.`,
          image: './assets/camfel.jpg'
        },
        {
          subTitle: 'Show Overviews',
          description: `This section was a way to showcase the shows and provide a short summary to entice the viewer to learn more. 
          Providing the summary and a banner image provides an idea of what to expect. The callback of using the same image here 
          as for the selection on the home page shows the connection of where you came from to provide clarity. `,
          image: './assets/camfel2.jpg'
        }
      ]
    }
  ]
}
