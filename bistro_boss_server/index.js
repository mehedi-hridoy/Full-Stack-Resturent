const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


// middleware 
app.use(cors());
app.use(express.json());


app.get('/',(req,res) => {
    res.send('Resturent is live Now')
})

app.listen(port, ()=> {
    console.log(`Website is running on ${port}`)
})