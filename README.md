This is a sample WEB API that uses Node.js + Typescript to perform various actions on a text file (./storage.txt).

This uses HAPI to simulate a web server. https://hapijs.com/

The server automatically uses port 8080 (http://localhost:8080) and will accept the following operations:

<strong>READ</strong>:  Reads and displays each line & line # from the corresponding text file. Returns the items in a JSON object.
      <ul>
		<li>URL: http://localhost:8080/read</li>
		<li>HTTP METHOD: GET</li>
	</ul>

<strong>WRITE</strong>: Writes a line to the corresponding text file.

<ul>
	<li>URL:  http://localhost:8080/write</li>
	<li>HTTP METHOD: POST</li>
	<li>USAGE: A JSON object must be submitted in the body of the HTTP request. The key with the sentence to be inserted must be called 'Phrase'. EX: {"Phrase": "The sentence to be inserted into th text file"}</li>
</ul>
 
      
<strong>DELETE</strong>: Deletes a line from the corresponding text file based on the submitted line #.
    <ul>
	<li>URL: ttp://localhost:8080/delete/{id}</li>
	<li>HTTP METHOD: GET</li>
     </ul>
    
The web server configuration and router code is found in the ./server.js.

The code for the file operations are found in ./src/app.ts.



