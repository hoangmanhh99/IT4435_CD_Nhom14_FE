import Form from 'antd/lib/form/Form';
import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router';
import RankSlide from './RankSlide';
import {notification} from 'antd';

import userAPI from '../../api/user';

import './style.css';



function Rank() {

    return (
        <div className="container">
            <RankSlide></RankSlide>
        </div>
    )
}

export default Rank;
