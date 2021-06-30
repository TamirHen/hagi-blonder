import React, {useState} from 'react';
import Hamburger from 'hamburger-react';
import globalStyle from '../assets/scss/_export.module.scss';

import "../assets/scss/navbar.scss";
import config from "../config.json";

const Navbar = () => {
    const {navbar} = config;
    const {links} = navbar;
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='navbar-wrapper'>
            <div className='hamburger-wrapper'>
                <Hamburger toggled={isOpen} toggle={setOpen}
                           duration={0.5} color={globalStyle.clrCream}/>
            </div>
            <nav className={isOpen ? 'nav-open' : 'nav-close'}>
                <div className="home">
                    <button>{links[0]}</button>
                </div>
                <div className="links">
                    {
                        links?.map((link, index) => {
                            if (index === 0) return;
                            return <button key={'link-' + index}>
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