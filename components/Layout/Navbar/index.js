import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaBook, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { MobileIcon, NavbarBottom, NavbarContainer, NavbarItem, NavbarLink, NavbarLogo, NavbarLogout, NavbarMenu, NavbarWrapper } from "./NavbarStyles";
import { animateScroll as scroll } from 'react-scroll';
import { useAuth } from '../../../context/AuthContext';
import { useRouter } from 'next/router';

const Navbar = ({ toggle, userName }) => {
	const toggleHome = () => {
		scroll.scrollToTop();
	}

	const { user, logout } = useAuth()
	const router = useRouter()

	return (
		<NavbarContainer>
			<NavbarWrapper>
				<Link href="/" passHref>
					<NavbarLogo onClick={toggleHome}>
						<Image src={'/images/adufpi_logo.png'} alt="ADUFPI" layout='fill' />
					</NavbarLogo>
				</Link>
				{user ? (
					<NavbarMenu>
						<NavbarBottom>
							<NavbarItem>
								<FaBook />
								<NavbarLink>
									<Link href={'/mybookings'} >Minhas Reservas</Link>
								</NavbarLink>
							</NavbarItem>
						</NavbarBottom>
						<NavbarBottom>
							<NavbarItem>
								<FaUser />
								<NavbarLink>{userName}</NavbarLink>
							</NavbarItem>
						</NavbarBottom>
						<NavbarBottom>
							<NavbarItem onClick={() => {
								logout()
								router.push('/login')
							}} >
								<FaSignOutAlt />
								<NavbarLink>Logout</NavbarLink>
							</NavbarItem>
						</NavbarBottom>
					</NavbarMenu>
				) : (
					<>
						<Link href="/singup">Sing Up</Link>
						<Link href="/login">Login</Link>
					</>
				)
				}
				<MobileIcon onClick={toggle}>
					<FaBars color="#EB5757" />
				</MobileIcon>
			</NavbarWrapper>
		</NavbarContainer>
	);
}

export default Navbar;