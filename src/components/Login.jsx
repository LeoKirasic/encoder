import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    login();
  };

  return (
    <div className='Login'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          value={email}
          onChange={emailOnChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='text'
          name='password'
          value={password}
          onChange={passwordOnChange}
        />
        <input type='submit'></input>
      </form>
    </div>
  );
};

export default Login;
