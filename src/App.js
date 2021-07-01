import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {ReactComponent as LeavesBackground} from "./assets/images/Leaves.svg";
import {ReactComponent as Logo} from "./assets/images/logo.svg";
import Navbar from "./components/Navbar";

import "./assets/scss/app.scss";
import TextBox from "./components/TextBox";

import config from './config.json';
import CarouselGallery from "./components/CarouselGallery";
import ContactUs from "./components/ContactUs";

function App() {
    const {aboutUs, services, gallery, contactUs} = config;

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    const renderServices = () => {
        let textBoxes = [];
        const boxes = services.boxes;
        for (let i = 0; i < boxes.length; i++) {
            const {header, body, image, direction} = boxes[i];
            let aos = `fade-${i % 2 === 0 ? 'right' : 'left'}`;

            if (i === 2 && boxes.length > 3) {
                let {header, body, image, direction} = boxes[i];
                const firstBox = <TextBox key={'services-textbox-' + i} header={header} body={body} img={image}
                                          aos={aos}
                                          direction={direction ? direction : i % 2 === 0 ? 'left' : 'right'}
                                          headerSize='m'/>;
                i++;
                aos = `fade-${i % 2 === 0 ? 'right' : 'left'}`;
                header = boxes[i].header
                body = boxes[i].body
                image = boxes[i].image
                direction = boxes[i].direction
                const secondBox = <TextBox key={'services-textbox-' + i} header={header} body={body} img={image}
                                           aos={aos}
                                           direction={direction ? direction : i % 2 === 0 ? 'left' : 'right'}
                                           headerSize='m'/>;
                textBoxes.push(
                    <div className='two-in-row' key='tb-two-in-one'>
                        {firstBox}
                        <div className='space'/>
                        {secondBox}
                    </div>
                )

            } else {
                textBoxes.push(<TextBox key={'services-textbox-' + i} header={header} body={body} img={image}
                                        aos={aos}
                                        direction={direction ? direction : i % 2 === 0 ? 'left' : 'right'}
                                        headerSize='m'/>)
            }
        }
        return textBoxes;
    }

    return (
        <>
            <LeavesBackground className="leaves-background"/>
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
                        const {header, body, image, direction} = textBox;
                        return <TextBox key={'aboutus-textbox-' + index}
                                        aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`} header={header}
                                        body={body} img={image}
                                        direction={direction ? direction : index % 2 === 0 ? 'right' : 'left'}/>;
                    })}
                </section>
                <section className="section-services">
                    <h1 data-aos="fade-down">{services.header}</h1>
                    {renderServices()}
                </section>
                <section className="section-gallery" data-aos="fade-down">
                    <CarouselGallery images={gallery}/>
                </section>
                <section className="section-contact-us">
                    <h1 data-aos="fade-down">{contactUs.header}</h1>
                    <ContactUs/>
                </section>
            </main>
        </>
    );
}

export default App;
