import styled from 'styled-components'

export const HeroContainer = styled.section`
	background: #051937;
  background-image: linear-gradient(to right bottom, rgba(5, 25, 55, 0.9), rgba(2, 48, 71, 1)), 
  url("/Cabulosa.png");
  background-position: center;
  background-size: cover;
	height: 100vh;
  margin-top: -60px;
`
export const HeroWrapper = styled.div`	
	height: 100%;

	margin-left: auto;
	margin-right: auto;
  padding: 75px 8px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

  @media screen and (min-width: 768px) {
		flex-direction: row;
    justify-content: space-around;
    gap: 16px;
  }
`
export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
		flex: 1;
  }
`
export const HeroHeading = styled.h1`
	font-size: 60px;
	font-family: 'Campus Personal Use';
	font-weight: 500;
  line-height: 1.1;
	color: #D47734;
	text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 1.2;
  }
`
export const HeroSubtitle  = styled.h2`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  font-family: 'Graduate';
  color: #F6F6F6;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.2;
    margin-top: 16px;
  }
`
export const LogoWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  overflow: hidden;

  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

/** MenuWrapper */

export const MenuWrapper = styled.div`
  width: 100%;
	height: 100%;
  max-height: 240px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media screen and (min-width: 768px) {
		flex: 1;
    padding: 0 16px;
  }

  @media screen and (max-height: 700px) {
		margin-top: 8px;
  }
`
export const MenuBlock = styled.div`
  background: #023047;
  padding: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

  transition: ease-in-out 0.5s;
  cursor: pointer;

  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: scale(1.01);
  }
`
export const MenuBlockName = styled.h3`
  font-family: 'Graduate';
  font-size: 18px;
  color: #FFF;
  font-weight: 500;
`