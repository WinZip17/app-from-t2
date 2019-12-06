import React from 'react';
import propTypes from "prop-types";
import ManLaptopV1 from "../../media/article/man-laptop-v1.svg";
import ManLaptopV2 from "../../media/article/man-laptop-v2.svg";
import {connect} from "react-redux";

const Block04 = (props) => {
    const viewBoxManLaptopV1 = `0 0 429 362`;
    const viewBoxManLaptopV2 = `0 0 343 407`;
    return (
        <div id='requirements' className="backgroundAlt4">
            <div className="alt4">
                <div className="heading4Shell">
                    <h3 className="heading4">
                        General requirements for the test task
                    </h3>
                </div>
                <div className="alt4Content">
                        {props.innerWidth > 1024 || props.innerWidth < 768 ? <ManLaptopV1 className="manLaptop aaa" viewBox={viewBoxManLaptopV1} /> : <ManLaptopV2 className="manLaptop bbb" viewBox={viewBoxManLaptopV2} />}
                    <div className="alt4Text">
                        <p className="paragraph4">
                            Users want to find answers to their questions quickly and data
                            shows that people really care about how quickly their pages load.
                            The Search team announced speed would be a ranking signal for
                            desktop searches in 2010 and as of this mount (July 2018), page
                            speed will be a ranking factor for mobile searches too.
                        </p>
                        <p className="paragraph4">
                            If you're a developer working on a site, now is a good time to
                            evaluate your performance using our speed tools. Think about now
                            performance affects the user experience of your pages and consider
                            measuring a variety of real-world {props.innerWidth < 768 && <br/>} user-centric performance metrics.
                        </p>
                        <p className="paragraph4">
                            Are you shipping too much JavaScript? Too many images? Images
                            and JavaScript are the most significant contributors to the page
                            weight that affect page load time based on data from HTTP Archive
                            and the Chrome User Experience Report - our public dataset for key
                            UX metrics as experienced by Chrome users under {props.innerWidth < 768 && <br/>} real-world
                            conditions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

Block04.propTypes = {
    innerWidth: propTypes.number
};


let mapStateToProps = (state) => {
    return {
        innerWidth: state.app.innerWidth
    }
};

export default connect(mapStateToProps)(Block04);
