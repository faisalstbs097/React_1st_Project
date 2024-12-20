import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Createtask from './components/other/Createtask.jsx'
import './index.css'; // Import Tailwind CSS
import AuthProvider from './context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* Wrapped App in Auth Context */}
          <AuthProvider>
             <App />
             <Createtask />
          </AuthProvider>
   
  </React.StrictMode>
);
