import React from 'react';

const Encoder = (props) => {
  const [encoded, setEncoded] = React.useState('');
  const [text, setText] = React.useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const encode = async () => {
      const response = await fetch('http://localhost:3001/encoder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          authorization: props.authToken,
        },
        body: `text=${text}`,
      });
      const data = await response.json();
      setEncoded(data);
    };
    encode();
  };

  if (!props.isLoggedIn) {
    return <div>You must be logged in to view this page</div>;
  } else {
    return (
      <div className='Encoder'>
        <div>{encoded}</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='text'>Text:</label>
          <input
            type='text'
            onChange={handleTextChange}
            className='text-input'
          />
          <input type='submit' className='button' />
        </form>
      </div>
    );
  }
};

export default Encoder;
