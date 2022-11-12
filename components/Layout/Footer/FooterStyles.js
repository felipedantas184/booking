import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #13131A;
  font-family: 'Kdam Thmor Pro', sans-serif;
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
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const SocialLogo = styled.a`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
	font-family: 'Campus Personal Use';
  font-weight: 400;
`
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`
export const ExtLink = styled.a`
  text-decoration: none;
`