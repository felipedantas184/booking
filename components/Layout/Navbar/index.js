import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaBook, FaHome, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { MobileIcon, NavbarBottom, NavbarContainer, NavbarItem, NavbarLink, NavbarLogo, NavbarLogout, NavbarMenu, NavbarWrapper } from "./NavbarStyles";
import { animateScroll as scroll } from 'react-scroll';
import { useAuth } from '../../../context/AuthContext';
import { useRouter } from 'next/router';

const Navbar = ({ toggle, userName }) => {
	const toggleHome = () => {
		scroll.scrollToTop();
	}

	const { logout } = useAuth()
	const router = useRouter()

	return (
		<NavbarContainer>
			<NavbarWrapper>
				<Link href="/" passHref>
					<NavbarLogo onClick={toggleHome}>
						<Image src={'/images/adufpi_logo.png'} alt="ADUFPI" layout='fill' />
					</NavbarLogo>
				</Link>
				<NavbarMenu>
					<NavbarBottom><NavbarItem><FaHome />
						<Link href={'/'}><NavbarLink>Principal</NavbarLink></Link></NavbarItem>
					</NavbarBottom>
					<NavbarBottom><NavbarItem><FaBook />
						<Link href={'/mybookings'}><NavbarLink>Minhas Reservas</NavbarLink></Link></NavbarItem>
					</NavbarBottom>
					{(userName) && (
						<NavbarBottom><NavbarItem><FaUser />
							<Link href={'/profile'} passHref ><NavbarLink>{(userName) ? userName : ('')}</NavbarLink></Link></NavbarItem>
						</NavbarBottom>
					)}
					<NavbarBottom><NavbarItem onClick={() => {
						logout()
						router.push('/login')
					}}><FaSignOutAlt />
						<NavbarLink>Logout</NavbarLink></NavbarItem>
					</NavbarBottom>
				</NavbarMenu>

				<MobileIcon onClick={toggle}>
					<FaBars color="#EB5757" />
				</MobileIcon>
			</NavbarWrapper>
		</NavbarContainer>
	);
}

export default Navbar;