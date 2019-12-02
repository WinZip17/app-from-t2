import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getUsersThunkCreator, showUsersThunkCreator} from "../../../store/actions/ourCheerfulUsers";
import UserInfo from "./UserInfo";
import propTypes from "prop-types";

let count

const UserList = (props) => {

    useEffect(() => {
        count = props.innerWidth > 768 ? 6 : 3
        !props.userList.lastPage && props.getUsersThunk(1, count)
    }, [props.innerWidth])

    return <div className="UserListContainer">
        {props.userList.lastPage ? <div className="usersList">
            {props.userList.userElementsList.users.map((users) => <UserInfo
                key={users.id} user={users}/>)}
        </div> : <div/>}

        {props.userList.total_pages === props.userList.lastPage + 1
            ? <div></div>
            : <div className="alt5Button">
                <button onClick={() => {
                    props.showMoreUsers(props.userList.lastPage + 1, count)
                }} className="buttonSecondary">Show more
                </button>
            </div>}
    </div>
};

UserList.propTypes = {
    userList: propTypes.object,
    innerWidth: propTypes.number,
};


let mapStateToProps = (state) => {
    return {
        userList: state.userList,
        innerWidth: state.app.innerWidth
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        getUsersThunk: (page , count) => {
            dispatch(getUsersThunkCreator(page , count));
        },
        showMoreUsers: (page , count) => {
            dispatch(showUsersThunkCreator(page , count))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

