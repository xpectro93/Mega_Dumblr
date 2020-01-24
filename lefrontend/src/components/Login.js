import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../firebase.js";
import { AuthContext } from "../Auth.js";
import axios from 'axios';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        let res = await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          //res can b obtained by => res.user.uid
          console.log('Login Res => ', res);
          // TODO: figure out how to get this token to work on backened;
          //let token = firebase.auth().currentUser.getIdToken(false);
         //this token can b stored and sent to the backend to allow user to use something that is protected by middleware;token is a obj
         console.log('this is my uid =>', res.user.uid)
         let call = await axios.get(`http://localhost:3001/api/users/info/${res.user.uid}`);
         console.log('This is call => ', call);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  // if(currentUser !== null && history.location.pathname === "/login"){
  //   return (<h1>SADAJDHAJKDHLKAJHDJAHDKASHDKJAHDKJASHDAKJDHAKJSHDAKJDHSJK</h1>)
  // }
  console.log('this b history', history)
  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        
          <input name="email" type="email" placeholder="Email" />
        
        
          <input name="password" type="password" placeholder="Password" />
        
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);

//test user uid;
//a0B19xDiuJdh5DwjMA5FErIkaQ53
//a0B19xDiuJdh5DwjMA5FErIkaQ53
