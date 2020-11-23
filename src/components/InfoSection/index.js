import React from 'react';
import { Button } from '../ButtonElement';
import { BtnWrap, Heading, TextWrapper, TopLine, Subtitle, InfoWrapper, InfoRow, InfoContainer, Column1, Column2, ImgWrap, Img } from './infoElements';
import svg1 from '../../images/svg-1.svg'

const InfoSection = ({ id, imgStart, topLine, headLine, description, buttonLabel, alt, primary, dark, dark2, buttonDirection }) => {
  return (
    <>
      <InfoContainer id={id}>
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
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={svg1} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;