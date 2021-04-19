import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erste-challenge',
  templateUrl: './erste-challenge.component.html',
  styleUrls: ['./erste-challenge.component.scss']
})
export class ErsteChallengeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  data = {
    title: 'FizzBuzz', 
      codeLanguage: 'python', 
      createdBy: 'Ziggy',
      question: `Given an integer n, return a string array answer (1-indexed) where: 
      answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
      answer[i] == "Fizz" if i is divisible by 3.
      answer[i] == "Buzz" if i is divisible by 5.
      answer[i] == i if non of the above conditions are true.`,
      code: `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">public</span> <span style="color: #f8f8f2">List</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">String</span><span style="color: #f92672">&gt;</span> <span style="color: #a6e22e">fizzBuzz</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">n</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
            <span style="color: #f8f8f2">List</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">String</span><span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">list</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">ArrayList</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">String</span><span style="color: #f92672">&gt;();</span>
            <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">1</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;=</span> <span style="color: #f8f8f2">n</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">if</span><span style="color: #f92672">((</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">%</span><span style="color: #ae81ff">3</span><span style="color: #f92672">==</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span> <span style="color: #f92672">&amp;&amp;(</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">%</span><span style="color: #ae81ff">5</span> <span style="color: #f92672">==</span><span style="color: #ae81ff">0</span><span style="color: #f92672">))</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #f8f8f2">list</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #e6db74">&quot;FizzBuzz&quot;</span><span style="color: #f92672">);</span>
                <span style="color: #f92672">}</span>
                <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">%</span><span style="color: #ae81ff">3</span><span style="color: #f92672">==</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #f8f8f2">list</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #e6db74">&quot;Fizz&quot;</span><span style="color: #f92672">);</span>
                <span style="color: #f92672">}</span>
                <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">%</span><span style="color: #ae81ff">5</span> <span style="color: #f92672">==</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #f8f8f2">list</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #e6db74">&quot;Buzz&quot;</span><span style="color: #f92672">);</span>
                <span style="color: #f92672">}</span>
                <span style="color: #66d9ef">else</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #f8f8f2">String</span> <span style="color: #f8f8f2">temp</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">Integer</span><span style="color: #f92672">.</span><span style="color: #a6e22e">toString</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">);</span>
                    <span style="color: #f8f8f2">list</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">temp</span><span style="color: #f92672">);</span>
                <span style="color: #f92672">}</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">list</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    </pre></div>
    `
  }
   }
