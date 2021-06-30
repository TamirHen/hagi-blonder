import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "../assets/scss/carouselGallery.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselGallery = ({images}) => {
    return (
        <>
            {images &&
            <Carousel
                className='carousel-gallery'
                autoPlay={false}
                infiniteLoop={false}
                interval={5 * 1000}
                showStatus={false}
                showIndicators={false}
                showThumbs={true}
                thumbWidth={80}
                emulateTouch
                swipeable
            >
                {
                    images.map((image, index) =>
                        <div key={`cs-${index}`} className="carousel-gallery-slide">
                            <img src={image.src} alt={image.alt} className="carousel-image"/>
                        </div>
                    )
                }
            </Carousel>
            }
        </>
    );
};

export default CarouselGallery;