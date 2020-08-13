const express = require('express')
const app = express();

app.get('/', (req,res)=>{
 res.send({msg: "Mi primera prueba"});
});


app.listen(5000, () => console.log("servidor coriendo"));
console.log("Hola mundo desde CI/CD usando GithubActions");

