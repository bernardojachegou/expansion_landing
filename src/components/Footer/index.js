import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkTitleContainer, FooterLinkTitle, FooterLink, FooterLinkWrapper } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer id='contact'>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkTitleContainer>
            <FooterLinkTitle>About me</FooterLinkTitle>
          </FooterLinkTitleContainer>
          <FooterLinkWrapper>
            <FooterLink href="https://www.linkedin.com/in/bernardojachegou/" target="_blank">LinkedIn</FooterLink>
            <FooterLink href="https://github.com/bernardojachegou" target="_blank">Github</FooterLink>
            <FooterLink href="https://app.rocketseat.com.br/me/bernardojachegou" target="_blank">Rocketseat</FooterLink>
            <FooterLink href="https://api.whatsapp.com/send?phone=5565981178109" target="_blank">Whatsapp</FooterLink>
          </FooterLinkWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;