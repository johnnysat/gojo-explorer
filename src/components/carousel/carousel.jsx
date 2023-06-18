import React, { useState } from 'react';
import './carousel.css';
import gojoImg from '../../images/satoru.jpg';
import sukunaImg from '../../images/ryomen.jpg';
import itadoriImg from '../../images/yuji.jpg';

export default function Carousel() {
    const [slide, setSlide] = useState(0);
    const totalSlides = 3;

    const nextSlide = () => {
        setSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        console.log('clicou prox')
    }

    const prevSlide = () => {
        setSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
        console.log('clicou ant')
    }


    return (
        <div className="carousel">
            <div
                className="carousel-container"
                style={{ transform: `translateX(-${slide * 100}%)` }}
            >
                <div className="carousel-item">
                    <img src={itadoriImg} alt="Itadori Yuuji" />
                </div>
                <div className="carousel-item">
                    <img src={sukunaImg} alt="Sukuna no corpo de Itadori" />
                </div>
                <div className="carousel-item">
                    <img src={gojoImg} alt="Satoru Gojo" />
                </div>
            </div>
            <a className="carousel-control prev" href="#" onClick={prevSlide}>&#10094;</a>
            <a className="carousel-control next" href="#" onClick={nextSlide}>&#10095;</a>
        </div>
    );
}
