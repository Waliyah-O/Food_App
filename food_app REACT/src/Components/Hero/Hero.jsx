import React from "react";
import Navbar from '../Navbar/NavBar'
import {
  HeroContainer,
  HeroWrapper,
  HeroRow,
  Column1,
  TextWrap,
  Title,
  Subtitle,
  Paragraph
} from "./HeroElements";
import HeroBackground from "./HeroBackground";


const Hero = () => {
  return (
    <>
    <HeroBackground />
      <HeroContainer>
        <Navbar />
        <HeroWrapper>
          <HeroRow>
            <Column1>
              <TextWrap>
                <Title></Title>
                <Subtitle></Subtitle>
                <Paragraph></Paragraph>
              </TextWrap>
            </Column1>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default Hero;
