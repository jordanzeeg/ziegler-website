import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss']
})
export class SnippetComponent implements OnInit {

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
      subTitle: 'default',
      codeLanguage:'defaultLang',
      description: `default query`,
      code:`print("Hello World")`
    },
    {
      id: 1,
      title: 'api.py',
      codeLanguage:'Python',
      information: [{
        subTitle: 'So you want to run your own API?',
        description: `What you need and why you need it. `,
        code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f92672">from</span> <span style="color: #f8f8f2">flask</span> <span style="color: #f92672">import</span> <span style="color: #f8f8f2">Flask,</span> <span style="color: #f8f8f2">jsonify,</span> <span style="color: #f8f8f2">request</span>
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
        code: ``
      }
    
    ]
      
      
    }
  ]
}
