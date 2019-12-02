import React from 'react';
import RegForms from "./RegForms";
import {connect} from "react-redux";
import propTypes from "prop-types";


const Block06Index = (props) => {
    return (
        <div className="backgroundAlt6" id='signUp'>
            <div className="alt6">
                <div className="headers6">
                    <h1> Register to get a work </h1>
                    <div className="paragraph6">
                        <p> Attention! After successful registration and {props.innerWidth < 768 && <br/>} alert, update the list of users {props.innerWidth < 768 && <br/>} in the
                            block from the top</p>
                    </div>
                </div>
                <RegForms />
            </div>
        </div>
    );
};

Block06Index.propTypes = {
    innerWidth: propTypes.number,
};

let mapStateToProps = (state) => {
    return {
        innerWidth: state.app.innerWidth
    }
};

export default connect(mapStateToProps)(Block06Index);
