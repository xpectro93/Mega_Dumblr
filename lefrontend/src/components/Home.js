import React from 'react';
import firebase from '../firebase.js';

const Home = _ => {
  return (
    <>
      <h1>This b HOME</h1>
      <button onClick={()=>firebase.auth()} > Sign Me the Fuck Out!</button>
    </>
  )
}
export default Home;