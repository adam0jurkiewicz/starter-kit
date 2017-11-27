import express from "express";
import path from "path";
import open from "open";
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});


app.get('/users', function(req,res){
    res.json([
        { "id" : 1, "firstName" : "Adam" },
        { "id" : 2, "firstName" : "John" },
        { "id" : 3, "firstName" : "Jerry" }
    ])
})

app.listen(port, function(err){
    if(err){
        console.log(err); // eslint-disable-line no-console
    }else{
        open("http://localhost:" + port);
    }
});
