import { useState } from 'react';
import { magic } from '../../lib/magic';

export default function LoginPage() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const didToken = await magic.auth.loginWithMagicLink({ email });

    console.log('didToken:', didToken);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <button type="submit">Log in with Magic</button>
    </form>
  );
}



/* import { useState, useEffect } from 'react';
import { magic } from '../../lib/magic';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    magic.preload();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit called');

    const didToken = await magic.auth.loginWithMagicLink({ email });

    // Send the DID token to your Strapi backend for verification
    const response = await fetch('http://localhost:1337/auth/local/magic/callback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${didToken}`,
      },
    });

    if (response.ok) {
      // User is authenticated, redirect to the dashboard or other authorized page
      router.push('/');
    } else {
      // Authentication failed, show error message
      alert('Authentication failed');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Log in with Magic</button>
    </form>
  );
} */

















/* import React from 'react'
import { Magic } from 'magic-sdk';


const magic = new Magic('pk_live_ABD4599212DDEB6C');

// Log in the user using a Magic email link
async function login() {
  await magic.auth.loginWithMagicLink({ email });
}

// Log out the user
async function logout() {
  await magic.user.logout();
}

// Check if the user is currently authenticated
const isAuthenticated = magic.user.isLoggedIn();

export default function Login() {
  return (
    <div>login</div>
  )
} */
