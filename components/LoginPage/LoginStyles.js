import styled from 'styled-components'

export const LoginSection = styled.section`
	padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);

  @media screen and (max-width: 720px) {
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  }
`
export const LoginContainer = styled.div`
	width: 75vw;
  height: 80vh;
  max-width: 1024px;
  border-radius: 20px;
  min-height: 500px;
  margin: auto;

  display: flex;
  flex-direction: row;

  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 16px;

    flex-direction: column-reverse;
  }
`
export const LoginForm = styled.form`
	flex: 5;
  padding: 16px;
  border-radius: 20px 0 0 20px; 

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: #FFF;

  @media screen and (max-width: 720px) {
    border-radius: 20px; 
  }
`
export const FormHeading = styled.div`
	text-align: center;
  width: 60%;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`
export const FormTitle = styled.h1`
  color: #2d3954;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 35px;
  margin-bottom: 8px !important;
`
export const FormSubtitle = styled.p`
	color: #72809d;
  margin-bottom: 0 !important;
`
export const LoginMessage = styled.div`
	flex: 4;
  padding: 16px;
  border-radius: 0 20px 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: #13131A;
  background: linear-gradient(3600deg, rgba(9,9,121,1) 33%, rgba(2,0,36,1) 100%);

  @media screen and (max-width: 720px) {
    display: none;
    border-radius: 20px 20px 0 0; 
  }
`
export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`
export const Input = styled.input`
  max-width: 300px;
  border-radius: 32px;
  width: 100%;
  padding: 12px 24px; 
  font-family: 'Poppins' !important;
  outline: none;
`
export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`
export const FormButton = styled.button`
  padding: 12px;
  width: 50%;
  text-transform: capitalize;
  border-radius: 32px;
  border: 0;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  font-family: 'Poppins' !important;

  background: rgba(0,212,255,1);
  background: linear-gradient(90deg, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 100%);
`
export const FormSpan = styled.span`
  font-size: 14px;
  color: #22222A;
  margin-top: 4px;
`
export const MessageTitle = styled.h1`
  color: #E5E5E5;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 28px;

  max-width: 300px;
`
export const MessageSubtitle = styled.p`
	color: #D4D4D4;
  margin-top: 16px;

  max-width: 350px;
`