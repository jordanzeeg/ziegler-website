import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-erste-challenge',
  templateUrl: './erste-challenge.component.html',
  styleUrls: ['./erste-challenge.component.scss']
})
export class ErsteChallengeComponent implements OnInit {

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
      question: `default query`,
      code:`print("Hello World")`
    },
    {
      id: 1,
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
    },
    {
      id: 2,
      title: 'Detect Capital',
      codeLanguage:'Java',
      createdBy: 'Ziggy',
      question: `Given a word, you need to judge whether the usage of capitals in it is right or not.
      We define the usage of capitals in a word to be right when one of the following cases holds:
      All letters in this word are capitals, like "USA".
      All letters in this word are not capitals, like "leetcode".
      Only the first letter in this word is capital, like "Google".
      Otherwise, we define that this word doesn't use capitals in a right way.`,
      code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">boolean</span> <span style="color: #a6e22e">detectCapitalUse</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">String</span> <span style="color: #f8f8f2">word</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">boolean</span> <span style="color: #f8f8f2">value1</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">true</span><span style="color: #f92672">;</span>
            <span style="color: #66d9ef">boolean</span> <span style="color: #f8f8f2">temp</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">false</span><span style="color: #f92672">;</span>
            <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">word</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">()</span> <span style="color: #f92672">==</span> <span style="color: #ae81ff">1</span><span style="color: #f92672">)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">return</span> <span style="color: #66d9ef">true</span><span style="color: #f92672">;</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">word</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">()</span> <span style="color: #f92672">==</span> <span style="color: #ae81ff">2</span><span style="color: #f92672">)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">boolean</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">Character</span><span style="color: #f92672">.</span><span style="color: #a6e22e">isUpperCase</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">word</span><span style="color: #f92672">.</span><span style="color: #a6e22e">charAt</span><span style="color: #f92672">(</span><span style="color: #ae81ff">0</span><span style="color: #f92672">));</span>
                <span style="color: #66d9ef">boolean</span> <span style="color: #f8f8f2">b</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">Character</span><span style="color: #f92672">.</span><span style="color: #a6e22e">isUpperCase</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">word</span><span style="color: #f92672">.</span><span style="color: #a6e22e">charAt</span><span style="color: #f92672">(</span><span style="color: #ae81ff">1</span><span style="color: #f92672">));</span>
                
                <span style="color: #66d9ef">if</span><span style="color: #f92672">((</span><span style="color: #f8f8f2">a</span> <span style="color: #f92672">==</span> <span style="color: #66d9ef">true</span><span style="color: #f92672">)</span> <span style="color: #f92672">||</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">a</span> <span style="color: #f92672">==</span> <span style="color: #f8f8f2">b</span><span style="color: #f92672">))</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #66d9ef">return</span> <span style="color: #66d9ef">true</span><span style="color: #f92672">;</span>
                <span style="color: #f92672">}</span>
                <span style="color: #66d9ef">else</span> <span style="color: #66d9ef">return</span> <span style="color: #66d9ef">false</span><span style="color: #f92672">;</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">else</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">2</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">word</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">();</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #66d9ef">boolean</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">Character</span><span style="color: #f92672">.</span><span style="color: #a6e22e">isUpperCase</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">word</span><span style="color: #f92672">.</span><span style="color: #a6e22e">charAt</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f92672">));</span>
                    <span style="color: #66d9ef">boolean</span> <span style="color: #f8f8f2">b</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">Character</span><span style="color: #f92672">.</span><span style="color: #a6e22e">isUpperCase</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">word</span><span style="color: #f92672">.</span><span style="color: #a6e22e">charAt</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">));</span>
                    <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">a</span> <span style="color: #f92672">!=</span> <span style="color: #f8f8f2">b</span><span style="color: #f92672">)</span>
                    <span style="color: #f92672">{</span>
                        <span style="color: #f8f8f2">value1</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">false</span><span style="color: #f92672">;</span>
                    <span style="color: #f92672">}</span>
                <span style="color: #f92672">}</span>
                <span style="color: #66d9ef">if</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">value1</span> <span style="color: #f92672">==</span> <span style="color: #66d9ef">true</span><span style="color: #f92672">)</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #66d9ef">boolean</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">Character</span><span style="color: #f92672">.</span><span style="color: #a6e22e">isUpperCase</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">word</span><span style="color: #f92672">.</span><span style="color: #a6e22e">charAt</span><span style="color: #f92672">(</span><span style="color: #ae81ff">0</span><span style="color: #f92672">));</span>
                    <span style="color: #66d9ef">boolean</span> <span style="color: #f8f8f2">b</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">Character</span><span style="color: #f92672">.</span><span style="color: #a6e22e">isUpperCase</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">word</span><span style="color: #f92672">.</span><span style="color: #a6e22e">charAt</span><span style="color: #f92672">(</span><span style="color: #ae81ff">1</span><span style="color: #f92672">));</span>
                    <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">a</span> <span style="color: #f92672">==</span> <span style="color: #66d9ef">false</span> <span style="color: #f92672">&amp;&amp;</span> <span style="color: #f8f8f2">b</span> <span style="color: #f92672">!=</span> <span style="color: #66d9ef">false</span> <span style="color: #f92672">)</span>
                    <span style="color: #f92672">{</span>
                        <span style="color: #66d9ef">return</span> <span style="color: #66d9ef">false</span><span style="color: #f92672">;</span> 
                    <span style="color: #f92672">}</span>
                <span style="color: #f92672">}</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">value1</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    </pre></div>
    `
    },
    {
      id: 3,
      title: 'Kids With the Greatest # of Candies',
      codeLanguage:'Java',
      question: `Given the array candies and the integer extraCandies, 
      where candies[i] represents the number of candies that the ith kid has.
      For each kid check if there is a way to distribute extraCandies among the kids
      such that he or she can have the greatest number of candies among them. 
      Notice that multiple kids can have the greatest number of candies.`,
      code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">public</span> <span style="color: #f8f8f2">List</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">Boolean</span><span style="color: #f92672">&gt;</span> <span style="color: #a6e22e">kidsWithCandies</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">candies</span><span style="color: #f92672">,</span> <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">extraCandies</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">max</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span>
            <span style="color: #f8f8f2">List</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">Boolean</span><span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">result</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">ArrayList</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">Boolean</span><span style="color: #f92672">&gt;();</span>
            <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">candies</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #75715e">//find max</span>
                <span style="color: #66d9ef">if</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">candies</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">]</span> <span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">max</span><span style="color: #f92672">)</span> 
                <span style="color: #f8f8f2">max</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">candies</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">];</span> 
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">candies</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">candies</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">]+</span><span style="color: #f8f8f2">extraCandies</span> <span style="color: #f92672">&gt;=</span> <span style="color: #f8f8f2">max</span><span style="color: #f92672">)</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #f8f8f2">result</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #66d9ef">true</span><span style="color: #f92672">);</span>
                <span style="color: #f92672">}</span>
                <span style="color: #66d9ef">else</span> 
                <span style="color: #f92672">{</span>
                    <span style="color: #f8f8f2">result</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #66d9ef">false</span><span style="color: #f92672">);</span>
                <span style="color: #f92672">}</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">result</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
        
    <span style="color: #f92672">}</span>
    </pre></div>
    `
    },
    {
      id: 4,
      title: 'Shuffle the Array',
      codeLanguage:'Java',
      question: `Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
      Return the array in the form [x1,y1,x2,y2,...,xn,yn].`,
      code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #a6e22e">shuffle</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">,</span> <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">n</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">myArray1</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">Arrays</span><span style="color: #f92672">.</span><span style="color: #a6e22e">copyOfRange</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">nums</span><span style="color: #f92672">,</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">/</span><span style="color: #ae81ff">2</span><span style="color: #f92672">);</span>
            <span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">myArray2</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">Arrays</span><span style="color: #f92672">.</span><span style="color: #a6e22e">copyOfRange</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">nums</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">/</span><span style="color: #ae81ff">2</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">);</span>
            <span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">result</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #66d9ef">int</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">nums</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">];</span>
            <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">n</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #f8f8f2">result</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">*</span><span style="color: #ae81ff">2</span><span style="color: #f92672">]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">myArray1</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">];</span>
                <span style="color: #f8f8f2">result</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">*</span><span style="color: #ae81ff">2</span><span style="color: #f92672">+</span><span style="color: #ae81ff">1</span><span style="color: #f92672">]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">myArray2</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">];</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">result</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    </pre></div>
    `
    },
    {
      id: 5,
      title: 'Number of Good Pairs',
      codeLanguage:'Java',
      question: `Given an array of integers nums.
      A pair (i,j) is called good if nums[i] == nums[j] and i < j.
      Return the number of good pairs.`,
      code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">int</span> <span style="color: #a6e22e">numIdenticalPairs</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">result</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span>
            <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">nums</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f92672">);</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">1</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">j</span><span style="color: #f92672">++)</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">nums</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">]</span> <span style="color: #f92672">==</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">j</span><span style="color: #f92672">])</span>
                    <span style="color: #f92672">{</span>
                        <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">j</span><span style="color: #f92672">)</span>
                        <span style="color: #f92672">{</span>
                            <span style="color: #f8f8f2">result</span><span style="color: #f92672">++;</span>
                        <span style="color: #f92672">}</span>
                    <span style="color: #f92672">}</span>
                <span style="color: #f92672">}</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">result</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    </pre></div>
    `
    },
    {
      id: 6,
      title: 'Running Sum of 1d Array',
      codeLanguage:'Java',
      question: `Given an array nums. We define a running sum of an array as 
      runningSum[i] = sum(nums[0]…nums[i]).
      Return the running sum of nums.`,
      code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #a6e22e">runningSum</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">result</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #66d9ef">int</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">nums</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">];</span>
            <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">val</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span>
            <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
            <span style="color: #f92672">{</span>            
                    <span style="color: #f8f8f2">result</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">]</span> <span style="color: #f92672">=</span><span style="color: #f8f8f2">val</span>  <span style="color: #f92672">+</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">];</span>
                    <span style="color: #f8f8f2">val</span><span style="color: #f92672">+=</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">];</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">result</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    </pre></div>
    `
    },
    {
      id: 7,
      title: 'Group Given Group Size They Belong To',
      codeLanguage:'Java',
      question: `There are n people that are split into some unknown number of groups. 
      Each person is labeled with a unique ID from 0 to n - 1.
      You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in. 
      For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.      
      Return a list of groups such that each person i is in a group of size groupSizes[i].
      Each person should appear in exactly one group, and every person must be in a group. 
      If there are multiple answers, return any of them.`,
      code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">public</span> <span style="color: #f8f8f2">List</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">List</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">Integer</span><span style="color: #f92672">&gt;&gt;</span> <span style="color: #a6e22e">groupThePeople</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">groupSizes</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
                
                <span style="color: #f8f8f2">List</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">List</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">Integer</span><span style="color: #f92672">&gt;&gt;</span> <span style="color: #f8f8f2">listOfLists</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">ArrayList</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">List</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">Integer</span><span style="color: #f92672">&gt;&gt;();</span>
                <span style="color: #f8f8f2">ArrayList</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">Integer</span><span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">listOfSizes</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">ArrayList</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">Integer</span><span style="color: #f92672">&gt;();</span>
                <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span>  <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">groupSizes</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++</span> <span style="color: #f92672">)</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">personSize</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">groupSizes</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">];</span>
                    <span style="color: #75715e">//i is person id</span>
                  <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">listOfLists</span><span style="color: #f92672">.</span><span style="color: #a6e22e">isEmpty</span><span style="color: #f92672">())</span> <span style="color: #75715e">//if there&#39;s no groups at all in the list of lists</span>
                  <span style="color: #f92672">{</span>
                      <span style="color: #f8f8f2">ArrayList</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">Integer</span><span style="color: #f92672">&gt;</span><span style="color: #f8f8f2">tempList</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">ArrayList</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">Integer</span><span style="color: #f92672">&gt;();</span>
                      <span style="color: #f8f8f2">tempList</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">);</span> <span style="color: #75715e">//add the person to a new list</span>
                      <span style="color: #f8f8f2">listOfSizes</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">personSize</span><span style="color: #f92672">);</span> <span style="color: #75715e">//record size of new list</span>
                      <span style="color: #f8f8f2">listOfLists</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempList</span><span style="color: #f92672">);</span> <span style="color: #75715e">//add new list to the empty list</span>
                  <span style="color: #f92672">}</span>
                  <span style="color: #66d9ef">else</span> <span style="color: #75715e">//if not empty</span>
                  <span style="color: #f92672">{</span>
                    <span style="color: #66d9ef">boolean</span> <span style="color: #f8f8f2">added</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">false</span><span style="color: #f92672">;</span>
                      <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">listOfLists</span><span style="color: #f92672">.</span><span style="color: #a6e22e">size</span><span style="color: #f92672">();</span> <span style="color: #f8f8f2">j</span><span style="color: #f92672">++)</span>
                      <span style="color: #f92672">{</span>
                          <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">listOfSizes</span><span style="color: #f92672">.</span><span style="color: #a6e22e">get</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">j</span><span style="color: #f92672">)</span> <span style="color: #f92672">==</span> <span style="color: #f8f8f2">personSize</span><span style="color: #f92672">)</span> <span style="color: #75715e">//check if list is proper list size</span>
                          <span style="color: #f92672">{</span>
                              <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">listOfLists</span><span style="color: #f92672">.</span><span style="color: #a6e22e">get</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">j</span><span style="color: #f92672">).</span><span style="color: #a6e22e">size</span><span style="color: #f92672">()</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">listOfSizes</span><span style="color: #f92672">.</span><span style="color: #a6e22e">get</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">j</span><span style="color: #f92672">))</span> <span style="color: #75715e">//check if list has room</span>
                              <span style="color: #f92672">{</span>
                                  <span style="color: #f8f8f2">listOfLists</span><span style="color: #f92672">.</span><span style="color: #a6e22e">get</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">j</span><span style="color: #f92672">).</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">);</span> <span style="color: #75715e">//add person to group in list</span>
                                  <span style="color: #f8f8f2">added</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">true</span><span style="color: #f92672">;</span>
                              <span style="color: #f92672">}</span>
                          <span style="color: #f92672">}</span>  
                      <span style="color: #f92672">}</span>
                      <span style="color: #66d9ef">if</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">added</span> <span style="color: #f92672">==</span> <span style="color: #66d9ef">false</span><span style="color: #f92672">)</span>
                      <span style="color: #f92672">{</span>
                        <span style="color: #f8f8f2">ArrayList</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">Integer</span><span style="color: #f92672">&gt;</span><span style="color: #f8f8f2">tempList</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">ArrayList</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">Integer</span><span style="color: #f92672">&gt;();</span>
                        <span style="color: #f8f8f2">tempList</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">);</span>
                        <span style="color: #f8f8f2">listOfLists</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempList</span><span style="color: #f92672">);</span>
                                <span style="color: #f8f8f2">listOfSizes</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">personSize</span><span style="color: #f92672">);</span>
                      <span style="color: #f92672">}</span>
                  <span style="color: #f92672">}</span>
                <span style="color: #75715e">//look through list of lists for same groupsize</span>
                <span style="color: #75715e">//check that list of same groupsize isnt full</span>
                <span style="color: #75715e">//if no groupsize found, create new group with right groupsize</span>
                <span style="color: #f92672">}</span>
                <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">listOfLists</span><span style="color: #f92672">;</span>
    <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    </pre></div>
    `
    },
    {
      id: 8,
      title: 'Find Numbers With Even Number of Digits',
      codeLanguage:'Java',
      question: `Given an array nums of integers, 
      return how many of them contain an even number of digits.`,
      code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">int</span> <span style="color: #a6e22e">findNumbers</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">total</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span>
            <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">count</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span>
                <span style="color: #66d9ef">while</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">nums</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">]</span> <span style="color: #f92672">!=</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #f8f8f2">nums</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">]/=</span><span style="color: #ae81ff">10</span><span style="color: #f92672">;</span>
                    <span style="color: #f8f8f2">count</span><span style="color: #f92672">++;</span>
                <span style="color: #f92672">}</span>
                <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">count</span><span style="color: #f92672">%</span><span style="color: #ae81ff">2</span><span style="color: #f92672">)</span> <span style="color: #f92672">==</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #f8f8f2">total</span><span style="color: #f92672">++;</span>
                <span style="color: #f92672">}</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">total</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    </pre></div>
    `
    },
    {
      id: 9,
      title: 'Subtract Product and Sum of Integer',
      codeLanguage:'Java',
      question: "Given an integer number n, return the difference between the product of its digits and the sum of its digits.",
      code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">int</span> <span style="color: #a6e22e">subtractProductAndSum</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">n</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">prod</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">1</span><span style="color: #f92672">;</span>
            <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">sums</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span>
            <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">digit</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span>
            <span style="color: #66d9ef">while</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">n</span><span style="color: #f92672">!=</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #f8f8f2">digit</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">n</span><span style="color: #f92672">%</span><span style="color: #ae81ff">10</span><span style="color: #f92672">;</span>
                <span style="color: #f8f8f2">prod</span><span style="color: #f92672">*=</span> <span style="color: #f8f8f2">digit</span><span style="color: #f92672">;</span>
                <span style="color: #f8f8f2">sums</span><span style="color: #f92672">+=</span> <span style="color: #f8f8f2">digit</span><span style="color: #f92672">;</span>
                <span style="color: #f8f8f2">n</span> <span style="color: #f92672">/=</span><span style="color: #ae81ff">10</span><span style="color: #f92672">;</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">return</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">prod</span> <span style="color: #f92672">-</span> <span style="color: #f8f8f2">sums</span><span style="color: #f92672">);</span>
        <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    </pre></div>
    `
    },
    {
      id: 10,
      title: '# of Numbers Smaller Than Current',
      codeLanguage:'Java',
      question: `Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
      That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
      Return the answer in an array.`,
      code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #a6e22e">smallerNumbersThanCurrent</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">result</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #66d9ef">int</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">nums</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">];</span>
            <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">j</span><span style="color: #f92672">++)</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">j</span> <span style="color: #f92672">!=</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">)</span>
                    <span style="color: #f92672">{</span>
                        <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">nums</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">j</span><span style="color: #f92672">]</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">])</span>
                        <span style="color: #f92672">{</span>
                            <span style="color: #f8f8f2">result</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">]++;</span>
                        <span style="color: #f92672">}</span>
                    <span style="color: #f92672">}</span>
                <span style="color: #f92672">}</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">result</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    </pre></div>
    `
    },
    {
      id: 11,
      title: 'Jewels and Stones',
      codeLanguage:'Java',
      question: `You're given strings jewels representing the types of stones that are jewels, 
      and stones representing the stones you have. 
      Each character in stones is a type of stone you have. 
      You want to know how many of the stones you have are also jewels.
      Letters are case sensitive, so "a" is considered a different type of stone from "A".`,
      code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">int</span> <span style="color: #a6e22e">numJewelsInStones</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">String</span> <span style="color: #f8f8f2">J</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">String</span> <span style="color: #f8f8f2">S</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">result</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span>
            <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">char</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">J</span><span style="color: #f92672">.</span><span style="color: #a6e22e">toCharArray</span><span style="color: #f92672">())</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">char</span> <span style="color: #f8f8f2">s</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">S</span><span style="color: #f92672">.</span><span style="color: #a6e22e">toCharArray</span><span style="color: #f92672">())</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">s</span><span style="color: #f92672">==</span><span style="color: #f8f8f2">j</span><span style="color: #f92672">)</span>
                    <span style="color: #f92672">{</span>
                        <span style="color: #f8f8f2">result</span><span style="color: #f92672">++;</span>
                    <span style="color: #f92672">}</span>
                <span style="color: #f92672">}</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">result</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    </pre></div>
    `
    },
    {
      id: 12,
      title: 'XOR Operation in Array',
      codeLanguage:'Java',
      question: `Given an integer n and an integer start.
      Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.      
      Return the bitwise XOR of all elements of nums.`,
      code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">int</span> <span style="color: #a6e22e">xorOperation</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">n</span><span style="color: #f92672">,</span> <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">start</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">nums</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #66d9ef">int</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">n</span><span style="color: #f92672">];</span>
            <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">bitwise</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span>
            <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">n</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #f8f8f2">nums</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">start</span> <span style="color: #f92672">+</span> <span style="color: #ae81ff">2</span><span style="color: #f92672">*</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">;</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">n</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #f8f8f2">bitwise</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">bitwise</span> <span style="color: #f92672">^</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">];</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">bitwise</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    </pre></div>
    `
    },
    {
      id: 13,
      title: 'Corresponding Node of Binary Tree in a Clone Tree',
      codeLanguage:'Java',
      question: `Given two binary trees original and cloned and given a reference to a node target in the original tree.
      The cloned tree is a copy of the original tree.
      Return a reference to the same node in the cloned tree.
      Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.
      Follow up: Solve the problem if repeated values on the tree are allowed.`,
      code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #75715e">/**</span>
      <span style="color: #75715e"> * Definition for a binary tree node.</span>
      <span style="color: #75715e"> * public class TreeNode {</span>
      <span style="color: #75715e"> *     int val;</span>
      <span style="color: #75715e"> *     TreeNode left;</span>
      <span style="color: #75715e"> *     TreeNode right;</span>
      <span style="color: #75715e"> *     TreeNode(int x) { val = x; }</span>
      <span style="color: #75715e"> * }</span>
      <span style="color: #75715e"> */</span>
      <span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
      <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">final</span> <span style="color: #f8f8f2">TreeNode</span> <span style="color: #a6e22e">getTargetCopy</span><span style="color: #f92672">(</span><span style="color: #66d9ef">final</span> <span style="color: #f8f8f2">TreeNode</span> <span style="color: #f8f8f2">original</span><span style="color: #f92672">,</span> <span style="color: #66d9ef">final</span> <span style="color: #f8f8f2">TreeNode</span> <span style="color: #f8f8f2">cloned</span><span style="color: #f92672">,</span> <span style="color: #66d9ef">final</span> <span style="color: #f8f8f2">TreeNode</span> <span style="color: #f8f8f2">target</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
              <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">original</span> <span style="color: #f92672">==</span> <span style="color: #66d9ef">null</span><span style="color: #f92672">)</span> <span style="color: #66d9ef">return</span> <span style="color: #66d9ef">null</span><span style="color: #f92672">;</span>
              
              <span style="color: #f8f8f2">TreeNode</span> <span style="color: #f8f8f2">left</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">getTargetCopy</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">original</span><span style="color: #f92672">.</span><span style="color: #a6e22e">left</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">cloned</span><span style="color: #f92672">.</span><span style="color: #a6e22e">left</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">target</span><span style="color: #f92672">);</span>
              <span style="color: #f8f8f2">TreeNode</span> <span style="color: #f8f8f2">right</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">getTargetCopy</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">original</span><span style="color: #f92672">.</span><span style="color: #a6e22e">right</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">cloned</span><span style="color: #f92672">.</span><span style="color: #a6e22e">right</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">target</span><span style="color: #f92672">);</span>   
              <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">original</span> <span style="color: #f92672">==</span> <span style="color: #f8f8f2">target</span><span style="color: #f92672">)</span>
                  <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">cloned</span><span style="color: #f92672">;</span>
              
              <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">left</span> <span style="color: #f92672">!=</span> <span style="color: #66d9ef">null</span> <span style="color: #f92672">?</span> <span style="color: #f8f8f2">left</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">right</span><span style="color: #f92672">;</span>
          <span style="color: #f92672">}</span>              
      <span style="color: #f92672">}</span>
      </pre></div>
      `
    },
    {
      id: 14,
      title: 'Number of steps to get to zero',
      codeLanguage:'Java',
      question: `Given a non-negative integer num, return the number of steps to reduce it to zero. 
      If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.`,
      code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">count</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">1</span><span style="color: #f92672">;</span>
        <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">int</span> <span style="color: #a6e22e">numberOfSteps</span> <span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">num</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">num</span><span style="color: #f92672">==</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">return</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">num</span><span style="color: #f92672">==</span><span style="color: #ae81ff">1</span><span style="color: #f92672">)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">count</span><span style="color: #f92672">;</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">else</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">num</span> <span style="color: #f92672">%</span><span style="color: #ae81ff">2</span> <span style="color: #f92672">==</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #f8f8f2">num</span><span style="color: #f92672">/=</span><span style="color: #ae81ff">2</span><span style="color: #f92672">;</span>
                    <span style="color: #f8f8f2">count</span><span style="color: #f92672">++;</span>
                <span style="color: #f92672">}</span>
                <span style="color: #66d9ef">else</span> 
                <span style="color: #f92672">{</span>
                    <span style="color: #f8f8f2">num</span><span style="color: #f92672">-=</span><span style="color: #ae81ff">1</span><span style="color: #f92672">;</span>
                    <span style="color: #f8f8f2">count</span><span style="color: #f92672">++;</span>
                <span style="color: #f92672">}</span>
    
                    <span style="color: #66d9ef">return</span> <span style="color: #a6e22e">numberOfSteps</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">num</span><span style="color: #f92672">);</span>
            <span style="color: #f92672">}</span>
        <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    </pre></div>
    `
    },
    {
      id: 15,
      title: 'default',
      codeLanguage:'Java',
      question: `default query`,
      code:`print("Hello World")`
    },
    {
      id: 0,
      title: 'default',
      codeLanguage:'Java',
      question: `default query`,
      code:`print("Hello World")`
    },
    {
      id: 0,
      title: 'default',
      codeLanguage:'Java',
      question: `default query`,
      code:`print("Hello World")`
    },
    {
      id: 0,
      title: 'default',
      codeLanguage:'Java',
      question: `default query`,
      code:`print("Hello World")`
    },
    {
      id: 0,
      title: 'default',
      codeLanguage:'Java',
      question: `default query`,
      code:`print("Hello World")`
    },
    {
      id: 0,
      title: 'default',
      codeLanguage:'Java',
      question: `default query`,
      code:`print("Hello World")`
    }

  ]
   }
