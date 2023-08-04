import React, { useState } from "react";
import "../Nav/Nav.css";
import { Link } from "react-scroll";
import Scroll from "../Scroll/Scroll";
import Menu from "./Assets/icon _menu.png";
import MenuClose from "./Assets/icon _close.png";
import Logo from "./Assets/pancitasArribas.png"
import Instagram from "./Assets/instagram_icon.png"
import WhatsApp from "./Assets/whatsapp_icon.png"


const Nav = () => {
/*   const [navbar, setNavbar] = useState(false);
 */  const [menu, setMenu] = useState(false);
  const [rotate, setRotate] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
    setRotate(!rotate);
  };

  rotate ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");

  if (window.innerWidth <= 425) {
    return (
      <section className="mobile_navPosition">
        <div className="mobile_position">
          <Link to="index" spy={true} smooth={true} offset={0} duration={800} className="mobile_navContainer">
            <img className="mobile_navLogoL" src={Logo} alt="logo" />
          </Link>
          <button onClick={toggleMenu} className="mobile_navBar-menu">
            <img src={Menu} alt="menu" />
          </button>
        </div>
        <div className={menu ? " mobile_menu-active" : " mobile_menu"}>
          <div className="mobile_menu-active--container">
            <button
              onClick={toggleMenu}
              className="mobile_menu_close-container"
            >
              <img
                className="mobile_menu_close"
                src={MenuClose}
                alt="close menu"
              />
            </button>
            <Link to="index" spy={true} smooth={true} offset={0} duration={800} onClick={toggleMenu} className="mobile_navLogoS-container">
              <img className="mobile_navLogoS" src={Logo} alt="logo" />
            </Link>
            <ul className="mobile_menu_navLista">
              <li>
                <Link
                  to="formularios"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={700}
                  className="mobile_menu_navLink"
                  onClick={toggleMenu}
                >
                  FORMULARIOS
                </Link>
              </li>
              <li>
                <Link
                  to="donaciones"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={700}
                  className="mobile_menu_navLink"
                  onClick={toggleMenu}
                >
                  DONACIONES
                </Link>
              </li>
            </ul>
            <div className="mobile_menu_footer_top-socialNetworks--socialNetworks">
              <div className="mobile_menu_footer_top-socialNetworks--socialNetworks---container">
                <a
                  className="facebook"
                  rel="noreferrer"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5491168559623"
                >
                  <img className="social_icon" src={WhatsApp} alt="Logo WhatsApp" />
                </a>
                <a
                  className="instagram"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/pancitas_arriba/"
                >
                  <img className="social_icon" src={Instagram} alt="Logo Instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="navPosition">
      <div className="position">
        <div className="navContainer">
          <Link to="index" spy={true} smooth={true} offset={0} duration={800} className="brandContainer">
            <img className="navLogo" src={Logo} alt="logo" />
          </Link>
          <ul className="navLista">
            <li>
              <Link
                to="formularios"
                spy={true}
                smooth={true}
                offset={-130}
                duration={800}
                className="navLink"
              >
                FORMULARIOS
              </Link>
            </li>
            <li>
              <Link
                to="donaciones"
                spy={true}
                smooth={true}
                offset={-130}
                duration={800}
                className="navLink"
              >
                DONACIONES
              </Link>
            </li>
          </ul>
        </div>
        <Scroll />
      </div>
    </section>
  );
};

export default Nav;
