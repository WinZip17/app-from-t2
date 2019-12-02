import React, {useEffect} from 'react';
import propTypes from 'prop-types';
import SignOut from '../../media/header/sign-out.svg'
import {getUsersByIdThunkCreator} from "../../store/actions/auth";
import {connect} from "react-redux";
import Preloader from "../common/Preloader";
import {Tooltip} from "antd";


const UserInfo = (props) => {

    useEffect (() => {
        props.getUsersById(1)
    }, [props.user.position_id])

    return props.user.position_id ? <div className="user">
        <div className="userInfo">
            <Tooltip placement="bottom" title={props.user.name}>
                <span className="userName">{props.user.name}</span>
            </Tooltip>
            <Tooltip placement="bottom" title={props.user.email}>
                <span className="userMail">{props.user.email}</span>
            </Tooltip>
        </div>
        <img className="avatar" src={props.user.photo} alt="avatar"/>
        <button className="singOutButton"><SignOut className="singOut" /></button>
    </div> : <div className="userInfo"><Preloader /></div>
};

UserInfo.propTypes = {
    user: propTypes.object,
    getUsersById: propTypes.func
};

let mapStateToProps = (state) => {
    return {
        user: state.authUser.superUserInfo
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getUsersById: (id) => {
            dispatch(getUsersByIdThunkCreator(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
