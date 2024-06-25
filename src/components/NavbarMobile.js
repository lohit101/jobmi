import React, { useEffect, useState } from "react";
import logoBlack from "../images/logo.png";
import instagramIcon from "../images/instagram-header.svg";
import tiktokIcon from "../images/tiktok-header.svg";
import linkedinIcon from "../images/linkedin-header.svg";

function NavbarDesktop() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar-part flex items-center justify-between fixed top-0 left-0 right-0  shadow-md z-10 transition-all duration-300 ${
        scrolled ? "py-1 md:py-2" : "py-2 md:py-3"
      }`}
      style={{ backgroundColor: "#F3F3F3" }}
    >
      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <a className="navbar-item flex items-center justify-center">
            <img
              src={logoBlack}
              alt="Logo"
              className={`w-40 md:w-36 h-auto ${
                scrolled ? "md:w-32" : "md:w-36"
              } transition-all duration-300`}
            />
          </a>
          <div className="social-links flex items-center gap-2 md:gap-4">
            <a
              href="https://www.instagram.com/jobmifr?igsh=MXQyczl6cHlka2s2bw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-5 h-5 md:w-4 md:h-4"
              />
            </a>
            <a
              href="https://www.tiktok.com/@jobmifr?_t=8n1bHZwV2fY&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={tiktokIcon}
                alt="TikTok"
                className="w-5 h-5 md:w-4 md:h-4"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/jobmipro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-5 h-5 md:w-4 md:h-4"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarDesktop;
