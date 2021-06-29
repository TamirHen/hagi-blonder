import React from 'react';
import {Img} from 'react-image';

import "../assets/scss/textBox.scss";

const TextBox = ({header, body, img, textSide}) => {

    return (
        textSide === 'right' ?
            <div className="text-box">
                <Img src={img} alt={header} className="photo"/>
                <div className="text-wrapper">
                    <h1>{header}</h1>
                    <p>{body}</p>
                </div>
            </div>
            :
            <div className="text-box">
                <div className="text-wrapper">
                    <h1>{header}</h1>
                    <p>{body}</p>
                </div>
                <Img src='../assets/images/icon.svg' loader={<div>...</div>} alt={header} className="photo"/>
            </div>
    )
}

export default TextBox;

