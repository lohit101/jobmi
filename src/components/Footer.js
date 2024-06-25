// src/components/Footer.js
import React from "react";
import { FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-part grid grid-cols-9 gap-4 mt-[100px] px-6 sm:px-16 bg-black py-20">
      <div className="col-span-9 sm:col-span-2">
        <h5 className="text-white font-inter font-semibold">CONTACT</h5>
        <ul className="mb-0 p-0 mt-[1.5rem] sm:mt-[3rem] block">
          <li className="font-inter text-white text-sm sm:text-base">12 rue odesa 78900</li>
          <li className="font-inter text-white text-sm sm:text-base">maïa.agencypro@gmail.com</li>
          <li className="font-inter text-white text-sm sm:text-base">Tel. 01 12 34 57 60</li>
        </ul>
      </div>
      <div className="col-span-9 sm:col-span-2">
        <h5 className="text-white font-inter font-semibold">SOCIAL MEDIA</h5>
        <ul className="mb-0 p-0 my-4 sm:mt-10 flex items-center gap-4 social-menus">
          <a
            href="https://www.instagram.com/jobmifr?igsh=MXQyczl6cHlka2s2bw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="text-white">
              <FaInstagram className="text-2xl" />
            </li>
          </a>
          <a
            href="https://www.tiktok.com/@jobmifr?_t=8n1bHZwV2fY&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="text-white">
              <FaTiktok className="text-2xl" />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/company/jobmipro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="text-white">
              <FaLinkedinIn className="text-2xl" />
            </li>
          </a>
        </ul>
      </div>
      <div className="col-span-9 sm:col-span-2">
        <input type="checkbox" id="drawer-bottom" className="drawer-toggle" />

        <label htmlFor="drawer-bottom" className="text-white font-inter font-semibold cursor-pointer">
          <p>MENTIONS LEGALES</p>
        </label>
        <label className="overlay" htmlFor="drawer-bottom"></label>
        <div className="drawer drawer-bottom max-w-[100vw] sm:max-w-[70%] sm:ml-[15%] rounded-t-3xl self-center box-border">
          <div className="drawer-content my-10 w-full px-10">
            <label htmlFor="drawer-bottom" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-3 text-white">✕</label>
            <p className="mx-auto text-white font-bold">Random Heading</p>
            <p className="mx-auto text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-10">
              <button className="btn btn-primary w-full sm:w-1/4">Accept</button>
              <button className="btn btn-warning w-full sm:w-1/4">Decline</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-9 sm:col-span-2">
        <h5 className="text-white font-inter font-semibold">REJOINDRE</h5>
        <a target="_blank" rel="noreferrer" href="https://626063d8.sibforms.com/serve/MUIFACI_ugihEQiP7m7SmyLz7QszuC5wEK0W_nn2cHLbezW92oq3Gi_M7-5mIHV3oA9bk8VpaPa5q5OmsC4xxwhAAIDAz5LafA4Of6WYGOVAYgPggEk5SH6YYlarS5QAKTm_pucc1dXASOy6scm8cBdqdnUuW0Ms3FUJBfgzGv9XucQ_FwwJIFFVrEDqaJu_1batPvIPyrYuxn4K" className="bg-white text-black flex items-center gap-3 rounded-xl px-4 py-2 font-medium font-inter no-underline mt-3 w-fit">
          Inscris-toi à la waitinglist
          <img
            src={require("../images/arrow-icon.png")}
            alt="arrow-icon"
            className="w-5 h-5 sm:w-7 sm:h-7"
          />
        </a>
        <p className="font-inter text-white mt-4 text-xs">
          En soumettant votre e-mail, vous acceptez que Jobmi puisse vous
          envoyer des messages électroniques promotionnels contenant des offres,
          des mises à jour et d'autres messages marketing. Vous comprenez que
          Jobmi peut utiliser vos informations conformément à sa&nbsp;
          <span className="font-bold underline underline-white">
            politique de confidentialité
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default Footer;
