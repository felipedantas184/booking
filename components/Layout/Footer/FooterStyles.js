import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #13131A;
  font-family: 'Poppins', sans-serif;
`
export const FooterWrap = styled.div`
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px 0 40px 0;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 16px;
    margin: 20px 0 20px 0;
  }
`
export const SocialLogo = styled.a`
  position: relative;
  width: 100px;
  height: 32px;
  text-decoration: none;
	font-size: 26px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
`
export const WebsiteRights = styled.small`
  color: #F1F1F1;
  font-size: 14px;
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`
export const SocialIconLink = styled.a`
  color: #F1F1F1;
  font-size: 24px;

  &:hover {
    color: #EB5757;
  }

  &::after {
    display:block;
    content: '';
    border-bottom: solid 2px #EB5757;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`
export const ExtLink = styled.a`
  text-decoration: none;
`