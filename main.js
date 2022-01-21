http = require("http");
http.createServer(function ( request , response){
    response.writeHead (200, {"content-type" : "text/plain"});
    response.end('./index.html');
}).listen(8081);
console.log("server running at http://127.0.0.1:5500/about.html");
console.log("server running at http://127.0.0.1:5500/contact.html");
console.log("server running at http://127.0.0.1:5500/index.html");

// let list = ["Moses","John","Paul"]

// function Greeter() {
//     for (let i = 0; i < list.length; i++) {
//       console.log("Hello " + list[i])
//     }
        
    
// }

// Greeter()