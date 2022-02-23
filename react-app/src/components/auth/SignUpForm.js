import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import logo from '../../images/logo.png'
import * as sessionActions from "../../store/session"

import "../SplashPage/SignupFormModal/SignUpForm.css"

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [age, setAge] = useState();
  const [profileImgUrl, setProfileImageUrl] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeatPassword] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (
    //   email.includes("@") &&
    //   password.length >= 6 &&
    //   username.length >= 2 &&
    //   first_name.length >= 4 &&
    //   last_name.length >= 4 &&
    //   profileImgUrl.length >= 10 &&
    //   age >= 13 &&
    //   repeat_password === password
    // ) {
    //   setDisableButton(false);

    // } else {
    //   setDisableButton(true);
    // }

    let errorsValidation = []
    if(!email.includes("@")) errors.push("Please provide a valid email")
    setErrors(errorsValidation)

    //ADD MESSAGE FOR ERRORS
  }, [disableButton, email, password, repeat_password, username, first_name, last_name, age, profileImgUrl]);

  const onSignUp = async (e) => {
    e.preventDefault();
    const payload = {
      first_name,
      last_name,
      age,
      profileImgUrl,
      username,
      email,
      password,
      repeat_password
    }
      const data = await dispatch(signUp(payload));
      if (data) {
        setErrors(data)
      }
  };
  const updateFirstlName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateAge = (e) => {
    setAge(e.target.value)
  }

  const updateProfileImageUrl = (e) => {
    setProfileImageUrl(e.target.value)
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/pins' />;
  }

  return (
    <div className='signup-form-container'>
      <img className='logo-signup' src={logo} alt='logo' />
      <h1 className='welcome-header'>Welcome to Pind</h1>
      <form autoComplete="off" className="splash-login-form" onSubmit={onSignUp}>
      <div className="signup-error-container">
        {errors.map((error, ind) => (

          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="login-input-container">
        <div className="input-container">
          <input
            placeholder="First Name"
            className="form-input"
            type="text"
            name="first_name"
            onChange={updateFirstlName}
            value={first_name}
            required={true}
          ></input>
          <label className="form-label"></label>
        </div>
        <div className="input-container">
          <input
            placeholder="Last Name"
            className="form-input"
            type="text"
            name="last_name"
            onChange={updateLastName}
            value={last_name}
            required={true}
          ></input>
          <label className="form-label"></label>
        </div>
        <div className="input-container">
          <input
            placeholder="Age"
            className="form-input"
            type="number"
            name="Age"
            onChange={updateAge}
            value={age}
            required={true}
          ></input>
          <label className="form-label"></label>
        </div>
        <div className="input-container">
          <input
            placeholder="Profile Image URL"
            className="form-input"
            type="text"
            name="profile-image-url"
            onChange={updateProfileImageUrl}
            value={profileImgUrl}
            required={true}
          ></input>
          <label className="form-label"></label>
        </div>
        <div className="input-container">
          <input
            placeholder="User Name"
            className="form-input"
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
            required={true}
          ></input>
          <label className="form-label"></label>
        </div>
        <div className="input-container">
          <input
            placeholder="Email"
            className="form-input"
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
            required={true}
          ></input>
          <label className="form-label" htmlFor="email"></label>
        </div>
        <div className="input-container">
          <input
            placeholder="Password"
            className="form-input"
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
            required={true}
          ></input>
          <label className="form-label" htmlFor="password"></label>
        </div>
        <div className="input-container">
          <input
            placeholder="Repeat Password"
            className="form-input"
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeat_password}
            required={true}
          ></input>
          <label className="form-label" htmlFor="password"></label>
        </div>
        <button className="form-button" type="submit">
          Sign Up
        </button>
        <div className='small-text'>By continuing, you are not agreeing to any <strong>Terms of Service</strong> and you are not acknowledged to read any <strong>Privacy Policies</strong></div>
      </div>
    </form>

    </div>
    // <form onSubmit={onSignUp}>
    //   <div>
    //     {errors.map((error, ind) => (
    //       <div key={ind}>{error}</div>
    //     ))}
    //   </div>
    //   <div>
    //     <label>User Name</label>
    //     <input
    //       type='text'
    //       name='username'
    //       onChange={updateUsername}
    //       value={username}
    //     ></input>
    //   </div>
    //   <div>
    //     <label>Email</label>
    //     <input
    //       type='text'
    //       name='email'
    //       onChange={updateEmail}
    //       value={email}
    //     ></input>
    //   </div>
    //   <div>
    //     <label>Password</label>
    //     <input
    //       type='password'
    //       name='password'
    //       onChange={updatePassword}
    //       value={password}
    //     ></input>
    //   </div>
    //   <div>
    //     <label>Repeat Password</label>
    //     <input
    //       type='password'
    //       name='repeat_password'
    //       onChange={updateRepeatPassword}
    //       value={repeatPassword}
    //       required={true}
    //     ></input>
    //   </div>
    //   <button type='submit'>Sign Up</button>
    // </form>
  );
};

export default SignUpForm;
