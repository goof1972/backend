const util = require('util');
const fs = require('fs');



export class FileActions{
    private path:string = "./storage.txt";
    public constructor(){}
    public async read(){        
        let output:string[] = [];
        let out:any = {"phrases":[]};

        try{
            let read:any = util.promisify(fs.readFile);
            let content:any = await read(this.path);
            
            output = content.toString().split("\n");
            
            for(let x:number = 1; x <= output.length; x++){
                out.phrases.push({
                    "id":x,
                    "phrase":output[x-1]
                })
            }
        }
        catch(err){
            console.log(err);
        }

      
          return out;

    }
    public async write(input:any){ 
        try{            
            
            if(input.hasOwnProperty("phrase")){
                let phrase:string = "\n" + input.phrase;
                const file = fs.createWriteStream(this.path, {flags: 'a'});
                file.write(phrase);
                file.end();

                //Read a file and get the last line number
                let read = util.promisify(fs.readFile);
                let content:any = await read(this.path);
                return {"id": content.toString().split("\n").length.toString()}
            }else{
                throw "Invalid input: \"phrase\" field is missing.";
            }
        }catch(err){
            console.log(err);
        }
    }
    public async delete(id:number){
        let output:string[] = [];
        let out:any = {"success":false};

        try{
            let read:any = util.promisify(fs.readFile);
            let write:any = util.promisify(fs.writeFile);
            let content:any = await read(this.path);
            
            output = content.toString().split("\n");
            
            if(id > output.length || id < 1){
                out.success = false;
            }else{
                output.splice(id-1,1);               
                await write(this.path,output.join("\n"));
                out.success = true;                
            }
            
        }
        catch(err){
            console.log(err);
        }

      
         return out;

    }
}

