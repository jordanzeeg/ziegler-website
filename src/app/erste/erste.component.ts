import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erste',
  templateUrl: './erste.component.html',
  styleUrls: ['./erste.component.scss']
})
export class ErsteComponent implements OnInit {

	data = {
		id: 1,
		name: 'Erste'
	};
	about = {
		id:2,
		name: 'About Jordan'
	};
	project = {
		id:3,
		name: 'Projects'
	};
	hobbies = {
		id:4,
		name: 'Hobbies'
	};
  constructor() { }

  ngOnInit(): void {
  }

}
