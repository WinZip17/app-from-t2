import React from 'react';
import UserListInfo from "./UserList";

const Block05index = () => {
    return (
        <div id='users' className="backgroundAlt5">
            <div className="alt5">
                <div className="headers5">
                    <h1> Our cheerful users </h1>
                    <h2> Attention! Sorting users by registration date</h2>
                </div>
                <UserListInfo />
            </div>
        </div>
    )
};


export default Block05index;
