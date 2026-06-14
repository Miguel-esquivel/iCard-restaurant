import React from 'react';
import {Navigation} from './routes';
import 'semantic-ui-css/semantic.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <div>
      <AuthProvider>
        <Navigation />
        <ToastContainer 
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
      </AuthProvider>
    </div>
  )
}
