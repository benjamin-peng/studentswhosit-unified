import styled from "styled-components";
import { NavbarLink } from "./NavbarLink";
import { TextLogo, SmallTextLogo } from "../Logos/TextLogo";

interface Props {
  currentPage: string;
}

const NavbarDiv = styled.div`
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.5em;
  box-shadow: 0 4px 2px -2px gray;
`;

const Navbar: React.FC<Props> = ({ currentPage }) => {
  return (
    <NavbarDiv>
      <SmallTextLogo></SmallTextLogo>
      <NavbarLink to={"/"} current={currentPage === "main"}>
        Home
      </NavbarLink>
      <NavbarLink to={"/about"} current={currentPage === "about"}>
        About Us
      </NavbarLink>
      <NavbarLink to={"/getinvolved"} current={currentPage === "getinvolved"}>
        Get Involved
      </NavbarLink>
      <NavbarLink to={"/book"} current={currentPage === "book"}>
        Book Now
      </NavbarLink>
      <NavbarLink to={"/login"} current={currentPage === "login"}>
        Log In
      </NavbarLink>
      <NavbarLink to={"/signup"} current={currentPage === "signup"}>
        Sign Up
      </NavbarLink>
    </NavbarDiv>
  );
};

export { Navbar };
