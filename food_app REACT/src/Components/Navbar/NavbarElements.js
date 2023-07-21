import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainNavContainer = styled.div`
  background: ${({ stickyNav }) => (stickyNav ? "#343a40" : "transparent")};
  position: sticky;
  top: 0;
  box-shadow: ${({ stickyNav }) =>
    stickyNav ? "0 2px 10px rgba(0, 0, 0, 0.2)" : "none"};
  width: 100%;
  height: ${({ stickyNav }) => (stickyNav ? "100px" : "140px")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 600ms ease-in-out;
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavbarWrapper = styled.div`
  padding: 0.8em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 450px) {
    height: 50px;
  }
`;

export const NavbarLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const NavbarSpan = styled.img`
  transition: 600ms ease-in-out;
  height: ${({ stickyNav }) => (stickyNav ? "40px" : "70px")};
  width: ${({ stickyNav }) => (stickyNav ? "40px" : "70px")};
  visibility: ${({ stickyNav }) => (stickyNav ? "hidden" : "visible")};
  @media screen and (max-width: 450px) {
    height: 30px;
    width: 30px;
  }
`;
export const LogoName = styled.p`
  font-size: 32px;
  margin-top: ${({ stickyNav }) => (stickyNav ? "-40px" : "0")};
  transition: 600ms ease-in-out;
`;

export const NavbarLists = styled.ul`
  /* flex: 1; */
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 930px) {
    visibility: hidden;
    flex-direction: column;
  }
`;

export const NavbarList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  /* font-family: "Roboto", sans-serif; */
  font-weight: 500;
  font-size: 1.2em;
  /* flex: 1; */
  transition: 0.6s ease-in-out;
  &:hover {
    background-color: #fdbf50;
    color: #fff;
    border-radius: 4px;
  }
`;
export const NavbarLink = styled(Link)`
  color: #f4f4f8;
  text-decoration: none;
`;
