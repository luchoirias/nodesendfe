import React from 'react'
import AppState from '../context/app/appState';
import AuthState from '../context/auth/authState';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthState>
      <AppState>     {/* Se consume el provider del context. */}
        <Component {...pageProps}/>
      </AppState>
    </AuthState>
    
  )
}

export default MyApp;
