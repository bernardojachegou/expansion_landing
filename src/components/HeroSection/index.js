import React from 'react';
import HeroImage from '../../images/thinking.png';
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroElements';
import { Button } from '../ButtonElement';

function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImageBg src={HeroImage} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Do you know what is Clear Communication?</HeroH1>
        <HeroP>
          Learn about it right now!
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='see'
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >Start</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
