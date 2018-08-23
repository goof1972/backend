This is a sample WEB API that uses Node.js + Typescript to perform various actions on a text file (./storage.txt).

This uses HAPI to simulate a web server. https://hapijs.com/

The server automatically uses port 8080 (http://localhost:8080) and will accept the following operations:

READ:  Reads and displays each line & line # from the corresponding text file. Returns the items in a JSON object.
      Url: http://localhost:8080/read
      HTTP: GET

WRITE: Writes a line to the corresponding text file.
      Url:  http://localhost:8080/write
      HTTP: POST
      USAGE: A JSON object must be submitted in the body of the HTTP request. The key with the sentence to be inserted must be called 'Phrase'. EX: {"Phrase": "The sentence to be inserted into th text file"}
      
DELETE: Deletes a line from the corresponding text file based on the submitted line #.
    Url: ttp://localhost:8080/delete/{id}
    HTTP: GET
    
The web server configuration and router code is found in the ./server.js.

The code for the file operations are found in ./src/app.ts.



