import React from "react";
import { Link } from "react-router-dom";
import Hero1 from "/src/img/vr-hero-desktop_1.webp";
import Hero2 from "/src/img/vr-hero-desktop_2.webp";
import Hero3 from "/src/img/vr-hero-desktop_3.webp";


export const Hero = () => {
	return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={Hero1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block m-4">
                <h5>DARK VADER</h5>
                <p>Some representative placeholder content for the first slide.</p>
                <Link to="/">
				<span className="btn btn-warning" href="#" role="button">
					Discover
				</span>
			</Link>
            </div>
            </div>

            <div className="carousel-item">
            <img src={Hero2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block m-4">
                <h5>YODA JEDI MASTER</h5>
                <p>Some representative placeholder content for the second slide.</p>
                <Link to="/">
				<span className="btn btn-warning" href="#" role="button">
					Read More
				</span>
			</Link>
            </div>
            </div>

            <div className="carousel-item">
            <img src={Hero3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block m-4">
                <h5>STORMTROOPERS</h5>
                <p>Some representative placeholder content for the third slide.</p>
                <Link to="/">
				<span className="btn btn-warning" href="#" role="button">
					Read More
				</span>
			</Link>
            </div>
            </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
	);
};

export default Hero;