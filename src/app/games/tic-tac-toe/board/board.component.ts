import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[] = [];     //represents the moves on the board. 
  xIsNext: boolean = true;
  winner: string = "";
  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }
  newGame() {
    this.squares = Array(9).fill(null);   //set them all to null, and the size of the list
    this.winner = ""; //instantiate winner to be empty
    this.xIsNext = true; //instantiate x to be the next player
    }
  get player() {
    return this.xIsNext ? 'X' : 'O'; //if x is next, return 'X', else return 'O'
  }
  makeMove(idx: number) {    
    if(!this.squares[idx]){   //checks to make sure square is null. if not null, doesn't do anything. 
      this.squares.splice(idx, 1, this.player); // removes element at index, calls player() 
                                                //  and stores return into the square on the array
      this.xIsNext = !this.xIsNext; //switch true to false and false to true. changes player in 2 player game
    }
  }
  calculateWinner() {
    const lines = [ //hardcode all the win conditions
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i =0; i < lines.length; i++) //for each win condition, check if 3 match
    {
      const [a, b, c] = lines[i];
      if(this.squares[a] &&
        this.squares[a] === this.squares[b] && 
        this.squares[a] === this.squares[c]
        ){
          return this.squares[a]; //if winner, return which character resulted in a win
        }
    }
    return null;
  }
}
