import Image from 'next/image'
import { AddToCartButton, ProductImage, ProductItem, ProductName, ProductOverlay, ProductPrice } from "./ProductStyles";

const Product = ({product}) => {
  return (
    <ProductItem>
      <ProductOverlay />
      <ProductImage>
        <Image src={product.productImageUrl} alt={product.productName} width={470} height={556} />
      </ProductImage>
      <ProductName>{product.productName}</ProductName>
      <ProductPrice>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(product.productPrice)}</ProductPrice>
      <AddToCartButton>Adicionar</AddToCartButton>
    </ProductItem>
  );
}

export default Product;