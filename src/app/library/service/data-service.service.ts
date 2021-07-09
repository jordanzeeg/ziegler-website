import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getChallenges() {
    return this.challenges;
  }
  
  getSnippets() {
    return this.snippets;
  }

  getAutomations() {
    return this.automations;
  }
  getCompletions() {
    return this.completions;
  }

  challenges = [
    
    {
      id:0,
      title: 'Table'
    },
    {
      id: 1,
      title: 'FizzBuzz', 
        codeLanguage: 'python', 
        createdBy: 'Ziggy',
        question: 
`Given an integer n, return a string array answer (1-indexed) where: 
answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i if non of the above conditions are true.`,
        code: 
`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
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
      question: 
      `Given a word, you need to judge whether the usage of capitals in it is right or not.
      We define the usage of capitals in a word to be right when one of the following cases holds:
      All letters in this word are capitals, like "USA".
      All letters in this word are not capitals, like "leetcode".
      Only the first letter in this word is capital, like "Google".
      Otherwise, we define that this word doesn't use capitals in a right way.`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
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
      createdBy: 'Ziggy',
      question: `Given the array candies and the integer extraCandies, 
      where candies[i] represents the number of candies that the ith kid has.
      For each kid check if there is a way to distribute extraCandies among the kids
      such that he or she can have the greatest number of candies among them. 
      Notice that multiple kids can have the greatest number of candies.`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
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
      createdBy: 'Ziggy',
      question: `Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
      Return the array in the form [x1,y1,x2,y2,...,xn,yn].`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
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
      createdBy: 'Ziggy',
      question: `Given an array of integers nums.
      A pair (i,j) is called good if nums[i] == nums[j] and i < j.
      Return the number of good pairs.`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
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
      createdBy: 'Ziggy',
      question: `Given an array nums. We define a running sum of an array as 
      runningSum[i] = sum(nums[0]…nums[i]).
      Return the running sum of nums.`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
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
      createdBy: 'Ziggy',
      question: `There are n people that are split into some unknown number of groups. 
      Each person is labeled with a unique ID from 0 to n - 1.
      You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in. 
      For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.      
      Return a list of groups such that each person i is in a group of size groupSizes[i].
      Each person should appear in exactly one group, and every person must be in a group. 
      If there are multiple answers, return any of them.`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
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
      createdBy: 'Ziggy',
      question: `Given an array nums of integers, 
      return how many of them contain an even number of digits.`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
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
      createdBy: 'Ziggy',
      question: "Given an integer number n, return the difference between the product of its digits and the sum of its digits.",
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
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
      createdBy: 'Ziggy',
      question: `Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
      That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
      Return the answer in an array.`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
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
      createdBy: 'Ziggy',
      question: `You're given strings jewels representing the types of stones that are jewels, 
      and stones representing the stones you have. 
      Each character in stones is a type of stone you have. 
      You want to know how many of the stones you have are also jewels.
      Letters are case sensitive, so "a" is considered a different type of stone from "A".`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
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
      createdBy: 'Ziggy',
      question: `Given an integer n and an integer start.
      Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.      
      Return the bitwise XOR of all elements of nums.`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
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
      createdBy: 'Ziggy',
      question: `Given two binary trees original and cloned and given a reference to a node target in the original tree.
      The cloned tree is a copy of the original tree.
      Return a reference to the same node in the cloned tree.
      Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.
      Follow up: Solve the problem if repeated values on the tree are allowed.`,
      code:
`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #75715e">/**</span>
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
      createdBy: 'Ziggy',
      question: `Given a non-negative integer num, return the number of steps to reduce it to zero. 
      If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
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
      title: 'Count Items Matching a Rule',
      codeLanguage:'Java',
      createdBy: 'Ziggy',
      question: `You are given an array items, where each 
      items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. 
      You are also given a rule represented by two strings, ruleKey and ruleValue.`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
    <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">int</span> <span style="color: #a6e22e">countMatches</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">List</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">List</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">String</span><span style="color: #f92672">&gt;&gt;</span> <span style="color: #f8f8f2">items</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">String</span> <span style="color: #f8f8f2">ruleKey</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">String</span> <span style="color: #f8f8f2">ruleValue</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">count</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span>
        <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">List</span> <span style="color: #f8f8f2">item:</span> <span style="color: #f8f8f2">items</span><span style="color: #f92672">)</span>
        <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">ruleKey</span><span style="color: #f92672">.</span><span style="color: #a6e22e">equals</span><span style="color: #f92672">(</span><span style="color: #e6db74">&quot;type&quot;</span><span style="color: #f92672">))</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">item</span><span style="color: #f92672">.</span><span style="color: #a6e22e">get</span><span style="color: #f92672">(</span><span style="color: #ae81ff">0</span><span style="color: #f92672">).</span><span style="color: #a6e22e">equals</span><span style="color: #f92672">(</span> <span style="color: #f8f8f2">ruleValue</span><span style="color: #f92672">))</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #f8f8f2">count</span><span style="color: #f92672">++;</span>
                <span style="color: #f92672">}</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">ruleKey</span><span style="color: #f92672">.</span><span style="color: #a6e22e">equals</span><span style="color: #f92672">(</span><span style="color: #e6db74">&quot;color&quot;</span><span style="color: #f92672">))</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">item</span><span style="color: #f92672">.</span><span style="color: #a6e22e">get</span><span style="color: #f92672">(</span><span style="color: #ae81ff">1</span><span style="color: #f92672">).</span><span style="color: #a6e22e">equals</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">ruleValue</span><span style="color: #f92672">))</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #f8f8f2">count</span><span style="color: #f92672">++;</span>
                <span style="color: #f92672">}</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">ruleKey</span><span style="color: #f92672">.</span><span style="color: #a6e22e">equals</span><span style="color: #f92672">(</span><span style="color: #e6db74">&quot;name&quot;</span><span style="color: #f92672">))</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">item</span><span style="color: #f92672">.</span><span style="color: #a6e22e">get</span><span style="color: #f92672">(</span><span style="color: #ae81ff">2</span><span style="color: #f92672">).</span><span style="color: #a6e22e">equals</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">ruleValue</span><span style="color: #f92672">))</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #f8f8f2">count</span><span style="color: #f92672">++;</span>
                <span style="color: #f92672">}</span>
            <span style="color: #f92672">}</span>
        <span style="color: #f92672">}</span>
        <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">count</span><span style="color: #f92672">;</span>
    <span style="color: #f92672">}</span>
<span style="color: #f92672">}</span>
</pre></div>
`
    },
    {
      id: 16,
      title: 'Design Parking System',
      codeLanguage:'Java',
      createdBy: 'Ziggy',
      question: `Design a parking system for a parking lot. 
      The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.
      Implement the ParkingSystem class:
      ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. 
      The number of slots for each parking space are given as part of the constructor.
      bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. 
      carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. 
      A car can only park in a parking space of its carType. 
      If there is no space available, return false, else park the car in that size space and return true.`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">ParkingSystem</span> <span style="color: #f92672">{</span>
    <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">big</span><span style="color: #f92672">;</span>
    <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">medium</span><span style="color: #f92672">;</span>
    <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">small</span><span style="color: #f92672">;</span>
    <span style="color: #66d9ef">public</span> <span style="color: #a6e22e">ParkingSystem</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">big</span><span style="color: #f92672">,</span> <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">medium</span><span style="color: #f92672">,</span> <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">small</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">this</span><span style="color: #f92672">.</span><span style="color: #a6e22e">big</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">big</span><span style="color: #f92672">;</span>
        <span style="color: #66d9ef">this</span><span style="color: #f92672">.</span><span style="color: #a6e22e">medium</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">medium</span><span style="color: #f92672">;</span>
        <span style="color: #66d9ef">this</span><span style="color: #f92672">.</span><span style="color: #a6e22e">small</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">small</span><span style="color: #f92672">;</span>
    <span style="color: #f92672">}</span>
    <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">boolean</span> <span style="color: #a6e22e">addCar</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">carType</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">carType</span> <span style="color: #f92672">==</span> <span style="color: #ae81ff">1</span><span style="color: #f92672">)</span>
        <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #66d9ef">this</span><span style="color: #f92672">.</span><span style="color: #a6e22e">big</span> <span style="color: #f92672">!=</span><span style="color: #ae81ff">0</span><span style="color: #f92672">){</span>
                <span style="color: #f8f8f2">big</span><span style="color: #f92672">--;</span>
                <span style="color: #66d9ef">return</span> <span style="color: #66d9ef">true</span><span style="color: #f92672">;</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">else</span> <span style="color: #66d9ef">return</span> <span style="color: #66d9ef">false</span><span style="color: #f92672">;</span>    
        <span style="color: #f92672">}</span>
        <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">carType</span> <span style="color: #f92672">==</span> <span style="color: #ae81ff">2</span><span style="color: #f92672">)</span>
        <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">medium</span><span style="color: #f92672">!=</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #f8f8f2">medium</span><span style="color: #f92672">--;</span>
                <span style="color: #66d9ef">return</span> <span style="color: #66d9ef">true</span><span style="color: #f92672">;</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">else</span> <span style="color: #66d9ef">return</span> <span style="color: #66d9ef">false</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
        <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">carType</span> <span style="color: #f92672">==</span><span style="color: #ae81ff">3</span><span style="color: #f92672">)</span>
        <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">small</span><span style="color: #f92672">!=</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #f8f8f2">small</span><span style="color: #f92672">--;</span>
                <span style="color: #66d9ef">return</span> <span style="color: #66d9ef">true</span><span style="color: #f92672">;</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">else</span>
                <span style="color: #66d9ef">return</span> <span style="color: #66d9ef">false</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
        <span style="color: #66d9ef">else</span> <span style="color: #66d9ef">return</span> <span style="color: #66d9ef">false</span><span style="color: #f92672">;</span>
    <span style="color: #f92672">}</span>
<span style="color: #f92672">}</span>
<span style="color: #75715e">/**</span>
<span style="color: #75715e"> * Your ParkingSystem object will be instantiated and called as such:</span>
<span style="color: #75715e"> * ParkingSystem obj = new ParkingSystem(big, medium, small);</span>
<span style="color: #75715e"> * boolean param_1 = obj.addCar(carType);</span>
<span style="color: #75715e"> */</span>
</pre></div>
`
    },
    {
      id: 17,
      title: 'Richest Customer Wealth',
      codeLanguage:'Java',
      createdBy: 'Ziggy',
      question: `You are given an m x n integer grid accounts where accounts[i][j] 
      is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
      Return the wealth that the richest customer has.
      A customer's wealth is the amount of money they have in all their bank accounts. 
      The richest customer is the customer that has the maximum wealth.`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
    <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">int</span> <span style="color: #a6e22e">maximumWealth</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span><span style="color: #f92672">[][]</span> <span style="color: #f8f8f2">accounts</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
        <span style="color: #75715e">//loop through customers </span>
        <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">wealth</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span>
        <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">custWealth</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span>
        <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">accounts</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
        <span style="color: #f92672">{</span>
            <span style="color: #f8f8f2">custWealth</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span>
            <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">j</span><span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">accounts</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">].</span><span style="color: #a6e22e">length</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">j</span><span style="color: #f92672">++)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #f8f8f2">custWealth</span><span style="color: #f92672">+=</span><span style="color: #f8f8f2">accounts</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">][</span><span style="color: #f8f8f2">j</span><span style="color: #f92672">];</span>
            <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">custWealth</span> <span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">wealth</span><span style="color: #f92672">)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #f8f8f2">wealth</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">custWealth</span><span style="color: #f92672">;</span>
            <span style="color: #f92672">}</span>
        <span style="color: #f92672">}</span>
        <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">wealth</span><span style="color: #f92672">;</span>
    <span style="color: #f92672">}</span>
<span style="color: #f92672">}</span>
</pre></div>
`
    },
    {
      id: 18,
      title: 'Three Consecutive Odds',
      codeLanguage:'Java',
      createdBy: 'Ziggy',
      question: `Given an integer array arr, return true if there are three consecutive odd numbers in the array. 
      Otherwise, return false.`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
    <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">boolean</span> <span style="color: #a6e22e">threeConsecutiveOdds</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">arr</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">2</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">arr</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">;</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
        <span style="color: #f92672">{</span>
            <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">arr</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">]%</span><span style="color: #ae81ff">2</span> <span style="color: #f92672">!=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
            <span style="color: #f92672">{</span>
                <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">arr</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f92672">]%</span><span style="color: #ae81ff">2</span> <span style="color: #f92672">!=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
                <span style="color: #f92672">{</span>
                    <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">arr</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">-</span><span style="color: #ae81ff">2</span><span style="color: #f92672">]%</span><span style="color: #ae81ff">2</span> <span style="color: #f92672">!=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
                    <span style="color: #f92672">{</span>
                        <span style="color: #66d9ef">return</span> <span style="color: #66d9ef">true</span><span style="color: #f92672">;</span>
                    <span style="color: #f92672">}</span>
                <span style="color: #f92672">}</span>
            <span style="color: #f92672">}</span>
        <span style="color: #f92672">}</span>
            <span style="color: #66d9ef">return</span> <span style="color: #66d9ef">false</span><span style="color: #f92672">;</span>
    <span style="color: #f92672">}</span>
<span style="color: #f92672">}</span>
</pre></div>
`
    },
    {
      id: 19,
      title: 'Create Target Array in Order',
      codeLanguage:'Java',
      createdBy: 'Ziggy',
      question: `Given two arrays of integers nums and index. Your task is to create target array under the following rules:
      Initially target array is empty.
      From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
      Repeat the previous step until there are no elements to read in nums and index.
      Return the target array.
      It is guaranteed that the insertion operations will be valid.`,
      code:
      `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">public</span> <span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #a6e22e">createTargetArray</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">nums</span><span style="color: #f92672">,</span> <span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">index</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
    
    <span style="color: #f8f8f2">List</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">Integer</span><span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">result</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">ArrayList</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">Integer</span><span style="color: #f92672">&gt;();</span>
    <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span><span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">nums</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
    <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">result</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">index</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">],</span><span style="color: #f8f8f2">nums</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">]);</span>
    <span style="color: #f92672">}</span>
    <span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">ret</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #66d9ef">int</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">result</span><span style="color: #f92672">.</span><span style="color: #a6e22e">size</span><span style="color: #f92672">()];</span>
    <span style="color: #66d9ef">for</span> <span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">=</span><span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">ret</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
    <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">ret</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">result</span><span style="color: #f92672">.</span><span style="color: #a6e22e">get</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">).</span><span style="color: #a6e22e">intValue</span><span style="color: #f92672">();</span>
    <span style="color: #f92672">}</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">ret</span><span style="color: #f92672">;</span>
<span style="color: #f92672">}</span>
<span style="color: #f92672">}</span>
</pre></div>
`
    },
    {
      id: 20,
      title: 'Shuffle String',
      codeLanguage:'Java',
      createdBy: 'Ziggy',
      question: `Given a string s and an integer array indices of the same length.
      The string s will be shuffled such that the character at the 
      ith position moves to indices[i] in the shuffled string.
      Return the shuffled string.`,
      code:
    `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span> <span style="color: #f92672">{</span>
    <span style="color: #66d9ef">public</span> <span style="color: #f8f8f2">String</span> <span style="color: #a6e22e">restoreString</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">String</span> <span style="color: #f8f8f2">s</span><span style="color: #f92672">,</span> <span style="color: #66d9ef">int</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">indices</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">char</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">chars</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">s</span><span style="color: #f92672">.</span><span style="color: #a6e22e">toCharArray</span><span style="color: #f92672">();</span>
        <span style="color: #66d9ef">char</span><span style="color: #f92672">[]</span> <span style="color: #f8f8f2">result</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #66d9ef">char</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">chars</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">];</span>
        <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">indices</span><span style="color: #f92672">.</span><span style="color: #a6e22e">length</span><span style="color: #f92672">;</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
        <span style="color: #f92672">{</span>
            <span style="color: #f8f8f2">result</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">indices</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">]]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">chars</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">];</span>
            
        <span style="color: #f92672">}</span>
        <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">String</span><span style="color: #f92672">.</span><span style="color: #a6e22e">valueOf</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">result</span><span style="color: #f92672">);</span>
    <span style="color: #f92672">}</span>
<span style="color: #f92672">}</span>
</pre></div>
`
    }
  ];
  snippets = 
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

    },
    {
      id: 1,
      title: 'api.py',
      codeLanguage:'Python',
      information: [{
        subTitle: 'So you want to run your own API?',
        description: `This program creates an API program using python. This program is useful if you need to write your own API. It includes standard get, post, put and delete methods. It uses a json file as a default data storage place but that can obviously be changed fairly easily.`,
        code:
`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f92672">from</span> <span style="color: #f8f8f2">flask</span> <span style="color: #f92672">import</span> <span style="color: #f8f8f2">Flask,</span> <span style="color: #f8f8f2">jsonify,</span> <span style="color: #f8f8f2">request</span>
<span style="color: #f92672">import</span> <span style="color: #f8f8f2">flask</span>
<span style="color: #f92672">import</span> <span style="color: #f8f8f2">sys</span>
<span style="color: #f92672">import</span> <span style="color: #f8f8f2">responses</span>

<span style="color: #f8f8f2">sys</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">path</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">append(</span><span style="color: #e6db74">&#39;../&#39;</span><span style="color: #f8f8f2">)</span>
<span style="color: #f92672">from</span> <span style="color: #f8f8f2">writeToLogs</span> <span style="color: #f92672">import</span> <span style="color: #f8f8f2">writeToLogs</span>
<span style="color: #f92672">from</span> <span style="color: #f8f8f2">getrepos</span> <span style="color: #f92672">import</span> <span style="color: #f92672">*</span>


<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">apiRun</span><span style="color: #f8f8f2">():</span>
    <span style="color: #f8f8f2">app</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">flask</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Flask(__name__)</span> 
    <span style="color: #f8f8f2">app</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">config[</span><span style="color: #e6db74">&quot;DEBUG&quot;</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">True</span>

    <span style="color: #75715e">#basic GET Route. Generally Analogizes to Get ALL</span>
    <span style="color: #a6e22e">@app.route</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;/&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">methods</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;GET&#39;</span><span style="color: #f8f8f2">])</span>
    <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">home</span><span style="color: #f8f8f2">():</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">getRecords()</span> <span style="color: #75715e">#</span>
        <span style="color: #75715e">#return jsonify({&quot;data&quot;: &quot;Hello World!&quot;}) </span>
        <span style="color: #75715e">#this commented line allows for testing without a backend. 
        #confirms this is being run and also allows the creation of the intro &quot;Hello world&quot; api return. </span>
    
    
    <span style="color: #75715e">#basic Search route. Created to generically search for any key value pair. </span>
    <span style="color: #a6e22e">@app.route</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;/search/&lt;key&gt;=&lt;value&gt;&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">methods</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;GET&#39;</span><span style="color: #f8f8f2">])</span>
    <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">search</span><span style="color: #f8f8f2">(key,value):</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">getRecordBySearch(key,value)</span> 
        <span style="color: #75715e">#passes the Key and value to the repository</span>
        <span style="color: #75715e">#expected to return a list of records that qualify</span>
    
    <span style="color: #75715e">#basic api getbyID</span>
    <span style="color: #a6e22e">@app.route</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;/&lt;int:id&gt;&#39;</span><span style="color: #f8f8f2">,methods</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;GET&#39;</span><span style="color: #f8f8f2">])</span>
    <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">byId</span><span style="color: #f8f8f2">(id):</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">getRecordById(id)</span>
        <span style="color: #75715e">#passes just the data id. expected to return the complete data object</span>
    
    <span style="color: #75715e">#basic update api by ID</span>
    <span style="color: #a6e22e">@app.route</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;/&lt;int:id&gt;&#39;</span><span style="color: #f8f8f2">,methods</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;POST&#39;</span><span style="color: #f8f8f2">])</span>
    <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">postById</span><span style="color: #f8f8f2">(id):</span>
    <span style="color: #f8f8f2">req</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">request</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">get_json()</span> <span style="color: #75715e">#get the request object passed along with the POST request</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">jsonify(updateRecordById(id,</span> <span style="color: #f8f8f2">req))</span> <span style="color: #75715e">#pass it into the repo function for the function to translate</span>
        <span style="color: #75715e">#return jsonify({&quot;you sent&quot;: req}) #this commented line allows for testing without a backend. 
        #confirms this is being run properly. </span>
        
    <span style="color: #75715e">#basic put request. Because the data is expected to not exist in the database, no id is provided    </span>
    <span style="color: #a6e22e">@app.route</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;/&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">methods</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;PUT&#39;</span><span style="color: #f8f8f2">])</span>
    <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">add</span><span style="color: #f8f8f2">():</span>
    <span style="color: #f8f8f2">req</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">request</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">get_json()</span> <span style="color: #75715e">#gets the request object</span>
    <span style="color: #75715e">#return returnData(req)</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">jsonify(addRecord(req))</span> <span style="color: #75715e">#passes the request object into the repo</span>
    
    <span style="color: #75715e">#generic delete by id function</span>
    <span style="color: #a6e22e">@app.route</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;/&lt;int:id&gt;&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">methods</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;DELETE&#39;</span><span style="color: #f8f8f2">])</span>
    <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">deleteById</span><span style="color: #f8f8f2">(id):</span>
    <span style="color: #f8f8f2">req</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">request</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">get_json()</span> <span style="color: #75715e">#only need this if I expect to be sent id through json body. currently unused</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">jsonify(deleteRecordById(id))</span> <span style="color: #75715e">#typically actually returns a custom delete message</span>

    <span style="color: #f8f8f2">app</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">run(port</span><span style="color: #f92672">=</span><span style="color: #ae81ff">3000</span><span style="color: #f8f8f2">)</span> <span style="color: #75715e">#run the api and specify port</span>

    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;App is running on localhost:3000&quot;</span><span style="color: #f8f8f2">)</span> 

<span style="color: #f8f8f2">writeToLogs(apiRun())</span> <span style="color: #75715e">#including this line allows the api function(apiRun) to run by typing python api.py </span>
</pre></div>`
      },
      {
        subTitle: 'get repos',
        description: `description of get repos`,
        code: 
`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f92672">import</span> <span style="color: #f8f8f2">json</span>
<span style="color: #f92672">from</span> <span style="color: #f8f8f2">writeToLogs</span> <span style="color: #f92672">import</span> <span style="color: #f8f8f2">writeToLogs</span>
<span style="color: #f92672">from</span> <span style="color: #f8f8f2">translation</span> <span style="color: #f92672">import</span> <span style="color: #f8f8f2">encodeToJSON</span> <span style="color: #75715e">#translation just catches the errors</span>
<span style="color: #f92672">from</span> <span style="color: #f8f8f2">translation</span> <span style="color: #f92672">import</span> <span style="color: #f8f8f2">decodeFromJSON</span>

<span style="color: #75715e">#for our data source we used a simple json file</span>
<span style="color: #75715e">#because of this we had some quirks of connection to get past</span>
<span style="color: #75715e">#like the fact that the id needed to match the line number</span>
<span style="color: #f8f8f2">fileName</span> <span style="color: #f92672">=</span> <span style="color: #e6db74">&#39;MOCK_DATA.json&#39;</span>
<span style="color: #f8f8f2">highestId</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span>

<span style="color: #75715e">#this function is unused. Ideally I would have used it to set </span>
<span style="color: #75715e">#the highestId for add and delete functions</span>
<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">returnData</span><span style="color: #f8f8f2">(data):</span>
    <span style="color: #f8f8f2">data[</span><span style="color: #e6db74">&#39;id&#39;</span><span style="color: #f8f8f2">]</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">highestId</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">encodeToJSON(data)</span>

<span style="color: #75715e">#addrecord takes in the record, finds the highestId, and adds the record</span>
<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">addRecord</span><span style="color: #f8f8f2">(data):</span>
    <span style="color: #f8f8f2">f</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">open(fileName,</span><span style="color: #e6db74">&#39;r&#39;</span><span style="color: #f8f8f2">)</span> <span style="color: #75715e">#open json file for read</span>
    <span style="color: #f8f8f2">listings</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">json</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">load(f)</span> <span style="color: #75715e">#create list of dicts</span>
    <span style="color: #f8f8f2">f</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">close()</span>
    <span style="color: #f8f8f2">highestId</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">len(listings)</span><span style="color: #f92672">+</span><span style="color: #ae81ff">1</span> <span style="color: #75715e">#find highestId</span>
    <span style="color: #f8f8f2">data[</span><span style="color: #e6db74">&#39;id&#39;</span><span style="color: #f8f8f2">]</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">highestId</span> <span style="color: #75715e">#add id to added record </span>
    <span style="color: #75715e">#(overwrite id if specified previous to keep id matching line in json file)</span>
    <span style="color: #f8f8f2">listings</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">append(data)</span>

    <span style="color: #66d9ef">with</span> <span style="color: #f8f8f2">open(fileName,</span><span style="color: #e6db74">&quot;w&quot;</span><span style="color: #f8f8f2">)</span> <span style="color: #66d9ef">as</span> <span style="color: #f8f8f2">outfile:</span> <span style="color: #75715e">#open for write</span>
    <span style="color: #75715e">#there&#39;s probably a better system, but we built the json format by hand</span>
    <span style="color: #f8f8f2">outfile</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">write(</span><span style="color: #e6db74">&quot;[&quot;</span><span style="color: #f8f8f2">)</span> 
    <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(len(listings)</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">):</span>
        <span style="color: #f8f8f2">outfile</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">writelines(encodeToJSON(listings[i])</span><span style="color: #f92672">+</span><span style="color: #e6db74">&quot;,</span><span style="color: #ae81ff">\n</span><span style="color: #e6db74">&quot;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #f8f8f2">outfile</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">write(encodeToJSON(listings[len(listings)</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">])</span> <span style="color: #f92672">+</span> <span style="color: #e6db74">&quot;]&quot;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #f8f8f2">writeToLogs(</span><span style="color: #e6db74">&quot;data added to file&quot;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">encodeToJSON(data)</span>
    
<span style="color: #75715e">#Get all records. tested to work through curl</span>
<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">getRecords</span><span style="color: #f8f8f2">():</span>
    <span style="color: #75715e">#GET</span>
    <span style="color: #f8f8f2">f</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">open(fileName,</span> <span style="color: #e6db74">&#39;r&#39;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">(f</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">read())</span>

<span style="color: #75715e">#get record by id, tested through curl and works</span>
<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">getRecordById</span><span style="color: #f8f8f2">(id):</span>
    <span style="color: #75715e">#GET /&lt;id&gt;</span>
    <span style="color: #f8f8f2">record</span> <span style="color: #f92672">=</span> <span style="color: #e6db74">&quot;&quot;</span>
    <span style="color: #f8f8f2">infile</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">open(fileName,</span> <span style="color: #e6db74">&#39;r&#39;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #f8f8f2">record</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">infile</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">readlines()[id</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]</span> <span style="color: #75715e">#get record from file</span>
    <span style="color: #75715e">#the line above uses the fact that the line number is the same as the id</span>
    <span style="color: #75715e">#if that were not true, we could use the key value search method</span>
    <span style="color: #f8f8f2">writeToLogs(</span><span style="color: #e6db74">&quot;got record by id&quot;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">record[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">:len(record)</span><span style="color: #f92672">-</span><span style="color: #ae81ff">2</span><span style="color: #f8f8f2">]</span> <span style="color: #75715e">#remove newline and comma</span>

<span style="color: #75715e">#update record given information and data</span>
<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">updateRecordById</span><span style="color: #f8f8f2">(id,</span> <span style="color: #f8f8f2">data):</span>
    <span style="color: #f8f8f2">f</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">open(fileName,</span><span style="color: #e6db74">&#39;r&#39;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #f8f8f2">listings</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">json</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">load(f)</span>
    <span style="color: #f8f8f2">record</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">listings[id</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]</span>
    <span style="color: #f8f8f2">listings[id</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">update(data)</span> 
    <span style="color: #75715e">#by using .update(), it allows for the data to be incomplete,</span>
    <span style="color: #75715e"># and use the old data for unchanging portions</span>
    <span style="color: #f8f8f2">record</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">listings[id</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]</span>
    <span style="color: #f8f8f2">f</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">close()</span>
    <span style="color: #66d9ef">with</span> <span style="color: #f8f8f2">open(fileName,</span><span style="color: #e6db74">&quot;w&quot;</span><span style="color: #f8f8f2">)</span> <span style="color: #66d9ef">as</span> <span style="color: #f8f8f2">outfile:</span> <span style="color: #75715e">#open for writing</span>
    <span style="color: #f8f8f2">outfile</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">write(</span><span style="color: #e6db74">&quot;[&quot;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(len(listings)</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">):</span>
        <span style="color: #f8f8f2">outfile</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">writelines(encodeToJSON(listings[i])</span><span style="color: #f92672">+</span><span style="color: #e6db74">&quot;,</span><span style="color: #ae81ff">\n</span><span style="color: #e6db74">&quot;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #f8f8f2">outfile</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">writelines(encodeToJSON(listings[len(listings)</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">])</span> <span style="color: #f92672">+</span> <span style="color: #e6db74">&quot;]&quot;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #f8f8f2">writeToLogs(</span><span style="color: #e6db74">&quot;Updated record&quot;</span><span style="color: #f8f8f2">)</span>	
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">encodeToJSON(record)</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">getRecordBySearch</span><span style="color: #f8f8f2">(key,</span> <span style="color: #f8f8f2">value):</span>
    <span style="color: #75715e">#GET /search</span>
    <span style="color: #75715e">#read in whole file as list of jsons</span>
    <span style="color: #75715e"># for each element of list</span>
    <span style="color: #75715e"># if key value in element</span>
    <span style="color: #75715e">#then save index, return list[index]</span>
    <span style="color: #f8f8f2">listings</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[]</span>
    <span style="color: #f8f8f2">f</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">open(fileName,</span><span style="color: #e6db74">&#39;r&#39;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #f8f8f2">listings</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">json</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">load(f)</span>
    <span style="color: #f8f8f2">temp</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[]</span>
    <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">listings:</span>
    <span style="color: #66d9ef">if</span><span style="color: #f8f8f2">(i[key]</span> <span style="color: #f92672">==</span> <span style="color: #f8f8f2">value):</span>
        <span style="color: #f8f8f2">temp</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">append(i)</span>
    <span style="color: #f8f8f2">result</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">temp</span>
    <span style="color: #f8f8f2">writeToLogs(</span><span style="color: #e6db74">&quot;Got record through search of key value&quot;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">encodeToJSON(result)</span>

<span style="color: #75715e">#in a perfect world, we&#39;d change this to not change id to match line number</span>
<span style="color: #75715e">#depends on the data structure</span>
<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">deleteRecordById</span><span style="color: #f8f8f2">(id):</span>
    <span style="color: #75715e">#DELETE</span>
    <span style="color: #f8f8f2">listings</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[]</span>
    <span style="color: #f8f8f2">id</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">id</span>
    <span style="color: #75715e">#read file</span>
    <span style="color: #f8f8f2">f</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">open(fileName,</span><span style="color: #e6db74">&#39;r&#39;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #f8f8f2">listings</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">json</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">load(f)</span>
    <span style="color: #f8f8f2">f</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">close()</span>
    <span style="color: #75715e">#delete data by writing </span>
    <span style="color: #66d9ef">with</span> <span style="color: #f8f8f2">open(fileName,</span> <span style="color: #e6db74">&#39;w&#39;</span><span style="color: #f8f8f2">)</span> <span style="color: #66d9ef">as</span> <span style="color: #f8f8f2">infile:</span>
    <span style="color: #f8f8f2">infile</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">write(</span><span style="color: #e6db74">&quot;[&quot;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(len(listings)</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">):</span>
        <span style="color: #66d9ef">if</span><span style="color: #f8f8f2">(listings[i][</span><span style="color: #e6db74">&#39;id&#39;</span><span style="color: #f8f8f2">]</span><span style="color: #f92672">!=</span> <span style="color: #f8f8f2">id):</span>
        <span style="color: #66d9ef">if</span><span style="color: #f8f8f2">(listings[i][</span><span style="color: #e6db74">&#39;id&#39;</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">id):</span>
            <span style="color: #f8f8f2">listings[i][</span><span style="color: #e6db74">&#39;id&#39;</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">int(listings[i][</span><span style="color: #e6db74">&#39;id&#39;</span><span style="color: #f8f8f2">])</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span>
        <span style="color: #f8f8f2">infile</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">writelines(encodeToJSON(listings[i])</span><span style="color: #f92672">+</span><span style="color: #e6db74">&quot;,</span><span style="color: #ae81ff">\n</span><span style="color: #e6db74">&quot;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #f8f8f2">lastid</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">len(listings)</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span>
    <span style="color: #66d9ef">if</span><span style="color: #f8f8f2">(listings[lastid][</span><span style="color: #e6db74">&#39;id&#39;</span><span style="color: #f8f8f2">]</span><span style="color: #f92672">&gt;</span><span style="color: #f8f8f2">id):</span>
        <span style="color: #f8f8f2">listings[lastid][</span><span style="color: #e6db74">&#39;id&#39;</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">int(listings[lastid][</span><span style="color: #e6db74">&#39;id&#39;</span><span style="color: #f8f8f2">])</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span>		
    <span style="color: #f8f8f2">infile</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">write(encodeToJSON(listings[lastid])</span> <span style="color: #f92672">+</span> <span style="color: #e6db74">&quot;]&quot;</span><span style="color: #f8f8f2">)</span>
    <span style="color: #66d9ef">return</span> <span style="color: #e6db74">&quot;this was a smashing success&quot;</span>
</pre></div>`
      }
    

    ]
    },
    {
        id: 2,
        title: 'writeToLogs',
        subTitle: 'keeping track of function calls',
        codeLanguage:'python',
        information: [{
        subTitle: "Write Logs for Testing",
        description: `this function helps me keep track of function calls through my programs.`,
        code:
`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #75715e">#write to logs</span>
<span style="color: #f92672">import</span> <span style="color: #f8f8f2">inspect</span>
<span style="color: #f92672">from</span> <span style="color: #f8f8f2">datetime</span> <span style="color: #f92672">import</span> <span style="color: #f8f8f2">datetime</span>


<span style="color: #75715e">#this function takes in a string, which can be json data, </span>
<span style="color: #75715e"># or simply a description of what function ran, and what it did. </span>
<span style="color: #75715e">#It uses the datetime to tell what and what time something happened</span>
<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">writeToLogs</span><span style="color: #f8f8f2">(writings):</span>
    <span style="color: #66d9ef">with</span> <span style="color: #f8f8f2">open(</span><span style="color: #e6db74">&quot;logs.txt&quot;</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&quot;a&quot;</span><span style="color: #f8f8f2">)</span> <span style="color: #66d9ef">as</span> <span style="color: #f8f8f2">logs:</span> <span style="color: #75715e">#open file and write</span>
    <span style="color: #f8f8f2">logs</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">write(</span> <span style="color: #e6db74">&quot;at: &quot;</span>	<span style="color: #f92672">+</span> <span style="color: #f8f8f2">str(datetime</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">now())</span> <span style="color: #f92672">+</span> 
    <span style="color: #e6db74">&quot;:    &quot;</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">writings</span> <span style="color: #f92672">+</span>  <span style="color: #e6db74">&quot;</span><span style="color: #ae81ff">\\n</span><span style="color: #e6db74">&quot;</span><span style="color: #f8f8f2">)</span> <span style="color: #75715e">#write parameter to file</span>
</pre></div>`
        }]
        
    },
    {
        id: 3,
        title: 'json translation.py',
        subTitle: 'Translate from json to dict and back to json',
        codeLanguage:'python',
        information: [{
        description: `this function is very simple in that it just uses json dumps and loads.
        It incorporates a try catch because I didn't want to get errors when things were in the wrong format.`,
        code:
`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #75715e">#turns results into json for delivery</span>
<span style="color: #f92672">import</span> <span style="color: #f8f8f2">json</span>
<span style="color: #f92672">from</span> <span style="color: #f8f8f2">writeToLogs</span> <span style="color: #f92672">import</span> <span style="color: #f8f8f2">writeToLogs</span>


<span style="color: #75715e">#encodes starts out with a dict, and encodes into a json</span>
<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">encodeToJSON</span><span style="color: #f8f8f2">(results):</span>
    <span style="color: #f8f8f2">success</span> <span style="color: #f92672">=</span> <span style="color: #e6db74">&quot;&quot;</span>
    <span style="color: #66d9ef">try</span><span style="color: #f8f8f2">:</span>
    <span style="color: #f8f8f2">success</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">json</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">dumps(results)</span> <span style="color: #75715e">#dumps turns python dict into json</span>
    <span style="color: #f8f8f2">writeToLogs(</span><span style="color: #e6db74">&quot;Translation happened. Encoded: &quot;</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">str(results))</span>
    <span style="color: #66d9ef">except</span> <span style="color: #a6e22e">Exception</span> <span style="color: #66d9ef">as</span> <span style="color: #f8f8f2">e:</span>
    <span style="color: #f8f8f2">writeToLogs(</span><span style="color: #e6db74">&quot;Encoding failure with error: &quot;</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">str(e))</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">success</span> 

<span style="color: #75715e">#decode starts out with a json, and ends with a dict</span>
<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">decodeFromJSON</span><span style="color: #f8f8f2">(results):</span>
    <span style="color: #f8f8f2">success</span> <span style="color: #f92672">=</span> <span style="color: #e6db74">&quot;&quot;</span>
    <span style="color: #66d9ef">try</span><span style="color: #f8f8f2">:</span>
    <span style="color: #f8f8f2">success</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">json</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">loads(results)</span> <span style="color: #75715e">#loads turns json results into python dict</span>
    <span style="color: #f8f8f2">writeToLogs(</span><span style="color: #e6db74">&quot;Translation happened. Decoded: &quot;</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">results)</span>
    <span style="color: #66d9ef">except</span> <span style="color: #a6e22e">Exception</span> <span style="color: #66d9ef">as</span> <span style="color: #f8f8f2">e:</span>
    <span style="color: #f8f8f2">writeToLogs(</span><span style="color: #e6db74">&quot;Translation Decoding failure with error: &quot;</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">str(e))</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">success</span>
</pre></div>
`
      }]
      
    },
    {
      id: 4,
      title: 'Node Traversal',
      subStatement: `Probably useful when I think about pathfinding. this was an interview problem. 
      Looking back I can see that it could have been improved upon in a great number of ways. 
      I have chosen not to fix these issues because the problem serves no practical purpose for me.
      I have many other programs that are more relevant and practical that I wish to spend time on. 
      I maintain that the reason the program did not result in me being hired is based on the fact that their test cases
      and my interpretation of their descriptions did not match, but the fact that my program has inefficiencies and confounding methodology is undeniable.`,
      codeLanguage:'java',
      information: [{
        subTitle: 'Let There Be Nodes',
        description: `This project is about the traversal of nodes, and therefore there must be nodes to traverse. Nodes are simple, uncomplicated things with a rectangular shape and location, and lists of nodes that can be linked to them cardinally.`,
        code: 
`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">public</span> <span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Node</span> <span style="color: #66d9ef">implements</span> <span style="color: #f8f8f2">INode</span> <span style="color: #f92672">{</span>
    <span style="color: #66d9ef">private</span> <span style="color: #f8f8f2">Rectangle</span> <span style="color: #f8f8f2">rect</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">Rectangle</span><span style="color: #f92672">();</span>
    <span style="color: #66d9ef">private</span> <span style="color: #f8f8f2">Set</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">INode</span><span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">upNodes</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">HashSet</span><span style="color: #f92672">();</span>
    <span style="color: #66d9ef">private</span> <span style="color: #f8f8f2">Set</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">INode</span><span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">downNodes</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">HashSet</span><span style="color: #f92672">();</span>
    <span style="color: #66d9ef">private</span> <span style="color: #f8f8f2">Set</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">INode</span><span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">leftNodes</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">HashSet</span><span style="color: #f92672">();</span>
    <span style="color: #66d9ef">private</span> <span style="color: #f8f8f2">Set</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">INode</span><span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">rightNodes</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">HashSet</span><span style="color: #f92672">();</span>
<span style="color: #f92672">}</span>
</pre></div>
`
      },
      {
        subTitle: 'Let them be linked',
        description: `This function links the nodes together and stores the links into the node. It's done using two for loops and a slew of if statements. 
        It probably could be done in a cleaner method using recursion. `,
        code: 
`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">	<span style="color: #66d9ef">private</span> <span style="color: #66d9ef">static</span> <span style="color: #66d9ef">void</span> <span style="color: #a6e22e">linkNodes</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">Node</span><span style="color: #f92672">...</span><span style="color: #a6e22e">nodes</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
<span style="color: #66d9ef">for</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">Node</span> <span style="color: #f8f8f2">node:</span> <span style="color: #f8f8f2">nodes</span><span style="color: #f92672">)</span>
<span style="color: #f92672">{</span>
<span style="color: #75715e">//find up nodes for node</span>
<span style="color: #f8f8f2">Set</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">INode</span><span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">upNode</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">HashSet</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">INode</span><span style="color: #f92672">&gt;(</span><span style="color: #ae81ff">2</span><span style="color: #f92672">);</span>
<span style="color: #f8f8f2">Set</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">INode</span><span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">downNode</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">HashSet</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">INode</span><span style="color: #f92672">&gt;(</span><span style="color: #ae81ff">2</span><span style="color: #f92672">);</span>
<span style="color: #f8f8f2">Set</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">INode</span><span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">leftNode</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">HashSet</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">INode</span><span style="color: #f92672">&gt;(</span><span style="color: #ae81ff">2</span><span style="color: #f92672">);</span>
<span style="color: #f8f8f2">Set</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">INode</span><span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">rightNode</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">HashSet</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">INode</span><span style="color: #f92672">&gt;(</span><span style="color: #ae81ff">2</span><span style="color: #f92672">);</span>
<span style="color: #f8f8f2">Node</span> <span style="color: #f8f8f2">tempUpNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">createNode</span><span style="color: #f92672">(</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">);</span>
<span style="color: #f8f8f2">Node</span> <span style="color: #f8f8f2">tempUpNode2</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">createNode</span><span style="color: #f92672">(</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">);</span>
<span style="color: #f8f8f2">Node</span> <span style="color: #f8f8f2">tempDownNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">createNode</span><span style="color: #f92672">(</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">);</span>
<span style="color: #f8f8f2">Node</span> <span style="color: #f8f8f2">tempDownNode2</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">createNode</span><span style="color: #f92672">(</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">);</span>
<span style="color: #f8f8f2">Node</span> <span style="color: #f8f8f2">tempLeftNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">createNode</span><span style="color: #f92672">(</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">);</span>
<span style="color: #f8f8f2">Node</span> <span style="color: #f8f8f2">tempLeftNode2</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">createNode</span><span style="color: #f92672">(</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">);</span>
<span style="color: #f8f8f2">Node</span> <span style="color: #f8f8f2">tempRightNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">createNode</span><span style="color: #f92672">(</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">);</span>
<span style="color: #f8f8f2">Node</span> <span style="color: #f8f8f2">tempRightNode2</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">createNode</span><span style="color: #f92672">(</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">);</span>
<span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">Node</span> <span style="color: #f8f8f2">upTester:</span> <span style="color: #f8f8f2">nodes</span><span style="color: #f92672">)</span>
<span style="color: #f92672">{</span>
    <span style="color: #75715e">//if tester == node</span>
    <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">upTester</span> <span style="color: #f92672">==</span> <span style="color: #f8f8f2">node</span><span style="color: #f92672">)</span>
    <span style="color: #f92672">{</span>
    <span style="color: #66d9ef">continue</span><span style="color: #f92672">;</span>
    <span style="color: #f92672">}</span>
    <span style="color: #f8f8f2">Rectangle</span> <span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">=</span> <span style="color: #f8f8f2">node</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">();</span>
    <span style="color: #f8f8f2">Rectangle</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">=</span> <span style="color: #f8f8f2">upTester</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">();</span>
    <span style="color: #75715e">//check to see if tester is an up node</span>
    <span style="color: #75715e">//check if testnode is on the vertical axis</span>
    <span style="color: #66d9ef">if</span><span style="color: #f92672">((</span><span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&lt;=</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&amp;&amp;</span> <span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getX</span><span style="color: #f92672">())</span> <span style="color: #f92672">||</span>
        <span style="color: #f92672">(</span><span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&amp;&amp;</span> <span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&gt;=</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">())</span> <span style="color: #f92672">||</span>
            <span style="color: #f92672">(</span><span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&amp;&amp;</span> <span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">())</span> <span style="color: #f92672">||</span>
            <span style="color: #f92672">(</span><span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&amp;&amp;</span> <span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">()))</span>
    <span style="color: #f92672">{</span>
    <span style="color: #75715e">//testdata</span>
    <span style="color: #66d9ef">double</span> <span style="color: #f8f8f2">nodeMaxX</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">();</span>
    <span style="color: #66d9ef">double</span> <span style="color: #f8f8f2">testMaxX</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">();</span>
    <span style="color: #66d9ef">double</span> <span style="color: #f8f8f2">nodeMaxY</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">();</span>
    <span style="color: #66d9ef">double</span> <span style="color: #f8f8f2">testMaxY</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">();</span>
    <span style="color: #75715e">//check if test node is up (up is smaller)</span>
    <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">()</span> <span style="color: #f92672">&lt;=</span> <span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getY</span><span style="color: #f92672">())</span>
    <span style="color: #f92672">{</span>
        <span style="color: #75715e">//check if tempNode exists. if it doesn&#39;t, set test to temp</span>
        <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempUpNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()==</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
        <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">tempUpNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">upTester</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
        <span style="color: #75715e">//check if test node is lower than tempNode </span>
        <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">()</span> <span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">tempUpNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">())</span>
        <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">tempUpNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">upTester</span><span style="color: #f92672">;</span>
        <span style="color: #75715e">//reset duplicate with incorrect value</span>
        <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempUpNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()!=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
        <span style="color: #f92672">{</span>
            <span style="color: #f8f8f2">tempUpNode2</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">createNode</span><span style="color: #f92672">(</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">);</span> 
        <span style="color: #f92672">}</span>
        <span style="color: #f92672">}</span>
        <span style="color: #75715e">//check if test node distance is equal to temp node</span>
        <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">()</span> <span style="color: #f92672">==</span> <span style="color: #f8f8f2">tempUpNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">())</span>
        <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">tempUpNode2</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">tempUpNode</span><span style="color: #f92672">;</span>
        <span style="color: #f8f8f2">tempUpNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">upTester</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>    
    <span style="color: #f92672">}</span>
    <span style="color: #75715e">//check if test node is down</span>
    <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMinY</span><span style="color: #f92672">()</span> <span style="color: #f92672">&gt;=</span> <span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">())</span>
    <span style="color: #f92672">{</span>
        <span style="color: #75715e">//check if tempNode exists</span>
        <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempDownNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()==</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
        <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">tempDownNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">upTester</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>

        <span style="color: #75715e">//check if test node is lower than tempNode</span>
        <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMinY</span><span style="color: #f92672">()</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">tempDownNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getMinY</span><span style="color: #f92672">())</span>
        <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">tempDownNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">upTester</span><span style="color: #f92672">;</span>
        <span style="color: #75715e">//reset duplicate with incorrect value</span>
        <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempDownNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()!=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
        <span style="color: #f92672">{</span>
            <span style="color: #f8f8f2">tempDownNode2</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">createNode</span><span style="color: #f92672">(</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">);</span> 
        <span style="color: #f92672">}</span>
        <span style="color: #f92672">}</span>
        <span style="color: #75715e">//check if test node distance is equal to temp node</span>
        <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMinY</span><span style="color: #f92672">()</span> <span style="color: #f92672">==</span> <span style="color: #f8f8f2">tempDownNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getMinY</span><span style="color: #f92672">())</span>
        <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">tempDownNode2</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">tempDownNode</span><span style="color: #f92672">;</span>
        <span style="color: #f8f8f2">tempDownNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">upTester</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    <span style="color: #75715e">//check if testnode is on the Horizontal axis</span>
    <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span><span style="color: #f92672">((</span><span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getY</span><span style="color: #f92672">()</span>  <span style="color: #f92672">&lt;=</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getY</span><span style="color: #f92672">()</span> <span style="color: #f92672">&amp;&amp;</span> <span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">()</span> <span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getY</span><span style="color: #f92672">())</span>
        <span style="color: #f92672">||</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getY</span><span style="color: #f92672">()</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">()</span> <span style="color: #f92672">&amp;&amp;</span> <span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">()</span> <span style="color: #f92672">&gt;=</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">())</span> 
        <span style="color: #f92672">||</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getY</span><span style="color: #f92672">()</span> <span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getY</span><span style="color: #f92672">()</span> <span style="color: #f92672">&amp;&amp;</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">()</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">()))</span>
        <span style="color: #f92672">||</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getY</span><span style="color: #f92672">()</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getY</span><span style="color: #f92672">()</span> <span style="color: #f92672">&amp;&amp;</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">()</span> <span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">())))</span>
    <span style="color: #f92672">{</span>
    <span style="color: #75715e">//check if test node is to the right (right is bigger)</span>
    <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&lt;=</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMinX</span><span style="color: #f92672">())</span>
    <span style="color: #f92672">{</span>
        <span style="color: #75715e">//check if tempNode exists</span>
        <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempRightNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()==</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
        <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">tempRightNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">upTester</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
        <span style="color: #75715e">//check if test node is closer than tempNode</span>
        <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMinX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">tempRightNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getMinX</span><span style="color: #f92672">())</span>
        <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">tempRightNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">upTester</span><span style="color: #f92672">;</span>
        <span style="color: #75715e">//reset duplicate with incorrect value</span>
        <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempRightNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()!=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
        <span style="color: #f92672">{</span>
            <span style="color: #f8f8f2">tempRightNode2</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">createNode</span><span style="color: #f92672">(</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">);</span> 
        <span style="color: #f92672">}</span>
        <span style="color: #f92672">}</span>
        <span style="color: #75715e">//check if test node distance is equal to temp node</span>
        <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMinX</span><span style="color: #f92672">()</span> <span style="color: #f92672">==</span> <span style="color: #f8f8f2">tempRightNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getMinX</span><span style="color: #f92672">())</span>
        <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">tempRightNode2</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">tempRightNode</span><span style="color: #f92672">;</span>
        <span style="color: #f8f8f2">tempRightNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">upTester</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    <span style="color: #75715e">//check if node is to the left</span>
    <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">nodeRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&gt;=</span> <span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">())</span>
    <span style="color: #f92672">{</span>
        <span style="color: #75715e">//check if tempNode exists</span>
        <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempLeftNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()==</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
        <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">tempLeftNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">upTester</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
        <span style="color: #75715e">//check if test node is closer than tempNode</span>
        <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">()</span> <span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">tempLeftNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">())</span>
        <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">tempLeftNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">upTester</span><span style="color: #f92672">;</span>
        <span style="color: #75715e">//reset duplicate with incorrect value</span>
        <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempLeftNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()!=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
        <span style="color: #f92672">{</span>
            <span style="color: #f8f8f2">tempLeftNode2</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">createNode</span><span style="color: #f92672">(</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">,</span><span style="color: #ae81ff">0</span><span style="color: #f92672">);</span> 
        <span style="color: #f92672">}</span>
        <span style="color: #f92672">}</span>
        <span style="color: #75715e">//check if test node distance is equal to temp node</span>
        <span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span> <span style="color: #f92672">(</span><span style="color: #f8f8f2">testRect</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">()</span> <span style="color: #f92672">==</span> <span style="color: #f8f8f2">tempLeftNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">())</span>
        <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">tempLeftNode2</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">tempLeftNode</span><span style="color: #f92672">;</span>
        <span style="color: #f8f8f2">tempLeftNode</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">upTester</span><span style="color: #f92672">;</span>
        <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
<span style="color: #f92672">}</span>
<span style="color: #75715e">// once loop is concluded, add upNodes to the list.</span>
<span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempUpNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()!=</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
<span style="color: #f92672">{</span>
    <span style="color: #f8f8f2">upNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempUpNode</span><span style="color: #f92672">);</span>
<span style="color: #f92672">}</span>
<span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempUpNode2</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()!=</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
<span style="color: #f92672">{</span>
    <span style="color: #f8f8f2">upNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempUpNode2</span><span style="color: #f92672">);</span>
<span style="color: #f92672">}</span>
<span style="color: #f8f8f2">node</span><span style="color: #f92672">.</span><span style="color: #a6e22e">setUpNodes</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">upNode</span><span style="color: #f92672">);</span>
<span style="color: #75715e">// once loop is concluded, add downNodes to the list.</span>
<span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempDownNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()!=</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
<span style="color: #f92672">{</span>
    <span style="color: #f8f8f2">downNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempDownNode</span><span style="color: #f92672">);</span>
<span style="color: #f92672">}</span>
<span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempDownNode2</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()!=</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
<span style="color: #f92672">{</span>
    <span style="color: #f8f8f2">downNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempDownNode2</span><span style="color: #f92672">);</span>
<span style="color: #f92672">}</span>
<span style="color: #f8f8f2">node</span><span style="color: #f92672">.</span><span style="color: #a6e22e">setDownNodes</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">downNode</span><span style="color: #f92672">);</span>
<span style="color: #75715e">// once loop is concluded, add RightNodes to the list.</span>
<span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempRightNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()!=</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
<span style="color: #f92672">{</span>
<span style="color: #f8f8f2">rightNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempRightNode</span><span style="color: #f92672">);</span>
<span style="color: #f92672">}</span>
<span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempRightNode2</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()!=</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
<span style="color: #f92672">{</span>
    <span style="color: #f8f8f2">rightNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempRightNode2</span><span style="color: #f92672">);</span>
<span style="color: #f92672">}</span>
<span style="color: #f8f8f2">node</span><span style="color: #f92672">.</span><span style="color: #a6e22e">setRightNodes</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">rightNode</span><span style="color: #f92672">);</span>            
<span style="color: #75715e">// once loop is concluded, add LeftNodes to the list.</span>
<span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempLeftNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()!=</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
<span style="color: #f92672">{</span>
    <span style="color: #f8f8f2">leftNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempLeftNode</span><span style="color: #f92672">);</span>
<span style="color: #f92672">}</span>
<span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempLeftNode2</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getHeight</span><span style="color: #f92672">()!=</span><span style="color: #ae81ff">0</span><span style="color: #f92672">)</span>
<span style="color: #f92672">{</span>
    <span style="color: #f8f8f2">leftNode</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">tempLeftNode2</span><span style="color: #f92672">);</span>
<span style="color: #f92672">}</span>
<span style="color: #f8f8f2">node</span><span style="color: #f92672">.</span><span style="color: #a6e22e">setLeftNodes</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">leftNode</span><span style="color: #f92672">);</span>
<span style="color: #f92672">}</span>          
<span style="color: #f92672">}</span>
</pre></div>`
      },
      {
        subTitle: 'Release the Nodes!',
        description: `This function calls the subsequent functions. It starts with a node, generates a display case array, adds nodes to it, and then also keeps track of the old nodes.`,
        code: 
`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">private</span> <span style="color: #66d9ef">static</span> <span style="color: #66d9ef">void</span> <span style="color: #a6e22e">displayAllNodesFromParentNode</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">Node</span> <span style="color: #f8f8f2">a</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
<span style="color: #75715e">// TODO to complete</span>
<span style="color: #75715e">//get node a</span>
<span style="color: #66d9ef">char</span><span style="color: #f92672">[][]</span> <span style="color: #f8f8f2">displayCase</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #66d9ef">char</span><span style="color: #f92672">[</span><span style="color: #ae81ff">20</span><span style="color: #f92672">][</span><span style="color: #ae81ff">20</span><span style="color: #f92672">];</span>
<span style="color: #f8f8f2">Set</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">INode</span><span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">usedNodes</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">HashSet</span><span style="color: #f92672">(</span><span style="color: #ae81ff">10</span><span style="color: #f92672">);</span>
<span style="color: #f8f8f2">getNextLinkedNode</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">a</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">displayCase</span><span style="color: #f92672">,</span><span style="color: #f8f8f2">usedNodes</span><span style="color: #f92672">,</span><span style="color: #e6db74">&#39;A&#39;</span><span style="color: #f92672">);</span>
<span style="color: #75715e">//if right node for a - put right node  in display case - move to right node </span>
<span style="color: #75715e">//else if down node for a - put down node in display case - move to down node</span>
<span style="color: #75715e">//else if left node for a - put left node in display case - move to left node</span>
<span style="color: #75715e">//else if up node for a - put up node in display case - move to up node</span>
<span style="color: #75715e">//else if no nodes to link, display display case</span>
<span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #ae81ff">13</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++</span> <span style="color: #f92672">)</span>
<span style="color: #f92672">{</span>
    <span style="color: #66d9ef">for</span> <span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">&lt;</span> <span style="color: #ae81ff">13</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">j</span><span style="color: #f92672">++)</span>
    <span style="color: #f92672">{</span>
    <span style="color: #66d9ef">if</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">displayCase</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">][</span><span style="color: #f8f8f2">j</span><span style="color: #f92672">]</span> <span style="color: #f92672">&gt;=</span> <span style="color: #e6db74">&#39;A&#39;</span><span style="color: #f92672">)</span>
    <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">System</span><span style="color: #f92672">.</span><span style="color: #a6e22e">out</span><span style="color: #f92672">.</span><span style="color: #a6e22e">print</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">displayCase</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">][</span><span style="color: #f8f8f2">j</span><span style="color: #f92672">]);</span>
    <span style="color: #f92672">}</span>
    <span style="color: #66d9ef">else</span>
    <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">System</span><span style="color: #f92672">.</span><span style="color: #a6e22e">out</span><span style="color: #f92672">.</span><span style="color: #a6e22e">print</span><span style="color: #f92672">(</span><span style="color: #e6db74">&quot; &quot;</span><span style="color: #f92672">);</span>
    <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
    <span style="color: #f8f8f2">System</span><span style="color: #f92672">.</span><span style="color: #a6e22e">out</span><span style="color: #f92672">.</span><span style="color: #a6e22e">println</span><span style="color: #f92672">();</span>
<span style="color: #f92672">}</span>
<span style="color: #f92672">}</span>
</pre></div>`
      },
      {
        subTitle: 'Recursively Find them',
        description: `This is the recursive part of the function. This function goes through the links each node has to find the other ones.`,
        code: 
`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">	<span style="color: #66d9ef">private</span> <span style="color: #66d9ef">static</span> <span style="color: #66d9ef">void</span> <span style="color: #a6e22e">getNextLinkedNode</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">INode</span> <span style="color: #f8f8f2">a</span><span style="color: #f92672">,</span> <span style="color: #66d9ef">char</span><span style="color: #f92672">[][]</span> <span style="color: #f8f8f2">range</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">Set</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">INode</span><span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">usedNodes</span><span style="color: #f92672">,</span><span style="color: #66d9ef">char</span> <span style="color: #f8f8f2">displayValue</span><span style="color: #f92672">)</span>
<span style="color: #f92672">{</span>
<span style="color: #f8f8f2">range</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">addNodetoCase</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">a</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">range</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">displayValue</span><span style="color: #f92672">);</span>
<span style="color: #66d9ef">if</span><span style="color: #f92672">(!</span><span style="color: #f8f8f2">a</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRightNodes</span><span style="color: #f92672">().</span><span style="color: #a6e22e">isEmpty</span><span style="color: #f92672">())</span>
<span style="color: #f92672">{</span>
    <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">INode</span> <span style="color: #f8f8f2">node</span> <span style="color: #f92672">:</span><span style="color: #f8f8f2">a</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRightNodes</span><span style="color: #f92672">())</span>
        <span style="color: #f92672">{</span>
        <span style="color: #66d9ef">if</span><span style="color: #f92672">(!</span><span style="color: #f8f8f2">usedNodes</span><span style="color: #f92672">.</span><span style="color: #a6e22e">contains</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">node</span><span style="color: #f92672">))</span>
        <span style="color: #f92672">{</span>
            <span style="color: #f8f8f2">displayValue</span><span style="color: #f92672">++;</span>
            <span style="color: #f8f8f2">usedNodes</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">node</span><span style="color: #f92672">);</span>
            <span style="color: #f8f8f2">getNextLinkedNode</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">node</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">range</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">usedNodes</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">displayValue</span><span style="color: #f92672">);</span>
        <span style="color: #f92672">}</span>
        <span style="color: #f92672">}</span>
<span style="color: #f92672">}</span>
<span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span><span style="color: #f92672">(!</span><span style="color: #f8f8f2">a</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getDownNodes</span><span style="color: #f92672">().</span><span style="color: #a6e22e">isEmpty</span><span style="color: #f92672">())</span>
<span style="color: #f92672">{</span>
    <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">INode</span> <span style="color: #f8f8f2">node</span> <span style="color: #f92672">:</span><span style="color: #f8f8f2">a</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getDownNodes</span><span style="color: #f92672">())</span>
    <span style="color: #f92672">{</span>
    <span style="color: #66d9ef">if</span><span style="color: #f92672">(!</span><span style="color: #f8f8f2">usedNodes</span><span style="color: #f92672">.</span><span style="color: #a6e22e">contains</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">node</span><span style="color: #f92672">))</span>
    <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">displayValue</span><span style="color: #f92672">++;</span>
        <span style="color: #f8f8f2">usedNodes</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">node</span><span style="color: #f92672">);</span>
        <span style="color: #f8f8f2">getNextLinkedNode</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">node</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">range</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">usedNodes</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">displayValue</span><span style="color: #f92672">);</span>
    <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
<span style="color: #f92672">}</span>
<span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span><span style="color: #f92672">(!</span><span style="color: #f8f8f2">a</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getLeftNodes</span><span style="color: #f92672">().</span><span style="color: #a6e22e">isEmpty</span><span style="color: #f92672">())</span>
<span style="color: #f92672">{</span>
    <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">INode</span> <span style="color: #f8f8f2">node</span> <span style="color: #f92672">:</span><span style="color: #f8f8f2">a</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getLeftNodes</span><span style="color: #f92672">())</span>
    <span style="color: #f92672">{</span>
    <span style="color: #66d9ef">if</span><span style="color: #f92672">(!</span><span style="color: #f8f8f2">usedNodes</span><span style="color: #f92672">.</span><span style="color: #a6e22e">contains</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">node</span><span style="color: #f92672">))</span>
    <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">displayValue</span><span style="color: #f92672">++;</span>
        <span style="color: #f8f8f2">usedNodes</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">node</span><span style="color: #f92672">);</span>
        <span style="color: #f8f8f2">getNextLinkedNode</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">node</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">range</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">usedNodes</span><span style="color: #f92672">,</span><span style="color: #f8f8f2">displayValue</span><span style="color: #f92672">);</span>
    <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
<span style="color: #f92672">}</span>
<span style="color: #66d9ef">else</span> <span style="color: #a6e22e">if</span><span style="color: #f92672">(!</span><span style="color: #f8f8f2">a</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getUpNodes</span><span style="color: #f92672">().</span><span style="color: #a6e22e">isEmpty</span><span style="color: #f92672">())</span>
<span style="color: #f92672">{</span>
    <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">INode</span> <span style="color: #f8f8f2">node</span> <span style="color: #f92672">:</span><span style="color: #f8f8f2">a</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getUpNodes</span><span style="color: #f92672">())</span>
    <span style="color: #f92672">{</span>
    <span style="color: #66d9ef">if</span><span style="color: #f92672">(!</span><span style="color: #f8f8f2">usedNodes</span><span style="color: #f92672">.</span><span style="color: #a6e22e">contains</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">node</span><span style="color: #f92672">))</span>
    <span style="color: #f92672">{</span>
        <span style="color: #f8f8f2">displayValue</span><span style="color: #f92672">++;</span>
        <span style="color: #f8f8f2">usedNodes</span><span style="color: #f92672">.</span><span style="color: #a6e22e">add</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">node</span><span style="color: #f92672">);</span>
        <span style="color: #f8f8f2">getNextLinkedNode</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">node</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">range</span><span style="color: #f92672">,</span> <span style="color: #f8f8f2">usedNodes</span><span style="color: #f92672">,</span><span style="color: #f8f8f2">displayValue</span><span style="color: #f92672">);</span>
    <span style="color: #f92672">}</span>
    <span style="color: #f92672">}</span>
<span style="color: #f92672">}</span>
<span style="color: #66d9ef">else</span> <span style="color: #66d9ef">return</span><span style="color: #f92672">;</span>
<span style="color: #f92672">}</span>
</pre></div>
`
      },
      {
        subTitle: 'Keep It Secret, Keep it Safe',
        description: `This function just grabs the node and adds it to the displayCase(called range in this function)`,
        code: 
`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">private</span> <span style="color: #66d9ef">static</span> <span style="color: #66d9ef">char</span><span style="color: #f92672">[][]</span> <span style="color: #a6e22e">addNodetoCase</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">INode</span> <span style="color: #f8f8f2">node</span><span style="color: #f92672">,</span> <span style="color: #66d9ef">char</span><span style="color: #f92672">[][]</span> <span style="color: #f8f8f2">range</span><span style="color: #f92672">,</span> <span style="color: #66d9ef">char</span> <span style="color: #f8f8f2">displayValue</span><span style="color: #f92672">)</span>
<span style="color: #f92672">{</span>
<span style="color: #75715e">//TODO add node to range</span>
<span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">x</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">node</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">x</span><span style="color: #f92672">;</span>
<span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">y</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">node</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">y</span><span style="color: #f92672">;</span>
<span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">x</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;=</span> <span style="color: #f8f8f2">node</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getMaxX</span><span style="color: #f92672">()-</span><span style="color: #ae81ff">1</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">i</span><span style="color: #f92672">++)</span>
<span style="color: #f92672">{</span>
    <span style="color: #66d9ef">for</span><span style="color: #f92672">(</span><span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">y</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">&lt;=</span> <span style="color: #f8f8f2">node</span><span style="color: #f92672">.</span><span style="color: #a6e22e">getRect</span><span style="color: #f92672">().</span><span style="color: #a6e22e">getMaxY</span><span style="color: #f92672">()-</span><span style="color: #ae81ff">1</span><span style="color: #f92672">;</span> <span style="color: #f8f8f2">j</span><span style="color: #f92672">++)</span>
    <span style="color: #f92672">{</span>
    <span style="color: #f8f8f2">range</span><span style="color: #f92672">[</span><span style="color: #f8f8f2">j</span><span style="color: #f92672">][</span><span style="color: #f8f8f2">i</span><span style="color: #f92672">]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">displayValue</span><span style="color: #f92672">;</span>
    <span style="color: #f92672">}</span>
<span style="color: #f92672">}</span>
<span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">range</span><span style="color: #f92672">;</span>
<span style="color: #f92672">}</span>
</pre></div>`
      }]


    }
  ];
  automations =
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
    },
    {
      id:1,
      title: 'lazygit',
      subtitle: 'This is the program that submits things to git for me. git add. git commit. git push.',
      codeLanguage: 'python',
      information: [{
        subTitle: 'this is the code.',
        description: ' This is the code',
        code: 
`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #75715e">#get the gits</span>
<span style="color: #f92672">import</span> <span style="color: #f8f8f2">os</span>
<span style="color: #75715e">#title of branch, commit message, and a list of file names</span>
<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">lazygit</span><span style="color: #f8f8f2">(branchTitle,</span> <span style="color: #f8f8f2">message,</span> <span style="color: #f8f8f2">fileNames):</span>
<span style="color: #f8f8f2">os</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">system(</span><span style="color: #e6db74">&quot;cd result&quot;</span><span style="color: #f8f8f2">)</span>
<span style="color: #f8f8f2">os</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">system(</span><span style="color: #e6db74">&quot;git checkout -b &quot;</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">branchTitle)</span>
<span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">fileNames:</span>
  <span style="color: #f8f8f2">os</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">system(</span><span style="color: #e6db74">&quot;git add &quot;</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">i)</span>
<span style="color: #f8f8f2">os</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">system(</span><span style="color: #e6db74">&quot;git commit -m </span><span style="color: #ae81ff">\&quot;</span><span style="color: #e6db74">&quot;</span><span style="color: #f92672">+</span> <span style="color: #f8f8f2">message</span> <span style="color: #f92672">+</span> <span style="color: #e6db74">&quot;</span><span style="color: #ae81ff">\&quot;</span><span style="color: #e6db74">&quot;</span><span style="color: #f8f8f2">)</span>
<span style="color: #f8f8f2">os</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">system(</span><span style="color: #e6db74">&quot;git push --set-upstream origin &quot;</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">branchTitle)</span>
</pre></div>
        `
      }]
    }
  ];
  completions = 
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
  ];
}
