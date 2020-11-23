import React from 'react';
import { Button } from '../ButtonElement';
import { BtnWrap, Heading, TextWrapper, TopLine, Subtitle, InfoWrapper, InfoRow, InfoContainer, Column1, Column2, ImgWrap, Img } from './infoElements';

const InfoSection = ({ id, imgStart, headLine, description, buttonLabel, alt, buttonDirection, lightBgColor, img }) => {
  return (
    <>
      <InfoContainer id={id} lightBgColor={lightBgColor}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Clear Communication</TopLine>
                <Heading>{headLine}</Heading>
                <Subtitle>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to={buttonDirection}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    {buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;