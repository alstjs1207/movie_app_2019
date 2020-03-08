const express = require('express');
const app = express();
//const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;


//app.use(cors());


app.use(bodyParser.json());
app.use('/test', (req, res)=> res.json({username:'lotts'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})
