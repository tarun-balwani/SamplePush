import React, { useState } from "react";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const setLoginAndUsername = (user) => {
    props.onLogin(user);
    setUsername('');
  };
  return (
    <div>
      <div className="txt_field">
        <input
          className="login__username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span></span>
        <label>Username</label>
      </div>
      <input
        className="login__button"
        type="button"
        value="Login"
        onClick={() => setLoginAndUsername(username)}
      />
    </div>
  );
}

export default LoginForm;
