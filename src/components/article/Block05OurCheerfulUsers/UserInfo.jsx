import React from 'react';
import defUserPhoto from '../../../media/article/guest.png'
import {Tooltip} from "antd";
import propTypes from "prop-types";

const formattedPhone = (phone) => {
    let newPhone = "";
    if (phone.length === 13) {
        newPhone = `+38 (${phone.slice(3,6)}) ${phone.slice(6,9)} ${phone.slice(9,11)} ${phone.slice(11,13)}`
    } else {
        newPhone = phone
    }
    return newPhone
};

const UserInfo = (props) => {
    let user404 = "https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png";

    return (
        <div className='user-list-info'>
            <div className='shell-list-info'>
                <div className='avatarShell-list-info'>
                    <img className='avatar-list-info'
                         src={props.user.photo === user404 ? defUserPhoto : props.user.photo} alt="user logo"/>
                </div>
                <div className='content-list-info'>
                    <Tooltip placement="top" title={props.user.name.length > 26 && props.user.name}>
                        <div className='username-list-info'>{props.user.name}</div>
                    </Tooltip>
                    <div className='specialty-list-info'>{props.user.position}</div>
                    <Tooltip placement="top" title={props.user.email.length > 31 && props.user.email}>
                        <div className='mail-list-info'>{props.user.email}</div>
                    </Tooltip>
                    <div className='phone-list-info'>{formattedPhone(props.user.phone)}</div>
                </div>
            </div>
        </div>
    )
};

UserInfo.propTypes = {
    user: propTypes.object
};

export default UserInfo;

