import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './contexts/AuthContext';
import { MessageContextProvider } from './contexts/MessageContext';
import { ShowLoaderContextProvider } from './contexts/ShowLoaderContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MessageContextProvider>
        <ShowLoaderContextProvider>
          <App />
        </ShowLoaderContextProvider>
      </MessageContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();