import React, { useState } from 'react';

const LoginForm = (props) => {
  const { handleLogin } = props;
  const [username, setUsername] = useState('');

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const onLoginClick = () => {
    handleLogin(username);
  };
  return (
    <div>
      <input placeholder="Enter your name" onChange={onChangeUsername}></input>
      <button onClick={onLoginClick}>Log In!</button>
    </div>
  );
};
export default LoginForm;
