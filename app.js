const express = require("express"); 
const formidable = require("formidable");

const PORT = process.env.port || 5000
const app = express(); 

app.get("/", (req, res) => { 
    res.sendFile(__dirname + "/index.html");
}); 

app.post("/submit-form", (req, res) => { 
    var form = new formidable.IncomingForm(); 
    form.parse(req); 

    form.on("fileBegin", (name, file) => { 
        file.path = __dirname + "/uploads/" + file.name; 
    }); 

    form.on("file", (name, file) => { 
        console.log("Uploaded " + file.name); 
    });
    
    res.sendFile(__dirname + "/index.html"); 
}); 

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
