import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap, ExtLink, LogoWrapper, SidebarExternalLink } from './SidebarStyles'
import Image from 'next/image';
import Link from "next/link";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <LogoWrapper>
        <Image src={'/images/adufpi_logo.png'} width={200} height={66} alt='ADUFPI'  />
      </LogoWrapper>
      <SidebarWrapper>
        <SidebarMenu>
          <div></div>
          <li>
					  <Link href='/working' passHref>
              <SidebarLink onClick={toggle}>Quartos</SidebarLink>
            </Link>
          </li>
          <li>
            <Link href='/carteira-digital' passHref>
              <SidebarLink onClick={toggle}>Minhas Reservas</SidebarLink>
            </Link>
          </li>
          <li>
            <Link href='/vantagens' passHref>
              <SidebarLink onClick={toggle}>Meu Perfil</SidebarLink>
            </Link>
          </li>
          <li>
					  <Link href='/working' passHref>
              <SidebarLink onClick={toggle}>Informações</SidebarLink>
            </Link>
          </li>
        </SidebarMenu>
        <SideBtnWrap onClick={toggle}>
          <Link href="/" passHref>
            <SidebarRoute>Contato</SidebarRoute>
          </Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
