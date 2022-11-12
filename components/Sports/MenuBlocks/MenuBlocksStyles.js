import styled from 'styled-components'

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

  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);
  
  &:hover {
    transform: scale(1.025);
  }
`
export const MenuBlockName = styled.h3`
  font-family: 'Graduate';
  font-size: 18px;
  color: #FFF;
  font-weight: 500;
`