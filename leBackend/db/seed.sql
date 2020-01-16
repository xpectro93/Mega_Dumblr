DROP DATABASE IF EXISTS mega_dumblr;
CREATE DATABASE mega_dumblr;


\c mega_dumblr;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  bio VARCHAR,
  pic_url VARCHAR

);

INSERT INTO users(username, password, email,bio,pic_url) VALUES
('Bro','Bruh','broscience@bromail.bro','Nothing Comes between me and my bros, bro. Not even another bro, but hes my bro still. Cause bros stick together, bro. ','https://pbs.twimg.com/profile_images/465854334333640704/yCMzjLkw.jpeg');