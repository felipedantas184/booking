import styled from "styled-components"; 
import { Link as LinkS } from 'react-scroll'

export const NavbarContainer = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#051937' : 'transparent')};
	color: #F0EDEE;
	font-family: 'Campus Personal Use';
	position: sticky;
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
	text-decoration: none;
	color: #FFF;
	font-size: 26px;
  cursor: pointer;
  
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

	@media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavbarItem = styled.li`
	height: 60px;
`
export const NavbarLinks = styled(LinkS)`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 0 1rem;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
  color: #FFF;
	border-bottom: 2px solid #F45B69
  }
	&.active {
  border-bottom: 3px solid #F45B69
  }
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
  font-size: 16px;
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