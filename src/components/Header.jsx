import React from "react";
import bgPurple from "../images/bg-surligne-purple.png";
import bgUnderline from "../images/bg-underline-image.png"

function Header() {
  return (
    <div className="header-part my-10 px-4">
      <div className="title-part block sm:flex flex-col gap-4 items-center">
        <div className="relative text-center">
          <h2 className="text-4xl font-medium font-oddlini">
            FAIT PARTIE DES 3 MILLIONS QUI ONT{" "} 
            <span className="relative inline-block">
              <span className="relative z-20">CHANGÉ LEURS VIES</span>
              <span
                className="absolute inset-0 z-0 bg-cover"
                style={{
                  backgroundImage: `url(${bgPurple})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat'
                }}
              ></span>
            </span>
          </h2>
          <img
            className="absolute -bottom-3 right-3 w-12 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12  md:-bottom-4 sm:-bottom-1"
            src={bgUnderline}
            alt="Double ligne pour souligner le titre"
          ></img>
        </div>
        
        <p className="text-lg text-center font-semibold font-sans mt-10">
          Toi aussi trouves la raison de te réveiller le matin !
        </p>
        
      </div>
    </div>
  );
}

export default Header;
