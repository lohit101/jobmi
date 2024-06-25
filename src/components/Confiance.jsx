import React from "react";
import bgPurple from "../images/bg-surligne-purple.png";

export default function Confiance() {
  return (
    <section className="confiance-part px-[1rem] sm:px-[2rem] grid grid-cols-12 gap-4 mt-36">
      <div className="col-span-12">
        <div className="title-part relative mb-12">
          <h1 className="font-sans text-3xl font-semibold text-center">
            Tu ne nous fait pas {" "}
            <span className="relative inline-block">
              <span className="relative z-20">confiance ?</span>
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
          </h1>
          
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6">
        <div className="confiance-left-box rounded-xl relative h-full px-4 pt-16 pb-8 sm:p-0">
          <img src={require("../images/Subtract.png")} alt="" className="ms-auto w-72 hidden sm:block" />
          <h1 className="font-sans text-3xl font-bold w-60 absolute bottom-8 left-8">
            Jetez un oeil 
            à l’actualité
          </h1>
          <img src={require("../images/purple-circle-image.png")} alt="" className="w-[12rem] bottom-7 absolute sm:bottom-6 left-[0.5rem] sm:left-2" />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6">
        <div className="confiance-right-box relative">
          <div className="img-box">
            <img src={require("../images/alexriviere 1.png")} alt="" className="w-[40rem]" />
          </div>
          <div className="confiance-right-box-content absolute bottom-7 left-7">
            <p className="font-sans text-white font-bold w-[15.6rem]">Decouvrez l’histoire de Stephanie 27 ans, anciennement pharmacienne devenue créatrice de vêtements.</p>
            <a target="_blank" rel="noreferrer" href="https://jobmi.fr/blog" className="font-sans font-semibold w-fit rounded-xl px-4 py-2 flex items-center gap-2 bg-black text-white no-underline">
              Voir l’article
              <img
                src={require("../images/accordion-arrow.png")}
                alt="arrow-icon"
                className="w-7"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
