import styled from 'styled-components'

export const LoginSection = styled.section`
  background-color: #EB5757;
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginContainer = styled.div`
	width: 75vw;
  max-width: 800px;
  height: 80vh;
  max-height: 550px;
  min-height: 500px;
  margin: auto;

  display: flex;
  flex-direction: row;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 16px;
    max-height: 550px;
    flex-direction: column-reverse;
  }
`
export const LoginForm = styled.form`
	flex: 5;
  background-color: #FFF;
  padding: 16px;
  border-radius: 20px 0 0 20px; 

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

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
	color: #13131A;
  font-weight: 500;
  margin-bottom: 0 !important;
`
export const LoginMessage = styled.div`
	flex: 3;
  background-color: #4F4F4F;
  padding: 16px;
  border-radius: 0 20px 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 720px) {
    display: none;
    border-radius: 20px 20px 0 0; 
  }
`
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`
export const InputGroup = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`
export const InputSplit = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: row;
  gap: 4px;
`
export const InputSplitGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
export const InputLabel = styled.label`
  font-size: 14px;
  color: #13131A;
  margin-left: 12px;
  margin-bottom: 4px;
`
export const Input = styled.input`
  max-width: 300px;
  border-radius: 8px;
  border: none;
  background-color: #F1F1F1;
  font-size: 14px;
  width: 100%;
  padding: 8px 12px; 
  font-family: 'Poppins' !important;
  outline: none;
`
export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FormButton = styled.button`
  height: 40px;
  width: 200px;
  text-transform: capitalize;
  border-radius: 8px;
  border: 0;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  font-family: 'Poppins' !important;

  background-color: #EB5757;
  transition: 0.5s;
  cursor: pointer;

  &:hover, &:focus {
    box-shadow: inset 200px 0 0 0 #13131A;
  }
`
export const FormSpan = styled.span`
  font-size: 14px;
  color: #22222A;
  margin-top: 4px;
`
export const MessageTitle = styled.h1`
  color: #F1F1F1;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 18px;
  margin-bottom: 16px;

  max-width: 300px;
`
export const MessageSubtitle = styled.p`
	color: #F1F1F1;
  max-width: 350px;
  margin: 0;
  font-size: 14px;
`