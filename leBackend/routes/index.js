const index = require ('express').Router ();

index.get ('/', (req, res) => {
  res.json ({title: 'Expresss'});
});

module.exports = index;
