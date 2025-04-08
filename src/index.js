import React from 'react';
import { createRoot } from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import App from './App';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';  // Add this first
import 'bootstrap/dist/css/bootstrap.min.css'; // Then Bootstrap
import './index.css'; // Your custom CSS last

Amplify.configure(awsExports);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);