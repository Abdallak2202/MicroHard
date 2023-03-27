import React from 'react';
import auth0Client from '../../lib/auth0';

class Login extends React.Component {
  componentDidMount() {
    // If the user is already authenticated, redirect to the home page
    if (auth0Client.isAuthenticated()) {
      window.location.href = '/';
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <p>Please log in to continue:</p>
        <button onClick={auth0Client.login}>Log In</button>
      </div>
    );
  }
}

export default Login;