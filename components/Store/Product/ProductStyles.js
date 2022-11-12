import styled from 'styled-components'

export const ProductContainer = styled.main`
	background: #F5F5F7;
	height: auto;

	border: 2px solid burlywood;
`
export const ProductWrapper = styled.div`	
	height: 100%;

	margin-left: auto;
	margin-right: auto;
  padding: 75px 8px;

	display: flex;
	flex-direction: column;
	align-items: center;
`
export const ProductHeading = styled.h1`
	font-size: 44px;
  font-family: 'Kdam Thmor Pro', sans-serif;
	font-weight: 600;
	color: #11111A;
	text-align: center;
`

/** Product List */

export const ProductList = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 4px;
`
export const ProductOverlay = styled.div`
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
export const ProductItem = styled.div`
  width: 100%;
  height: auto;
  padding: 8px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
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

  &:hover ${ProductOverlay} {
    opacity: 1;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
` 
export const ProductImage = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  z-index: 1;

  transition: transform ease-in-out 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`
export const ProductName = styled.p`
  color: #13131A;
  font-family: 'Kdam Thmor Pro', sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: center;

  z-index: 1;
`
export const ProductPrice = styled.p`
  color: #22222A;
  font-family: 'Kdam Thmor Pro', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: center;

  z-index: 1;
`
export const AddToCartButton = styled.button`
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