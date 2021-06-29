import React from 'react';
import {Img} from 'react-image';

import "../assets/scss/textBox.scss";

const TextBox = ({header, body, img, textSide, headerSize}) => {

    return (
        textSide === 'right' ?
            <div className="text-box">
                <div className="image-wrapper">
                    <img src={img} alt={header}/>
                </div>
                <div className="text-wrapper">
                    <h1 className={headerSize}>{header}</h1>
                    <p>{body}</p>
                </div>
            </div>
            :
            <div className="text-box">
                <div className="text-wrapper">
                    <h1 className={headerSize}>{header}</h1>
                    <p>{body}</p>
                </div>
                <div className="image-wrapper">
                    <img src={img} alt={header}/>
                </div>
            </div>
    )
}

export default TextBox;

