import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { notification} from 'antd';
// import {useCookies} from 'react-cookie';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topnav from "../component/topnav/topnav";
import TitleM from "../component/text/title-m";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./login.module.css";

import userAPI from '../api/user';
import {useCookies} from 'react-cookie';

function Login() {
    const initialUser = {
        name: '',
        password: '',
        email: ''
    }
  const [cookie, setCookie] = useCookies(["userToken", "user"]);
    const history = useHistory();

    const [user, setUser] = useState({email: "", password: ""});
    // const [userRes, setUserRes] = useState(initialUser);
    const onSubmitLogin = async () => {
        let {data} = await userAPI.login(user);
        if(data.result){
            // console.log("login: ", data.result);
            setCookie("userToken", data.result.accesstoken, {path: '/'});
            setCookie("user", {avatar: data.result.avatar, name: data.result.name}, {path: '/'});
            // history.push('/');
        }else{
            notification.error({message: data.message});
        }
    }

  function validateForm() {
    return user.email.length > 0 && user.password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const onChange = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value});
}
  return (
    <div className={styles.LoginPage}>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          {/* <Form.Label className={styles.TitleM}>Email</Form.Label> */}
          <Form.Control
            className={styles.EmailInput}
            placeholder="Email"
            autoFocus
            type="email"
            name="email"
            value={user.email}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          {/* <Form.Label className={styles.TitleM}>Password</Form.Label> */}
          <Form.Control
            className={styles.PasswordInput}
            placeholder="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={onChange}
          />
        </Form.Group>
        <Button block size="lg" onClick={onSubmitLogin} disabled={!validateForm()} className={styles.LoginBtn}>
          Login
        </Button> 
      </Form>
    </div>
  );
}

export default Login;
