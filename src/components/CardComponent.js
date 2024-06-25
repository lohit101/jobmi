import React, { act, useEffect, useState } from "react";
import data from "../data/data.json";
import rapidement from "../images/soulignage-rapidement.svg";

function CardComponent() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 12 ? 1 : prevIndex + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="card-part px-[1rem] sm:px-[2rem] grid grid-cols-12 gap-3 mt-32" id="metier-section">
      <div className="title-part col-span-12 flex flex-col sm:flex-row items-center sm:items-start gap-[1rem] sm:gap-[3.5rem] relative px-[0rem] sm:px-[2rem]">
        <h1 className="text-3xl font-bold font-sans w-56 flex flex-col items-start gap-2">
          Trouve le metier banger !{" "}
          <img
            src={require("../images/pour-la-vie-image.png")}
            alt=""
            className="w-36 left-0"
          />
        </h1>
        <p className="w-80 font-sans text-lg">
          Nous te mettrons en avant les métiers qui te fit parfaitement, mais
          aussi les jobs en forte demande, afin de maximiser tes chances de
          trouver un emploi&nbsp;&nbsp;<span className="font-september font-normal text-[3rem] sm:text-[3.5rem] relative" style={{backgroundImage: `url(${rapidement})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 80%',

              }}>
                  rapidement
                </span>
        </p>
      </div>
      <div className="cart-content col-span-12 sm:bg-slate-50 rounded-xl p-[0rem] sm:p-[1.2rem] flex items-center gap-10 sm:gap-20 flex-col sm:flex-row md:px-8">
        {data.map((item, index) => {
          return (
            item.index === activeIndex && (
              <img
                src={`${window.location.origin}/images/${item.image}`}
                alt="card-image"
                className="w-full sm:w-[35rem] rounded-xl h-auto"
                key={index}
              />
            )
          );
        })}
        <div className="menus flex flex-col sm:flex-row items-end sm:justify-between w-full">
          <ul className="flex flex-col gap-2.5 p-0">
            {data.map((item, index) => (
              <li
                className={`cursor-pointer text-sm font-sans uppercase ${
                  item.index === activeIndex
                    ? "text-violet font-bold"
                    : "text-slate-400 font-medium"
                }`}
                key={index}
                onMouseOver={() => setActiveIndex(item.index)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          {data.map((item, index) => (
            <h1 className="text-indigo-600 font-bold text-lg block sm:hidden mb-0">
              {" "}
              {item.index === activeIndex ? item.name : ""}{" "}
            </h1>
          ))}
          <button target="_blank" rel="noreferrer" href="https://626063d8.sibforms.com/serve/MUIFACI_ugihEQiP7m7SmyLz7QszuC5wEK0W_nn2cHLbezW92oq3Gi_M7-5mIHV3oA9bk8VpaPa5q5OmsC4xxwhAAIDAz5LafA4Of6WYGOVAYgPggEk5SH6YYlarS5QAKTm_pucc1dXASOy6scm8cBdqdnUuW0Ms3FUJBfgzGv9XucQ_FwwJIFFVrEDqaJu_1batPvIPyrYuxn4K" className="w-fit rounded-xl px-4 py-2 flex items-center gap-2 bg-black text-white font-sans font-semibold">
            Trouve ton job{" "}
            <img
              src={require("../images/accordion-arrow.png")}
              alt="arrow-icon"
              className="w-7"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
