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
    ]
}
