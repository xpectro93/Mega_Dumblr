import React from "react";
import firebase from "../firebase";

const Home = () => {
  return (
    <>
      <h1>Smile and wave, boys, smileee and waave...</h1>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;