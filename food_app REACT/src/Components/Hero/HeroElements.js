import styled from "styled-components";

export const HeroBg = styled.div`

`

export const HeroContainer = styled.div`
  height: 1100px;
`;
export const HeroWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 85vh;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  justify-content: center;
  /* overflow: hidden; */
  
`;

export const HeroRow = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
  /* display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  } */
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const TextWrap = styled.div`
  padding-top: 0;
  padding-bottom: 20px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 6em;
  padding-bottom: 5px;
  @media screen and (max-width: 768px) {
    font-size: 4em;
  }

  @media screen and (max-width: 350px) {
    font-size: 2em;
  }
`;
export const Subtitle = styled.h3`
  font-size: 3em;
  font-weight: 500;
  padding-bottom: 5px;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }

  @media screen and (max-width: 350px) {
    font-size: 1em;
  }
`;
export const Paragraph = styled.p`
  font-size: 1.5em;
  font-weight: 500;
  padding-top: 10px;

  @media screen and (max-width: 768px) {
    font-size: 1em;
  }

  @media screen and (max-width: 350px) {
    font-size: 0.6em;
  }
`;

export const ImgWrap = styled.div`
  height: 100%;
  max-width: 550px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
