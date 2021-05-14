import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import {Form, notification} from 'antd';
import {useCookies} from 'react-cookie';

import userAPI from '../../api/user';

import './style.css';


function ForgetPassword() {

    const [cookie, setCookie] = useCookies(["userToken", "user"]);
    const history = useHistory();

    const [user, setUser] = useState({email: "", code: "", newpassword: ""});
    
    const onSubmit = async () => {
        let {data} = await userAPI.forgotPassword(user);
        if(data.result){
            console.log("forgotPassword: ", data.result);
            setCookie("userToken", data.result.accesstoken, {path: '/'});
            setCookie("user", {avatar: data.result.avatar, name: data.result.name}, {path: '/'});
            history.push('/');
        }else{
            notification.error({message: data.message});
        }
    }

    const onChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }




    return (
        <div className="container">
            <Form>
                <div className="box-auth-inside">
                    <a href="#" className="a-img-logo"><img src="/icons/icon_white.png" alt="auth-img"></img></a>

                    <div className="input-group">
                        <label for="">Nhập email đăng ký tài khoản</label>
                        <input type="email" name="email" value={user.email} onChange={onChange}></input>
                        <p>Mã xác thực được gửi vào email </p>
                        <label for="">Nhập mã xác thực được gửi qua email</label>
                        <input type="code" name="code" value={user.code} onChange={onChange}></input>
                        <label>Nhập mật khẩu mới</label>
                        <input type="password" name="newpassword" value={user.newpassword} onChange={onChange}></input>
                        {/* <p id="eg" data-default-text="VD: 0912345789, abc123, abcdef@gmail.com">VD: 0912345789, abc123, abcdef@gmail.com</p> */}
                        <p>Mật khẩu cần bao gồm ít nhất 8 kí tự</p>
                    </div>

                    <button onClick={onSubmit} className="login-btn">Tiếp tục</button>
                    <br></br>

                    <a href="#" className="a-forget-pass">Không nhận được mã?</a>
                </div>
            </Form>
        </div>
    )
}

export default ForgetPassword

