import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { IoStar } from "react-icons/io5";
import bgPurple from "../images/bg-surligne-purple.png";

function Testimonial() {

    const testimonials = [
        {
            name: 'Lucas, 22 ans',
            text: "J'ai quitté mon boulot de vendeur pour devenir développeur web. Jamais je n'aurais cru être aussi heureux.",
            rating: 4
        },
        {
            name: 'Camille, 24 ans',
            text: "Partir de mon job de bureau pour devenir infirmière. Aider les gens chaque jour, c'est ça que j’aime faire.",
            rating: 5
        },
        {
            name: 'Thomas, 23 ans',
            text: "Travailler en banque ne m’a jamais plu. J’ai pu tester chef pâtissier et ça a été le coup de cœur. Aucun regret.",
            rating: 5
        },
        {
            name: 'Léa, 22 ans',
            text: "J’ai pu faire un stage qui a changé ma vie, je suis donc passée de l'ingénierie à l'artisanat.",
            rating: 4
        },
        {
            name: 'Max, 27 ans',
            text: "Je suis devenu couvreur grâce à un stage, puis j’ai fait une formation et ça me plaît.",
            rating: 4
        },
    ];

    const options = {
        loop: true,
        margin: 20,
        autoplay: true,
        dots: false,
        autoplayTimeout: 1800,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    }
    return (
        <div className="testimonial-part px-[1rem] sm:px-[2rem] grid grid-cols-12 gap-4 mt-24 rounded-xl">
            <div className="col-span-12">
                <div className="title-part relative mb-7 sm:mb-12">
                    <h1 className="text-sans text-3xl font-bold flex items-center justify-center gap-3">
                        <span className="relative inline-block">
                            <span className="relative">Ils parlent</span>
                            <span
                                className="absolute inset-0 z-0 bg-cover"
                                style={{
                                backgroundImage: `url(${bgPurple})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '0 50%'
                                }}
                            ></span>
                        </span>
                        {" "} de nous
                    </h1>
                </div>
            </div>
            <div className="col-span-12">
                <OwlCarousel className='owl-theme' {...options}>
                {testimonials.map((testimonial, index) => (
                        <div key={index} className='testimonial-box py-8 px-4 rounded-xl'>
                            <div className="testimonial-header flex items-center gap-3">
                                <div className="user-img w-10 h-10 rounded-full bg-black"></div>
                                <h1 className='font-sans text-lg text-black font-bold m-0'>{testimonial.name.toUpperCase()}</h1>
                            </div>
                            <p className='font-sans text-base font-medium w-52 mt-16'>{testimonial.text}</p>
                            <ul className="rating-part p-0 flex gap-3 mb-0 mt-36">
                                {[...Array(5)].map((star, i) => (
                                    <li key={i}>
                                        <IoStar className={i < testimonial.rating ? 'active-icon' : 'star-icon'} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Testimonial
