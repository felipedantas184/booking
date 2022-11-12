import styled from 'styled-components'

export const Container = styled.main`
	background: #008793;
	background-image: linear-gradient(to right top, #051937, #004d7a);

	height: 100vh;

	border: 2px solid burlywood;
`
export const Wrapper = styled.div`	
	height: 100%;

	margin-left: auto;
	margin-right: auto;
  padding: 75px 8px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	border: 2px solid brown;
`
export const Heading = styled.h1`
	font-size: 44px;
	font-family: 'Helvetica';
	font-weight: 600;
	color: #f6f6f6;
	text-align: center;
`