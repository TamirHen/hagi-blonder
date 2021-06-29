import React from 'react';

import "../assets/scss/navbar.scss";
import config from "../config.json";

const Navbar = () => {
    const {navbar} = config;
    const {links} = navbar;

    return (
        <nav>
            <div className="home">
                <button>{links[0]}</button>
            </div>
            <div className="links">
                {
                    links?.map((link, index) => {
                        if (index === 0) return;
                        return <button key={'link-'+index}>
                            {link}
                        </button>
                    })
                }
            </div>
        </nav>
    );
};

export default Navbar;