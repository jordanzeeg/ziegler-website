import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tictactoe-square',
  templateUrl: './tictactoe-square.component.html',
  styleUrls: ['./tictactoe-square.component.scss']
})
export class TictactoeSquareComponent  {

  @Input() value: 'X' | 'O' | undefined;
}
