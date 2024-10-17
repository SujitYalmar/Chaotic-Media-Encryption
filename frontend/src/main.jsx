import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-8qjk72vdk74r13g2.us.auth0.com"
    clientId="pYCJSQnjWDcVwtNKoi7sR3rCMIE1CUmY"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
        <App />
    
  </Auth0Provider>
);
