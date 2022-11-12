import styled from 'styled-components'

export const CarouselWrapper = styled.div`
  margin-left: auto;
	margin-right: auto;
  padding: 25px 0 15px 0;

  width: 100%;
  background: #051937;
  background-color: linear-gradient(to right bottom, #051937, #023047);

  display: flex;
  flex-direction: column;
`
export const CarouselTitle = styled.h1`
  color: #F6F6F6;
  font-size: 24px; 
  font-family: 'Graduate';
  padding: 0 16px;
  font-weight: 500;
`
export const CarouselItems = styled.div`  
  display: flex;
  width: auto;
  
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  padding: 16px 0px;

  ::-webkit-scrollbar { background: transparent; }
`
export const CarouselItem = styled.div`
  flex: none;

  width: 300px;
  height: auto;
  scroll-snap-align: start;
  margin-right: 20px;
`
export const CarouseReallItem = styled.div`
  transform: translateX(16px);
  box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);

  border-radius: 10px;
`