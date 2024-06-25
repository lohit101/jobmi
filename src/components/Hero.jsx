// src/components/Hero.js
import React from "react";
import backgroundPc from "../images/banner-img.svg";
import trait from "../images/soulignage-job.svg";

function Hero() {
  return (
    <div className="p-0 sm:px-6 hero-part sm:mx-6">
      <div
        className="flex w-full bg-cover bg-center bg-no-repeat rounded-t-none rounded-3xl h-screen items-center justify-center"
        style={{
          backgroundImage:
            "url(" +
            backgroundPc +
            ")",
        }}
      >
        <div className="flex flex-col items-start justify-start mt-24 px-4 sm:px-10 gap-6 sm:gap-10 w-full">
          <div className="flex flex-col items-start leading-tight gap-3 sm:gap-5">
            <div className="relative">
              <h1 className="text-white font-jost font-semibold text-5xl sm:text-6xl drop-shadow-lg m-0 text-left">
                Marre de ton <span>job ?<img
                src={trait}
                alt="trait"
                className="absolute -bottom-4 sm:right-5 w-16 sm:w-21 md:w-24 sm:-bottom-7 right-[80%]"
              /></span>
              </h1>
              
            </div>

            <p className="text-white font-medium font-inter sm:text-lg drop-shadow-lg w-full text-left px-0">
            Découvres ton prochain métier de rêve en <br/>t’inscrivant dès maintenant
            </p>
          
            <a target="_blank" rel="noreferrer" href="https://626063d8.sibforms.com/serve/MUIFACI_ugihEQiP7m7SmyLz7QszuC5wEK0W_nn2cHLbezW92oq3Gi_M7-5mIHV3oA9bk8VpaPa5q5OmsC4xxwhAAIDAz5LafA4Of6WYGOVAYgPggEk5SH6YYlarS5QAKTm_pucc1dXASOy6scm8cBdqdnUuW0Ms3FUJBfgzGv9XucQ_FwwJIFFVrEDqaJu_1batPvIPyrYuxn4K" className="bg-white text-black flex items-center gap-3 rounded-xl px-5 py-3 font-medium font-inter no-underline">
                Inscris-toi à la waitinglist
                <img
                  src={require("../images/arrow-icon.png")}
                  alt="arrow-icon"
                  className="w-5 h-5 sm:w-7 sm:h-7"
                />
            </a>
            
          </div>
          
        </div>
       
      </div>

  
    </div>
  );
}

export default Hero;
