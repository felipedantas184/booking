import styled from "styled-components";

export const Container = styled.section` 
  background: whitesmoke;
	color: #000;
	font-family: 'Montserrat';
  margin-top: ${top => top ? '-60px' : '0'};
`
export const GridWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 100vh;
	margin-left: auto;
	margin-right: auto;
  padding: 100px 16px 75px 16px;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	gap: 24px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
}
`
export const HalfWrapper = styled.div`
	flex: 1;
	height: auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: relative;
`
export const TextWrapper = styled.div`
  width: 100%;

	display: flex;
	flex-direction: column;
	gap: 16px;

	margin-bottom: 48px;
`
export const Topline = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.1;
  font-family: 'Montserrat';
  color: #D47734;
`
export const Heading = styled.h1`
  font-size: 40px;
  font-weight: 600;
	font-family: 'Montserrat';
  line-height: 1.1;
  color: #000;
`
export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
  font-family: 'Montserrat';
  color: #13131A;
`
export const SubtitlePrice = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  font-family: 'Montserrat';
  color: #13131A;
`
export const Button = styled.div`
    align-self: flex-start;

    background: #13131A;
    color: #E6E6E6;
    border-radius: 16px;
    padding: 14px 48px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    font-size: 20px;
    font-weight: 600;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.5s ease-in-out;

    &:hover {
			color: #13131A;
			background: #D47734;
    }
`