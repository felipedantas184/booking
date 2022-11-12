import styled from "styled-components"; 

export const FormContainer = styled.section` 
  background: #051937;
  background-color: linear-gradient(to right bottom, #051937, #023047);
  margin-top: -60px;
	color: #F0EDEE;
	font-family: 'Campus Personal Use';
  margin-top: -60px;
`
export const FormWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 95vh;
	margin-left: auto;
	margin-right: auto;
  padding: 100px 24px 75px 24px;
	gap: 64px;

	display: flex;
  flex-direction: column;
	justify-content: space-between;
	align-items: center;

  @media screen and (max-width: 768px) {
    padding: 75px 24px 50px 24px;
  }
`

export const TextWrapper = styled.div`
  width: 100%;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const Heading = styled.h1`
  font-size: 32px;
  font-family: 'Graduate';
	font-weight: 600;
	color: #F6F6F6;
	text-align: center;
`
export const Subtitle  = styled.h2`
  color: #E2E3E4;
  font-size: 24px; 
  font-family: 'Graduate';

  text-align: center;
	margin-top: 16px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

	@media screen and (max-width: 340px) {
    font-size: 16px;
  }
`
export const BtnWrap = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;


  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 12px;
  }
`;
export const ImgWrap = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 80%;
    height: 80%;
  }
`;

export const InputWrapper = styled.div`
	position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 2px;
  padding: 16px;
  background: rgba(21, 30, 63, 0.5);
	margin-top: -24px;
	border-radius: 16px;

  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;

  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 900;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(to right, #D47734, #151E3F, #FEFFB8, #151E3F, #D47734, #151E3F);
    background-size: 500% auto;
    animation: gradient 10s linear infinite;
  }

	@keyframes gradient {
	 0% {
		 background-position: 0 0;
	}
	 100% {
		 background-position: 100% 0;
	}
}
`

export const Label = styled.label`
	/* Position the label */
	left: 8px;
	position: absolute;
	top: 0;
	font-size: 24px;
	font-family: 'Campus Personal Use';
	user-select: none;

	/* Hide it by default */
	opacity: 0;
	transition: all 200ms;

	@media screen and (max-width: 768px) {
    font-size: 20px;
  }

	@media screen and (max-width: 340px) {
    font-size: 18px;
  }
`

export const Input = styled.input`
	flex-grow: 1;
	background-color: transparent;
	border: none;
  color: #FFF;
  font-size: 24px;
  line-height: 1.3;
  vertical-align: middle;
	font-family: 'Rubik';
	outline: none;

  &::-webkit-input-placeholder {
    color: #F6F6F6;
    font-family: 'Campus Personal Use';
		transition: all 200ms;
  }

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button  {
    -webkit-appearance: none;
}
	
	&:focus + ${Label} {
		transform: translate(0, -50%);
		opacity: 1;
	}

	&:focus&::-webkit-input-placeholder {
    color: transparent;
		transform: translate(-10%, -100%);;
  }

	@media screen and (max-width: 768px) {
    font-size: 20px;
  }

	@media screen and (max-width: 340px) {
    font-size: 16px;
  }
`
export const BecomeMemberButton = styled.button`
  width: 80%;
  max-width: 320px;
  height: 48px;
  margin-top: 8px;
  padding: 8px;
  border-radius: 8px;
  border: none;

  background-color: #d47734;
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: #FFF;
  font-family: 'Kdam Thmor Pro', sans-serif;
  font-size: 16px;
  font-weight: 500;

  transition: ease-in-out 0.5s;
  cursor: pointer;
  z-index: 1;

  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);
  
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    background-color: #000;
    color: #F6F6F6;
  }
`