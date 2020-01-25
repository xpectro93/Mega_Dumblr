import React, {useCallback} from 'react';
import {withRouter} from 'react-router';
import firebase from '../firebase.js';
import axios from 'axios';

const SignUp = ({history}) => {
  const handleSignUp = useCallback (
    async event => {
      event.preventDefault ();
      const {email, password} = event.target.elements;
      try {
        let res = await firebase
          .auth ()
          .createUserWithEmailAndPassword (email.value, password.value);
          let createUser = await axios.post('http://localhost:3001/api/users/',{})
        history.push ('/');
      } catch (error) {
        alert (error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter (SignUp);

//signup test user don@test.com
//CeZlwcstZDS80N20jUyOsRNj2ei2
//CeZlwcstZDS80N20jUyOsRNj2ei2
