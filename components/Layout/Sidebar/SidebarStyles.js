import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #F1F1F1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.7s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => (isOpen ? '0' : '100%')};

  font-family: 'Poppins';
`

export const CloseIcon = styled(FaTimes)`
  color: #13131A;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  -webkit-tap-highlight-color: transparent;
  user-select: none;
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 32px;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  list-style: none;

  @media  screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`
export const SidebarLink = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #13131A;
  cursor: pointer;

  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  user-select: none;

  &:hover {
    color: #EB5757;
    transition: 0.2s ease-in-out;
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
export const SidebarExternalLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-decoration: none;
  list-style: none;
  transition: 02s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &:hover {
    color: #EB5757;
    transition: 0.2s ease-in-out;
  }
`
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
export const SidebarRoute = styled.div`
  width: 200px;
  padding: 4px 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  text-transform: capitalize;
  border-radius: 8px;
  border: 0;
  font-weight: 500;
  color: #fff;
  font-family: 'Poppins' !important;
  background-color: #EB5757;
  cursor: pointer;

  a {
    color: #fff !important;
  }

  transition: all 1s ease-in-out;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &:hover {
    transition: all 1s ease-in-out;
    background: #EB3A3A;
	  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`
export const ExtLink = styled.a`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &:not(:last-child) {
    margin-right: 16px;
  }

  @media screen and (max-width: 768px) {
    &:not(:last-child) {
    margin-right: 0px;
  }
  }
`