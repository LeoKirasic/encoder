import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Encoder from './components/Encoder';
import React from 'react';

const App = () => {
  const [authToken, setAuthToken] = React.useState();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleAuthToken = (value) => {
    setAuthToken(value);
  };
  const handleLogin = (value) => {
    setIsLoggedIn(value);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Login
                handleAuthToken={handleAuthToken}
                handleLogin={handleLogin}
              />
            }
          ></Route>
          <Route
            path='/encoder'
            element={<Encoder authToken={authToken} isLoggedIn={isLoggedIn} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
