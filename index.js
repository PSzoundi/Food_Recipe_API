const express = require('express')
const db = require('./config/config');
const bodyParser=require("body-parser");
const app = express()
const port = 5050
const cors = require('cors')

app.use(cors({
  origin: "http://localhost:3001"
}));
app.use(bodyParser.json());
db.authenticate()
    .then(()=>{
            return console.log('db is connected !!!')})
    .catch((err)=>{ return console.err(err)})
db.sync();

app.get('/', (req, res)=>{res.send("backend is working")});
app.use("/recipes", require('./routers/recipe'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})