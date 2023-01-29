import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, ExtLink } from './FooterStyles'
import { animateScroll as scroll } from 'react-scroll';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <Link href='/' passHref>
							<SocialLogo onClick={toggleHome}>
                <Image src={'/images/adufpi_logo_white.png'} alt="ADUFPI" layout='fill' />
							</SocialLogo>
            </Link>
            <WebsiteRights>ADUFPI © {new Date().getFullYear()} Criado por Tecdata.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink rel="noreferrer" href='https://pt-br.facebook.com/adufpi/' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink rel="noreferrer" href='https://www.instagram.com/adufpi/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink rel="noreferrer" href="mailto:secretaria@adufpi.org.br" target='_blank' arial-label='Email'>
                <FaEnvelope />
              </SocialIconLink>
              <SocialIconLink rel="noreferrer" href='https://twitter.com/adufpi' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink rel="noreferrer" href='https://www.youtube.com/channel/UCJDrKt4jf1SZ10x_kkyqU8A' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer