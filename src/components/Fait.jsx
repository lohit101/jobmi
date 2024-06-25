// src/components/TestComponent.js
import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Fait() {

  const logos = [
    {
      name: "Logo AFM Téléthon",
      logo: require("../images/afm-telethon.svg"),
    },
    {
      name: "Logo Transition Pro",
      logo: require("../images/transition-pro.svg"),
    },
    {
      name: "Logo Ma Formation",
      logo: require("../images/ma-formation.svg"),
    },
    {
      name: "Logo DC Campus",
      logo: require("../images/dc-campus.svg"),
    },
    {
      name: "Logo Open Classroom",
      logo: require("../images/open-classroom.svg"),
    },
    {
      name: "Logo Double Ville",
      logo: require("../images/double-ville.svg"),
    },
    {
      name: "Logo Solinum",
      logo: require("../images/solinum.svg"),
    },
    {
      name: "Logo France Travail",
      logo: require("../images/france-travail.svg"),
    }
  ]


  const options = {
    loop: true,
    margin: 20,
    autoplay: true,
    dots: false,
    autoplayTimeout: 1800,
    autoplaySpeed: 800,
    smartSpeed: 800,
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
    <div className="fait-part px-[1rem] sm:px-[2rem] grid grid-cols-12 gap-4 mt-24">

      <div className="col-span-12">
        <div className="title-part relative mb-12">
          <h1 className="font-sans text-3xl font-bold flex items-center justify-center gap-3">Eux, ils l’ont <img src={require("../images/fait-icon.png")} alt="" className="w-16" /></h1>
        </div>
      </div>

      <div className="col-span-12">

        <OwlCarousel className='owl-theme' {...options}>
        {logos.map((logo, index) => (

          <div key={index} className="item flex items-center justify-center p-4">
            <img
              src={logo.logo.default}
              alt={logo.name}
              className="h-24 w-auto max-h-full object-contain"
            />
          </div>
          
        ))}

        </OwlCarousel>

      </div>
    </div>
  );
}

export default Fait;
