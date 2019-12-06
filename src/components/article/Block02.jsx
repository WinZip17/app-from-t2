import React from 'react';
import ManMobile from '../../media/article/man-mobile.svg';

const Block02 = () => {
    const viewBoxManMobile = `0 0 289 285`;
    return (
        <div className="backgroundAlt2">
            <div className="alt2">
                <div className="heading2Shell">
                    <h2 className="heading2">
                        Let's get acquainted
                    </h2>
                </div>
                <div className="alt2Content">
                    <div className="manMobileShell"><ManMobile viewBox={viewBoxManMobile} className="manMobile" /></div>
                    <div className="alt2Text">
                        <h4>I am cool frontend developer</h4>
                        <p className="p2">When real users have a slow experience on mobile, they're much less
                            likely to find what they
                            are looking for or purchase from you in the future. For many sites this equates to a
                            huge
                            missed opportunity, especially when more than half of visits are abandoned if a
                            mobile page
                            takes over 3 seconds to load.</p>
                        <p className="p2">Last week, Google Search and Ads teams announced two new speed
                            initiatives to help
                            improve user-experience on the web.</p>
                        <div className="buttonText" onClick={() => {
                            window.location.hash = "signUp"
                        }}>Sign Up
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Block02;
