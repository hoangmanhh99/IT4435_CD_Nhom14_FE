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

function Register() {
    const initialUser = {
        name: '',
        password: '',
        email: ''
    }
    
  const [cookie, setCookie] = useCookies(["userToken", "user"]);
    const history = useHistory();

    const [userRes, setUserRes] = useState({email: "", password: ""});
    
    const onSubmit = async () => {
        let {data} = await userAPI.register(userRes);

        console.log("register: ", data);
        if(data.status){
            notification.success({message: 'Đăng ký tài khoản thành công!'});
            window.scrollTo(0, 0);
            history.push('/login');
        }
        else{
            notification.error({message: data.message});
        }
    }

    const onChange = (e) => {
        const {name, value} = e.target;
        setUserRes({...userRes, [name]: value});
    }


  function validateForm() {
    return userRes.email.length > 0 && userRes.password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
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
            value={userRes.email}
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
            value={userRes.password}
            onChange={onChange}
          />
        </Form.Group>
        <Button block size="lg" onClick={onSubmit} disabled={!validateForm()} className={styles.LoginBtn}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
