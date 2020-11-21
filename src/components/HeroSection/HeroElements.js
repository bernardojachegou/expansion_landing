import styled from 'styled-components';

export const HeroContainer = styled.div`
  background-color: '#d2e8ff';
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
`

export const HeroBg = styled.div`
  padding:  0 16px;
`

export const ImageBg = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const HeroContent = styled.div`
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroH1 = styled.h1`
  color: black;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const HeroP = styled.p`
  color: black;
  font-size: 30px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display:flex;
  flex-direction: column;
  align-items: center;
`



