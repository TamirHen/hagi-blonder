import React from "react";
import {ReactComponent as LeavesBackground} from "./assets/images/Leaves.svg";
import {ReactComponent as Logo} from "./assets/images/logo.svg";
import Navbar from "./components/Navbar";

import "./assets/scss/app.scss";
import TextBox from "./components/TextBox";

import config from './config.json';

function App() {
    const {aboutUs} = config;
    return (
        <>
            <LeavesBackground className="leaves-background"/>
            <header className="header">
                <Navbar/>
            </header>
            <main>
                <section className="section-home">
                    <Logo className="logo"/>
                </section>
                <section className="section-about-us">
                    {aboutUs?.map((textBox, index) => {
                        const {header, body, image} = textBox;
                        return <TextBox key={'textbox-'+index} header={header} body={body} img={image} textSide={index % 2 === 0 ? 'right' : 'left'}/>;
                    })}
                </section>
            </main>
        </>
    );
}

export default App;
