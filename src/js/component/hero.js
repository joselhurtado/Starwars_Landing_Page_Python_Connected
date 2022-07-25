import React from "react";
import { Link } from "react-router-dom";
import Hero1 from "/src/img/vr-hero-desktop_1.webp";
import Hero4 from "/src/img/vr-hero-desktop_4.webp";
import Hero5 from "/src/img/vr-hero-desktop_5.webp";


export const Hero = () => {
	return (
        <div id="carouselExampleCaptions" className="carousel slide container" data-bs-ride="carousel">
            
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={Hero1} className="d-block heroImage" alt="Dark Vader Image" />
            <div className="carousel-caption d-none d-md-block m-4">
                <h5>DARK VADER</h5>
                <p>Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of the Force.</p>
                <Link to="/character/4">
				<span className="btn btn-warning" href="#" role="button">
					Discover
				</span>
			</Link>
            </div>
            </div>

            <div className="carousel-item">
            <img src={Hero4} className="d-block heroImage" alt="Millennial Flacon Image" />
            <div className="carousel-caption d-none d-md-block m-4">
                <h5>MILLENNIAL FALCON</h5>
                <p>The Falcon looks like a worn-out junker, but beneath her hull she’s full of surprises.</p>
                <Link to="/vehicle/0">
				<span className="btn btn-warning" href="#" role="button">
					Read More
				</span>
			</Link>
            </div>
            </div>

            <div className="carousel-item">
            <img src={Hero5} className="d-block heroImage" alt="Coruscant Planet Image" />
            <div className="carousel-caption d-none d-md-block m-4">
                <h5>CORUSCANT</h5>
                <p>Coruscant is the vibrant heart and capital of the galaxy, featuring a diverse mix of citizens and culture.</p>
                <Link to="/planet/9">
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