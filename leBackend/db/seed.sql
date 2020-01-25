DROP DATABASE IF EXISTS mega_dumblr;
CREATE DATABASE mega_dumblr;


\c mega_dumblr;

CREATE TABLE users (
  -- id SERIAL PRIMARY KEY,
  uid VARCHAR PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  email VARCHAR NOT NULL UNIQUE,
  bio VARCHAR,
  pic_url VARCHAR

);

INSERT INTO users( uid, username, password, email,bio,pic_url) VALUES
('a0B19xDiuJdh5DwjMA5FErIkaQ53','Jon','jon@test.com','Howdy partnah','https://i.redd.it/0uco4l4i4jw11.jpg');