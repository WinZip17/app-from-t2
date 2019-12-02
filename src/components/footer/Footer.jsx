import React from 'react';
import Facebook from '../../media/footer/facebook.svg'
import Instagram from '../../media/footer/instagram.svg'
import Linkedin from '../../media/footer/linkedin.svg'
import LogoAbz from '../../media/footer/logoAbz.svg'
import Mail from '../../media/footer/mail.svg'
import CellPhone from '../../media/footer/cellphone.svg'
import Phone from '../../media/footer/phone.svg'
import Pinterest from '../../media/footer/pinterest.svg'
import Twitter from '../../media/footer/twitter.svg'

const Footer = () => {
    return (
        <footer>
            <div className="footerMenuShell">
                <div className="logoBlock">
                    <LogoAbz className='footer-logo'/>
                </div>
                <menu className="footerMenu">
                    <li className="footerMenuItem"><a href="#">About me</a></li>
                    <li className="footerMenuItem"><a href="#">Relationships</a></li>
                    <li className="footerMenuItem"><a href="#">Requirements</a></li>
                    <li className="footerMenuItem"><a href="#">Users</a></li>
                    <li className="footerMenuItem"><a href="#">Sign Up</a></li>
                </menu>
            </div>
            <div className="contactsLink" id="about">
                <div className="contacts">
                    <div className="contacts-icon">
                        <Mail className='footerImgMail'/>
                        <Phone className='footerImgPhone' />
                        <CellPhone className='footerImgCellPhone' />
                    </div>
                    <div className="contacts-value">
                        <span>work.of.future@gmail.com</span>
                        <span>+38 (050) 789 24 98</span>
                        <span>+38 (095) 556 08 45</span>
                    </div>
                </div>
                <div className="link1">
                    <ul>
                        <li className="footerMenuItem"><a href="#">News</a></li>
                        <li className="footerMenuItem"><a href="#">Blog</a></li>
                        <li className="footerMenuItem"><a href="#">Partners</a></li>
                        <li className="footerMenuItem"><a href="#">Shop</a></li>
                    </ul>
                </div>
                <div className="link2">
                    <ul>
                        <li className="footerMenuItem"><a href="#">Overview</a></li>
                        <li className="footerMenuItem"><a href="#">Design</a></li>
                        <li className="footerMenuItem"><a href="#">Code</a></li>
                        <li className="footerMenuItem"><a href="#">Collaborate</a></li>
                    </ul>
                </div>
                <div className="link3">
                    <ul>
                        <li className="footerMenuItem"><a href="#">Tutorials</a></li>
                        <li className="footerMenuItem"><a href="#">Resources</a></li>
                        <li className="footerMenuItem"><a href="#">Guides</a></li>
                        <li className="footerMenuItem"><a href="#">Examples</a></li>
                    </ul>
                </div>
                <div className="link4">
                    <ul>
                        <li className="footerMenuItem"><a href="#">FAQ</a></li>
                        <li className="footerMenuItem"><a href="#">Terms</a></li>
                        <li className="footerMenuItem"><a href="#">Conditions</a></li>
                        <li className="footerMenuItem"><a href="#">Help</a></li>
                    </ul>
                </div>
            </div>
            <div className="social">
                <div className="socialContext">© abz.agency specially for the test task</div>
                <div className="socialIconShell">
                    <a className="socialIcon" href="#">
                        <Facebook className='socialIcon' />
                    </a>
                    <a className="socialIcon" href="#">
                        <Linkedin className='socialIcon' />
                    </a>
                    <a className="socialIcon" href="#">
                        <Instagram className='socialIcon' />
                    </a>
                    <a className="socialIcon" href="#">
                        <Twitter className='socialIcon' />
                    </a>
                    <a className="socialIcon" href="#">
                        <Pinterest className='socialIcon'  />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
