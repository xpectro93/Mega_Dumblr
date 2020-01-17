import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../firebase.js";
import { AuthContext } from "../Auth.js";

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
         let token = firebase.auth().currentUser.getIdToken(false);
         //this token can b stored and sent to the backend to allow user to use something that is protected by middleware;token is a obj
         console.log('Yo, this is my logged in token -> ',token)
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

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);

//test user uid;
//a0B19xDiuJdh5DwjMA5FErIkaQ53
//a0B19xDiuJdh5DwjMA5FErIkaQ53
