import React from 'react';
import auth0Client from '../../lib/auth0';

class Callback extends React.Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    window.location.href = '/';
  }

  render() {
    return <p>Loading profile...</p>;
  }
}

export default Callback;