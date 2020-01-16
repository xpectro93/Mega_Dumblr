const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

let app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('nibbas we in here');

})

app.listen(port, ()=> {
  console.log(`Its ya boi, back at it again on port ${port} sending out the dumbest memes out there..`);
})
