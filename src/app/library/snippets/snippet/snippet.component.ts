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

  //data stores all the snippets. 
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
        code: `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f92672">import</span> <span style="color: #f8f8f2">json</span>
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
        subTitle: "to be determined",
        description: `this function helps me keep track of function calls through my programs.`,
        code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #75715e">#write to logs</span>
        <span style="color: #f92672">import</span> <span style="color: #f8f8f2">inspect</span>
        <span style="color: #f92672">from</span> <span style="color: #f8f8f2">datetime</span> <span style="color: #f92672">import</span> <span style="color: #f8f8f2">datetime</span>
        
        
        <span style="color: #75715e">#this function takes in a string, which can be json data, </span>
        <span style="color: #75715e"># or simply a description of what function ran, and what it did. </span>
        <span style="color: #75715e">#It uses the datetime to tell what and what time something happened</span>
        <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">writeToLogs</span><span style="color: #f8f8f2">(writings):</span>
          <span style="color: #66d9ef">with</span> <span style="color: #f8f8f2">open(</span><span style="color: #e6db74">&quot;logs.txt&quot;</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&quot;a&quot;</span><span style="color: #f8f8f2">)</span> <span style="color: #66d9ef">as</span> <span style="color: #f8f8f2">logs:</span> <span style="color: #75715e">#open file and write</span>
            <span style="color: #f8f8f2">logs</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">write(</span> <span style="color: #e6db74">&quot;at: &quot;</span>	<span style="color: #f92672">+</span> <span style="color: #f8f8f2">str(datetime</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">now())</span> <span style="color: #f92672">+</span> 
            <span style="color: #e6db74">&quot;:    &quot;</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">writings</span> <span style="color: #f92672">+</span>  <span style="color: #e6db74">&quot;</span><span style="color: #ae81ff">\\n</span><span style="color: #e6db74">&quot;</span><span style="color: #f8f8f2">)</span> <span style="color: #75715e">#write parameter to file</span>
        </pre></div>
        
        `
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
        code:`<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #75715e">#turns results into json for delivery</span>

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
        code: `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">public</span> <span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Node</span> <span style="color: #66d9ef">implements</span> <span style="color: #f8f8f2">INode</span> <span style="color: #f92672">{</span>
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
        code: `<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">	<span style="color: #66d9ef">private</span> <span style="color: #66d9ef">static</span> <span style="color: #66d9ef">void</span> <span style="color: #a6e22e">linkNodes</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">Node</span><span style="color: #f92672">...</span><span style="color: #a6e22e">nodes</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>

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
      </pre></div>
      `
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
  ]
}
