import React from "react";
import propTypes from "prop-types";

const Successfully = (props) => {
    return (
        <div>
            <div className='fon-successfully'></div>
            <div className='congratulationsDiv-successfully'>
                <h3>Congratulations</h3>
                <p>You have successfully passed <br/>the registration</p>
                <button className="buttonText" onClick={() => {
                    props.isVisible(false)
                }}>OK
                </button>
            </div>
        </div>
    )
};

Successfully.propTypes = {
    isVisible: propTypes.func
};

export default Successfully;
