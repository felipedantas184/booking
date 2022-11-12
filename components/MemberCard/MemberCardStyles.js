import styled from "styled-components"; 

export const MemberCardContainer = styled.section` 
  background: #051937;
  background-color: linear-gradient(to right bottom, #051937, #023047);
  margin-top: -60px;
	color: #F0EDEE;
	font-family: 'Campus Personal Use';
`
export const MemberCardWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 90vh;
	margin-left: auto;
	margin-right: auto;
  padding: 100px 24px 75px 24px;

  gap: 48px;

	display: flex;
  flex-direction: column;
	justify-content: space-between;
	align-items: center;

  @media screen and (max-width: 768px) {
    padding: 75px 24px 50px 24px;
  }
`

export const MemberTextWrapper = styled.div`
  width: 100%;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const MemberHeading = styled.h1`
  font-size: 32px;
  font-family: 'Graduate';
	font-weight: 600;
	color: #F6F6F6;
	text-align: center;
`


//--------New Changes--------//
export const InfoMemberCardWrapper = styled.div`
  background: #18114D;
  background: linear-gradient(225deg, #D47734 0%, #18114D 60%);

  background-size: 200% auto;
  animation: gradient 15s linear infinite;
	background-position: 0% 0%;

  height: auto;
  width: 100%;
  max-width: 340px;
  gap: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 24px;
  border-radius: 20px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);

  position: relative;

  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.015);
  }

  @keyframes gradient {
	 0% {
		 background-position: 0% 0;
	  }
    50% {
      background-position: 50% 0;
    }
    100% {
      background-position: 0% 0;
    }
	}
`

export const MemberTopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
`

export const InfoImageWrapper = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	width: 150px;
	height: 150px;

  border-radius: 20px;
  overflow: hidden;

  box-shadow: rgba(0, 161, 255, 0.33) 5px 5px 0px;

	@media screen and (max-width: 768px) {
		width: 150px;
		height: 150px;
	}
`

export const InfoLogoWrapper = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
  right: 16px;

	width: 75px;
	height: 75px;

  border-radius: 75px;
  overflow: hidden;

	@media screen and (max-width: 768px) {
		width: 75px;
		height: 75px;
	}
`

export const InfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  gap: 24px;
`

export const InfoGroup = styled.div`
  gap: 4px;
`

export const DoubleGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

export const InfoGroupTitle = styled.p`
  font-family: 'Rubik';
  font-weight: bold;
  font-size: 20px;
`

export const InfoGroupDescription = styled.p`
  font-family: 'Rubik';
  font-weight: 400;
  font-size: 20px;
`

export const MemberCardBottomText = styled.span`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Rubik';
  color: #E1E1E1;
  text-align: center;
  text-transform: uppercase;
`
//--------New Changes--------//
