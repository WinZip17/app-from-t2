import React from 'react';
import propTypes from "prop-types";
import HtmlAlt3 from "../../media/article/html.svg"
import CssAlt3 from "../../media/article/css.svg"
import JsAlt3 from "../../media/article/javascript.svg"
import {connect} from "react-redux";

const Block03 = (props) => {
    const viewBoxManMobile = `0 0 100 114`
    return (
        <div id="relationships" className="backgroundAlt3">
            <div className="alt3">
                <div className="heading3Shell">
                    <h1 className="heading3Desktop">
                        About my relationships with <br/>
                        <span>web-development</span>
                    </h1>
                    <h1 className="heading3Mobile">
                        About my relationships with
                        web-development
                    </h1>
                </div>
                <div className="alt3Content">
                    <div className="infoCell">
                        <div className='imgAlt3Sell'> <HtmlAlt3 viewBox={viewBoxManMobile} className="imgAlt3"/></div>
                        <div className="textAl3Sell">
                            <h2> I'm in love with HTML</h2>
                            <p>
                                Hypertext Markup Language (HTML) {props.innerWidth < 768 && <br/>}is the
                                standard markup language for creating
                                web pages and web applications.
                            </p>
                        </div>
                    </div>
                    <div className="infoCell">
                        <div className='imgAlt3Sell'> <CssAlt3 viewBox={viewBoxManMobile} className="imgAlt3"/></div>
                        <div className="textAl3Sell">
                            <h2> CSS is my best friend</h2>
                            <p className="cssTextAlt3Sell">
                                Cascading Style Sheets (CSS)
                                is a style sheet language used for
                                describing the presentation of a
                                document written in a markup
                                language like HTML.
                            </p>
                        </div>
                    </div>
                    <div className="infoCell">
                        <div className='imgAlt3Sell'> <JsAlt3 viewBox={viewBoxManMobile} className="imgAlt3"/></div>
                        <div className="textAl3Sell">
                            <h2> JavaScript is my passion</h2>
                            <p>
                                JavaScript is a high-level, interpreted
                                programming language. It is a language
                                which is also characterized as dynamic,
                                weakly typed, prototype-based and
                                {props.innerWidth < 768 && <br/>}multi-paradigm.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

Block03.propTypes = {
    innerWidth: propTypes.number
};

let mapStateToProps = (state) => {
    return {
        innerWidth: state.app.innerWidth
    }
};

export default connect(mapStateToProps)(Block03);
