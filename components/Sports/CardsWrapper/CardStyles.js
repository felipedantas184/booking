import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 100%;
  margin-left: auto;
	margin-right: auto;
  padding: 75px 8px 0 8px;
`
export const SportsCard = styled.div`
  background-color: #002320;
  
  width: 100%;
  height: auto;
  padding: 16px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`
export const CardTitle = styled.h3`
  font-family: 'Graduate';
  font-size: 24px;
  color: #FFF;
  font-weight: 600;

  margin-bottom: 8px;
`
export const CardInfoGroup = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;
`
export const CardTopic = styled.p`
  font-family: 'Graduate';
  font-size: 18px;
  color: #FFF;
  font-weight: 600;
`
export const CardDescription = styled.p`
  font-family: 'Graduate';
  font-size: 18px;
  color: #FFF;
  font-weight: 500;
`

export const JoinButton = styled.button`
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
  font-family: 'Graduate';
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

