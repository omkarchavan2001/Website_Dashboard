const express = require('express');
const obj = express();
const port = 5000;

obj.use(express.static('app'));

obj.listen(port, ()=>{
    console.log(`Website start on port ${port}`)
})