import { Component, OnInit } from '@angular/core';
import { Challenge } from '../models/challenge';
import { FsItemService } from '../service/fs-item.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {


  currentChallenge = 'contentTable';
  challengeList = [
    {
      id: 0, name: 'Challenge databinding', url: "/library/challenges"
    },
    {
      id: 1, name: 'next challenge', url: "/info"
    },
    {
      id: 2, name: 'do i really add manually?', url: ""
    }
  ]
  testdata = "challenge-table";
  //this commented code does not work. Included because you will eventually think to try this again
  // sanitizer works perfectly, but hilite.me is too hardcoded to be super helpful
  //testerbinding = '<span style="color: #008800; font-weight: bold">def</span> <span style="color: #0066BB; font-weight: bold">main</span>():	foo <span style="color: #333333">=</span> input_int(<span style="background-color: #fff0f0">&quot;please enter an integer &quot;</span>)bar <span style="color: #333333">=</span> quiz_function(foo)<span style="color: #008800; font-weight: bold">print</span>(<span style="background-color: #fff0f0">&quot;would you like the solution printed in console, or written to a file?&quot;</span>)test <span style="color: #333333">=</span> input_int(<span style="background-color: #fff0f0">&quot;Enter 1 to print in console </span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">Enter 2 to write to a file </span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>)<span style="color: #008800; font-weight: bold">if</span> (test <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">1</span>):<span style="color: #008800; font-weight: bold">print</span>(bar)<span style="color: #008800; font-weight: bold">elif</span> (test <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">2</span>):<span style="color: #888888">#write it to a file </span><span style="color: #008800; font-weight: bold">with</span> <span style="color: #007020">open</span>(<span style="background-color: #fff0f0">&quot;solution.txt&quot;</span>, <span style="background-color: #fff0f0">&quot;w&quot;</span>) <span style="color: #008800; font-weight: bold">as</span> <span style="color: #007020">file</span>:<span style="color: #007020">file</span><span style="color: #333333">.</span>write(<span style="color: #007020">str</span>(bar))<span style="color: #008800; font-weight: bold">else</span>:<span style="color: #008800; font-weight: bold">print</span>(<span style="background-color: #fff0f0">&quot;fine don&#39;t listen, enjoy your punishment&quot;</span>)time<span style="color: #333333">.</span>sleep(<span style="color: #0000DD; font-weight: bold">3</span>)<span style="color: #008800; font-weight: bold">for</span> i <span style="color: #000000; font-weight: bold">in</span> <span style="color: #007020">range</span>(<span style="color: #0000DD; font-weight: bold">1000000000</span>):<span style="color: #008800; font-weight: bold">print</span>(bar)<span style="color: #008800; font-weight: bold">if</span> __name__ <span style="color: #333333">==</span> <span style="background-color: #fff0f0">&quot;__main__&quot;</span>:main()</pre></div>'
//testbinding = this.sanitizer.bypassSecurityTrustHtml(this.testerbinding);

  constructor() {
    
    }

  ngOnInit(): void {
   //initializations and fetching things on load

 }
}
