import styled from 'styled-components'

export const PerksCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0;
  
  width: 50px;
  height: 50px;
  background-color: #E4E4E4;
  border-radius: 50%;

  transition: all 0.3s ease-out;
`
export const PerksCardItem = styled.div`
  width: 100%;
  min-height: 175px;
  height: auto;
  padding: 8px;
  position: relative;
  border-radius: 10px;
  margin-top: 48px;
  background-color: #F1F2F3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  cursor: pointer;
  
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;

  transition: transform ease-in-out 0.5s;

  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);
  
  &:hover {
    transform: scale(1.01);
  }

  &:hover ${PerksCardOverlay} {
    opacity: 1;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
` 
export const PerksCardImage = styled.div`
  position: absolute;
	top: 0;
	right: 0;
	left: 0;
	margin-left: auto;
	margin-right: auto;
	margin-top: -37.5px;

	width: 75px;
  height: 75px;
	border-radius: 75px;
	border: 3px solid #E6E6E6;
	overflow: hidden;
`
export const TextWrapper = styled.div`
  width: 100%;

	display: flex;
	flex-direction: column;
	gap: 16px;

	margin-bottom: 16px;
  margin-top: 32px;
`
export const PerksCardTitle = styled.p`
  color: #13131A;
  font-family: 'Kdam Thmor Pro', sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: center;

  z-index: 1;
`
export const PerksCardDescription = styled.p`
  color: #22222A;
  font-family: 'Kdam Thmor Pro', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: center;

  z-index: 1;
`
export const PerkButton = styled.button`
  width: 80%;
  height: 48px;
  margin-top: 8px;
  padding: 8px;
  border-radius: 8px;
  border: none;

  background-color: #13131A;
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: aliceblue;
  font-family: 'Kdam Thmor Pro', sans-serif;
  font-size: 16px;
  font-weight: 400;

  transition: ease-in-out 0.5s;
  cursor: pointer;
  z-index: 1;

  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #000;
    color: #F6F6F6;
  }
`
export const ButtonLink = styled.a`
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	
	padding: 10px 10px;
  background-color: #13131A;
	color: #F6F6F6;

  font-family: 'Kdam Thmor Pro', sans-serif;
	font-size: 16px;
	font-weight: 500;

	border-radius: 6px;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	cursor: pointer;
	transition: all 0.5s ease-in-out;

	text-decoration: none;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);

	&:hover {
		box-shadow: rgba(21, 21, 21, 0.4) 1.5px 3px;
		background-color: #000;
		color: #F6F6F6;
	}

	@media screen and (min-width: 768px) {
		max-width: 350px;
		margin-left: auto;
		margin-right: auto;
	}
`