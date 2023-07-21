import React, { useEffect, useState } from "react";
import NavLogo from "../../Assets/images/NavbarLogo.svg";
import {
  MainNavContainer,
  NavbarContainer,
  NavbarWrapper,
  NavbarLogo,
  NavbarSpan,
  LogoName,
  NavbarLists,
  NavbarLink,
  NavbarList,
} from "./NavbarElements";

const NavBar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  function changeNav() {
    if (window.scrollY >= 100) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <MainNavContainer stickyNav={stickyNav}>
        <NavbarContainer>
          <NavbarWrapper>
            <NavbarLists>
              <NavbarList>
                <NavbarLink
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                >
                  Home
                </NavbarLink>
              </NavbarList>

              <NavbarList>
                <NavbarLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                >
                  About
                </NavbarLink>
              </NavbarList>

              <NavbarList>
                <NavbarLink
                  to="gallery"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                >
                  Gallery
                </NavbarLink>
              </NavbarList>

              <NavbarList>
                <NavbarLink
                  to="book-table"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                >
                  Book Table
                </NavbarLink>
              </NavbarList>
            </NavbarLists>
            <NavbarLogo>
              <NavbarSpan
                stickyNav={stickyNav}
                img
                src={NavLogo}
                alt="navlogo"
              />
              <LogoName stickyNav={stickyNav}>FOOD APP</LogoName>
            </NavbarLogo>

            <NavbarLists>
              <NavbarList>
                <NavbarLink
                  to="blog"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                >
                  Blog
                </NavbarLink>
              </NavbarList>

              <NavbarList>
                <NavbarLink
                  to="Reviews"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                >
                  Reviews
                </NavbarLink>
              </NavbarList>

              <NavbarList>
                <NavbarLink
                  to="contactUs"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                >
                  Contact Us
                </NavbarLink>
              </NavbarList>

              <NavbarList>
                <NavbarLink
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                >
                  Find Us
                </NavbarLink>
              </NavbarList>
            </NavbarLists>
          </NavbarWrapper>
        </NavbarContainer>
      </MainNavContainer>
    </>
  );
};

export default NavBar;
