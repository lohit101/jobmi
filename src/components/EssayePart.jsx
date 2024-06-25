import React from 'react';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function EssayePart() {

    const data = [
        {
          img: require("../images/essay-img-1.png"),
          percentage: "80%",
          text: "des personnes ayant changé de métier se disent plus satisfaites de leur travail après leur reconversion",
        },
        {
          img: require("../images/essay-img-2.png"),
          percentage: "50%",
          text: "des reconvertis ont vu une augmentation de leur salaire après avoir changé de métier",
        },
        {
          img: require("../images/essay-img-3.png"),
          percentage: "95%",
          text: "des reconvertis recommanderaient à d'autres de changer de métier pour suivre leur passion",
        },
        {
          img: require("../images/essay-img-4.png"),
          percentage: "60%",
          text: "des travailleurs ayant changé de carrière ont constaté une amélioration de leur équilibre travail-vie personnelle",
        },
      ];

    const options = {
        loop: false,
        margin: 20,
        autoplay: false,
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
        <div className="card-part px-[1rem] sm:px-[2rem] grid grid-cols-12 gap-4 mt-36" id='essaye-section'>

            <div className="title-part col-span-12 flex flex-col items-start gap-8 relative px-[0rem] sm:px-[3rem] border-b">
                <h1 className="text-3xl font-black font-sans w-full sm:w-56 flex flex-col gap-2">
                    Essaye avant de t’engager !
                    <img
                        src={require("../images/essay-underline-img.png")}
                        alt=""
                        className="w-36"
                    />
                </h1>
                <p className="font-sans w-full sm:w-96 mb-4 text-lg">
                    Participe à des stages de découverte pour expérimenter les métiers qui t’intéressent afin de confirmer ton orientation avant de te lancer.
                </p>
            </div>

            <div className="col-span-12">

                <OwlCarousel className='owl-theme' {...options}>
                {data.map((data, index) => (

                    <div key={index} className='py-8 px-4 rounded-xl'>
                        <div className="essay-box-content relative">
                            <div className="essay-img-box">
                                <img src={data.img} alt="" />
                            </div>
                            {/* <img src={require("../images/essai-icon.svg")} alt="" className='absolute top-2 right-0 h-3 w-2' /> */}
                            <div className="essay-content absolute bottom-4 left-0 px-3 w-full">
                                <h3 className='font-sans font-bold text-[60px] sm:text-[70px] text-white'>{data.percentage}</h3>
                                <p className='font-sans text-white text-[20px] sm:text-[15px] w-full'>{data.text}</p>
                            </div>
                        </div>
                    </div>

                ))}
                </OwlCarousel>

            </div>
        </div>
    );
}

export default EssayePart;