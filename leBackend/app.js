const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

//Imported routes;
const index = require('./routes/index.js');

const app = express();

app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//TODO:un-comment once frontend is ready
// app.use(express.static(path.join(__dirname, "../leFrontend/build")));

app.use('/api/', index);
// app.use('/api/blogs', blogs);
// app.use('/api/users', users);
// app.use('/api/posts', posts);
// app.use('/api/tags', tags);
// app.use('/api/likes', likes);
// app.use('/api/followings', followings);
// app.use('/api/session', sess)

app.listen(port, ()=> {
  console.log(`Its ya boi, back at it again on port ${port} sending out the dumbest memes out there..`);
})
