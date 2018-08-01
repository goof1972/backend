'use strict';

const Hapi=require('hapi');
const fa = require('./lib/app');
var actions = new fa.FileActions();
const fs = require('fs');


// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8080
});

// reads from the file
server.route({
    method:'GET',
    path:'/read',
    handler: function(request,h) { 
        
        return actions.read();
        
    }
});
// writes to the file
server.route({
    method:'POST',
    path:'/write',
    handler:function(request,h) { 
        
        actions.write(request.payload);
        return request.payload; //TODO return the line number as ID
    }
});

//delete a line from the file
server.route({
    method:'GET',
    path:'/delete/{id}',
    handler: function(request,h) { 
        
        return actions.delete(request.params.id);
        
    }
});

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();