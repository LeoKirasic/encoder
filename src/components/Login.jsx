import React from 'react';
import { useNavigate } from 'react-router-dom';
import isFormValid from '../helpers/isFormValid';

const Login = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  let navigate = useNavigate();

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const login = async () => {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${email}&password=${password}`,
      });
      const data = await response.json();
      if (data.token === 'xyz0987654321') {
        props.handleAuthToken(data.token);
        props.handleLogin(true);
        navigate('/encoder');
      } else {
        console.error('Login failed');
      }
    };

    if (isFormValid(email, password)) {
      login();
    } else {
      console.error('Form validation failed');
    }
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          className='text-input'
          type='email'
          name='email'
          value={email}
          onChange={emailOnChange}
          required
        />
        <label htmlFor='password'>Password</label>
        <input
          className='text-input'
          type='password'
          name='password'
          value={password}
          onChange={passwordOnChange}
          required
        />
        <input type='submit' className='button'></input>
      </form>
    </div>
  );
};

export default Login;
