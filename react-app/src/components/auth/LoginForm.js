import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import logo from '../../images/logo.png'
import * as sessionActions from "../../store/session"
import "../SplashPage/LoginFormModal/LoginForm.css"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()

  useEffect(() => {
    if (email.includes("@") && password.length >= 8) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [disableButton, email, password]);

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      history.push("/pins")
    }

  };

  const handleDemoLogin = () => {
    const email = 'demo@aa.io'
    const password = 'password'
    dispatch(login(email, password));
    history.push("/pins")
}

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/pins' />;
  }

  return (
    <div className='login-form-container'>
      <img className='logo' src={logo} alt='logo' />
      <h1 className='welcome-header'>Welcome to Pind</h1>
      <form className="splash-login-form" onSubmit={onLogin}>
      <div className="login-error-container">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="login-input-container">
        <div className="input-container">
          <input
            className="form-input"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            required={true}
          />
          <label className="form-label" htmlFor="email"></label>
        </div>
        <div className="input-container">
          <input
            className="form-input"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            required={true}
          />
          <label className="form-label" htmlFor="password"></label>
        </div>
        <button className="form-button" disabled={disableButton} type="submit">
          Login
        </button>
        <div className='divider'>OR</div>
        <button className='demo-form-button' onClick={handleDemoLogin}>Log in with DEMO</button>
        <div className='small-text'>By continuing, you are not agreeing to any <strong>Terms of Service</strong> and you are not acknowledged to read any <strong>Privacy Policies</strong></div>
      </div>
    </form>

    </div>

  );
};

export default LoginForm;
