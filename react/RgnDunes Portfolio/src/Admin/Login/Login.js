import React from "react";

import "./Login.css";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../hoc/StateProvider";
import { actionTypes } from "../../hoc/reducer";
import Logo from "../../assets/images/logo/logoRemoveBg.png";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__content">
        <h3>🔥🔥 Whoops 🎉🥳🎉 You unlocked a secret 🔥🔥</h3>
        <img src={Logo} alt="" />
        <button onClick={() => signIn()}>Sign In with Google</button>
      </div>
    </div>
  );
};

export default Login;
