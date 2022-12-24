import styled from "styled-components"; 

export const NavbarContainer = styled.nav`
  background: #F1F1F1;
	color: #13131A;
	font-family: 'Kdam Thmor Pro';
  top: 0;
	z-index:10;
	transition: all 0.5s ease-in-out;
`
export const NavbarWrapper = styled.div`
	max-width: 1100px;
	height: 60px;
	margin-left: auto;
	margin-right: auto;
	padding: 0 24px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const NavbarLogo = styled.a`
  position: relative;
  width: 100px;
  height: 32px;
  text-decoration: none;
	color: #FFF;
	font-size: 26px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;

  @media screen and (max-width: 768px) {
    margin-top: 8px;
  }
`
export const LogoWrapper = styled.div`
  display: none;

  cursor: pointer;
  
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
	
	@media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
		display: flex;
  }
`

export const MobileIcon = styled.div`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    width: 50px;
    height: 1.8rem;
		display: flex;
		justify-content: center;
		align-items: center;
}
`
export const NavbarMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;

  margin: 0 !important;

  font-family: 'Poppins', sans-serif;

	@media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavbarItem = styled.li`
	height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
	padding: 0 1rem;
  gap: 8px;
  font-size: 14px;
  
  cursor: pointer;
	transition: all 0.2s ease-in-out;
`
export const NavbarBottom = styled.div`
	transition: all 0.2s ease-in-out;

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
export const NavbarLink = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

  a {
    color: inherit !important;
    text-decoration: none !important;
  }
`
export const NavbarLogout = styled.div`
  height: 100%;
  padding: 4px 8px;
  background-color: aquamarine;
  color: #000;

  border-radius: 8px;
`
export const NavbarBtn = styled.nav`
  display: flex;
  align-items: center;

	padding: 0 0 0 1rem;
`
export const NavbarBtnLink = styled.p`
  text-decoration: none;
  background: transparent;
	border: 2px solid #F0EDEE;
	color: #F0EDEE;
  font-size: 14px;
	font-weight: 500;

	border-radius: 10px;
  padding: 8px 24px;
  outline: none;
  cursor: pointer;

  transition: all 0.5s ease-in-out;

	&:hover {
    transition: all 0.5s ease-in-out;
    background: #F0EDEE;
    color: #BB6BD9;
  }
`
export const ExtLink = styled.a`
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 16px;
  }

  @media screen and (max-width: 768px) {
    &:not(:last-child) {
    margin-right: 0px;
  }
  }
`