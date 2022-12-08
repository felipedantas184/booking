import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { FaArrowAltCircleRight, FaBars, FaBook, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { MobileIcon, NavbarContainer, NavbarItem, NavbarLink, NavbarLogo, NavbarLogout, NavbarMenu, NavbarWrapper } from "./NavbarStyles";
import { animateScroll as scroll } from 'react-scroll';
import { useAuth } from '../../../context/AuthContext';
import { useRouter } from 'next/router';

const Navbar = ({ toggle, userName }) => {
	const [scrollNav, setScrollNav] = useState(false)
	const changeNav = () => {
		if (window.scrollY >= 60) {
			setScrollNav(true)
		} else {
			setScrollNav(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [])

	const toggleHome = () => {
		scroll.scrollToTop();
	}


	const { user, logout } = useAuth()
	const router = useRouter()

	return (
		<NavbarContainer scrollNav={scrollNav}>
			<NavbarWrapper>
				<Link href="/" passHref>
					<NavbarLogo onClick={toggleHome}>ADUFPI</NavbarLogo>
				</Link>
				{user ? (
					<NavbarMenu>
						<NavbarItem>
							<FaBook />
							<NavbarLink>
								<Link href={'/mybookings'} >Minhas Reservas</Link>
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<FaUser />
							<NavbarLink>{userName}</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<FaSignOutAlt />
							<NavbarLink>Logout</NavbarLink>
						</NavbarItem>
					</NavbarMenu>
				) : (
					<>
						<Link href="/singup">Sing Up</Link>
						<Link href="/login">Login</Link>
					</>
				)
				}
				<MobileIcon onClick={toggle}>
					<FaBars color="#D47734" />
				</MobileIcon>
			</NavbarWrapper>
		</NavbarContainer>
	);
}

export default Navbar;