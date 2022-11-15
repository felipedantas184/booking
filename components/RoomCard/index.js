import Link from 'next/link'
import Image from 'next/image'
import { AddToCartButton, RoomImage, RoomItem, RoomName, RoomOverlay, RoomPrice } from "./RoomCardStyles";

const RoomCard = ({room, fromdate, todate}) => {
  const { title, slug, price, imageurl } = room

  return (
    <RoomItem>
      <RoomOverlay />
      <RoomImage>
        <Image src={'https:' + imageurl} alt={title} width={470} height={556} />
      </RoomImage>
      <RoomName>{title}</RoomName>
      <RoomPrice>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(price)}</RoomPrice>
      
      {(fromdate && todate) && (
        <AddToCartButton>
          <Link href={'/' + slug}>Adicionar</Link>
        </AddToCartButton>
      )}
      
    </RoomItem>
  );
}

export default RoomCard;