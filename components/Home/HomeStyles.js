import styled from 'styled-components'

export const HomeContainer = styled.main`
	background: #051937;
  background-color: linear-gradient(to right bottom, #051937, #023047);
  margin-top: -60px;
`
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
	margin-right: auto;
  padding: 75px 0 0 0;
`
export const HomeHeading = styled.h1`
  font-size: 32px;
  font-family: 'Graduate';
	font-weight: 600;
	color: #F6F6F6;
	text-align: center;
`
export const RoomsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 60px;
`