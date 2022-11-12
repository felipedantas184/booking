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
        <Image src="/LogoCarcara.png" alt='Logo Carcará' width={70} height={70} />
      </LogoWrapper>
      <SidebarWrapper>
        <SidebarMenu>
          <div></div>
          <li>
					  <Link href='/working' passHref>
              <SidebarLink onClick={toggle}>Produtos</SidebarLink>
            </Link>
          </li>
          <li>
            <Link href='/carteira-digital' passHref>
              <SidebarLink onClick={toggle}>Carteirinha</SidebarLink>
            </Link>
          </li>
          <li>
            <Link href='/vantagens' passHref>
              <SidebarLink onClick={toggle}>Vantagens</SidebarLink>
            </Link>
          </li>
          <li>
					  <Link href='/working' passHref>
              <SidebarLink onClick={toggle}>Treinos</SidebarLink>
            </Link>
          </li>
        </SidebarMenu>
        <SideBtnWrap onClick={toggle}>
          <Link href="/" passHref>
            <SidebarRoute>Home</SidebarRoute>
          </Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
