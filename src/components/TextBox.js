import React from 'react';

import "../assets/scss/textBox.scss";

const TextBox = ({header, body, img, direction, headerSize, aos}) => {
    return (
        direction === 'column' ?
            <div className="text-box text-box-column" data-aos={aos}>
                <h1 className={headerSize}>{header}</h1>
                <div className="image-wrapper">
                    <img src={img} alt={header} className={direction === 'column' && 'column-box-image'}/>
                </div>
                <div className="text-wrapper">
                    <p>{body}</p>
                </div>
            </div>
            :
            <div className={`text-box ${direction === 'right' ? 'direction-row' : 'direction-row-reverse'}`}
                 data-aos={aos}>
                <div className="image-wrapper">
                    <img src={img} alt={header}/>
                </div>
                <div className="text-wrapper">
                    <h1 className={headerSize}>{header}</h1>
                    <p>{body}</p>
                </div>
            </div>
    )
}

export default TextBox;

