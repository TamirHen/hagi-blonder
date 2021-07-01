import React, {useState} from 'react';
import Hamburger from 'hamburger-react';
import globalStyle from '../assets/scss/_export.module.scss';

import {ReactComponent as FacebookIcon} from "../assets/images/facebook.svg";
import {ReactComponent as InstagramIcon} from "../assets/images/instagram.svg";
import {ReactComponent as YoutubeIcon} from "../assets/images/youtube.svg";

import "../assets/scss/navbar.scss";
import config from "../config.json";

const Navbar = ({refs}) => {
    const {navbar} = config;
    const {youtube, facebook, instagram} = navbar.urls;
    const {links} = navbar;
    const [isOpen, setOpen] = useState(false);

    const onButtonClickHandler = (index) => {
        refs?.current[index].scrollIntoView();
        setOpen(false);
    }

    return (
        <div className='navbar-wrapper'>
            <div className={`hamburger-wrapper ${isOpen && 'hamburger-nav-open'}`}>
                <Hamburger toggled={isOpen} toggle={setOpen}
                           duration={0.5} color={globalStyle.clrCream}/>
            </div>
            <nav className={isOpen ? 'nav-open' : 'nav-close'}>
                <div className="social-icons-wrapper">
                    <button><a href={"//"+youtube} target="_blank"><YoutubeIcon className="social-icon"/></a></button>
                    <button><a href={"//"+facebook} target="_blank"><FacebookIcon className="social-icon"/></a></button>
                    <button><a href={"//"+instagram} target="_blank"><InstagramIcon className="social-icon"/></a></button>
                </div>
                <div className="home">
                    <button key={'link-0'}
                            onClick={() => onButtonClickHandler(0)}>
                        {links[0]}
                    </button>
                </div>
                <div className="links">
                    {
                        links?.map((link, index) => {
                            if (index === 0) return;
                            return <button
                                key={'link-' + index}
                                onClick={() => onButtonClickHandler(index)}
                            >
                                {link}
                            </button>
                        })
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;