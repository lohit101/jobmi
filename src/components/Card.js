// src/components/Card.js
import React from "react";
import cardImage from "../images/card-img-test.svg"
import theMetier from "../images/soulignage-the-metier.svg"
import kiffes from "../images/soulignage-kiffes.svg"

function Card() {
  return (
    <div className="card-part px-[1rem] sm:px-[2rem] grid grid-cols-12 gap-y-5 sm:gap-x-5 mt-32" id="test-section">
      <div className="img-box col-span-12 sm:col-span-5 relative">
        <img src={cardImage} alt="Photo d'une femme posée à son ordinateur en train de répondre à un test" />
        <a target="_blank" rel="noreferrer" href="https://626063d8.sibforms.com/serve/MUIFACI_ugihEQiP7m7SmyLz7QszuC5wEK0W_nn2cHLbezW92oq3Gi_M7-5mIHV3oA9bk8VpaPa5q5OmsC4xxwhAAIDAz5LafA4Of6WYGOVAYgPggEk5SH6YYlarS5QAKTm_pucc1dXASOy6scm8cBdqdnUuW0Ms3FUJBfgzGv9XucQ_FwwJIFFVrEDqaJu_1batPvIPyrYuxn4K" className="w-fit rounded-xl px-4 py-2 flex items-center gap-2 bg-black text-white absolute bottom-4 right-4 sm:bottom-[10%] sm:right-[5%] md:bottom-[20%] md:right-[8%] no-underline font-sans font-semibold">
          Faire le test
          <img
            src={require("../images/accordion-arrow.png")}
            alt="arrow-icon"
            className="w-7"
          />
        </a>
      </div>
      <div className="col-span-12 sm:col-span-7">
        <div className="card-content rounded-xl h-full relative pb-4">
          <img
            src={require("../images/card-arrow.png")}
            alt="card-arrow"
            className="w-24 absolute top-8 sm:top-14"
          />
          <div className="card-details-content pt-[9rem] sm:pt-[11rem] px-[1.5rem] sm:px-[2rem] m-0">
            <div className="relative">
              <h2 className="text-2xl w-full sm:w-96 font-sans font-semibold">
                Réponds à 5 <br></br>questions simples <br></br>pour découvrir&nbsp;&nbsp;
                <span className="font-september font-normal text-violet text-[4.2rem] sm:text-[5rem] relative" style={{backgroundImage: `url(${theMetier})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 80%',

              }}>
                  "The metier"
                </span>
                
              </h2>
            </div>
            <p className="text-lg w-72 sm:w-96 mb-0 mt-28 sm:mt-32 font-sans">
              Ce test rapide t’aidera à identifier les
              métiers par rapport à ce que tu&nbsp;&nbsp;<span className="font-september font-normal text-[3rem] sm:text-[3.5rem] relative" style={{backgroundImage: `url(${kiffes})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 90%',

              }}>
                  kiffes
                </span>
                &nbsp;&nbsp;faire et tes compétences.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
