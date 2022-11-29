import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { ExtLink, MobileIcon, LogoWrapper, NavbarBtn, NavbarBtnLink, NavbarContainer, NavbarItem, NavbarLinks, NavbarLogo, NavbarMenu, NavbarWrapper } from "./NavbarStyles";
import { animateScroll as scroll } from 'react-scroll';
import { useAuth } from '../../../context/AuthContext';
import { useRouter } from 'next/router';

const Navbar = ({ toggle }) => {
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
				<LogoWrapper>
					<Image src="/LogoCarcara.png" alt="A.A.A Carcará Logo" width={50} height={50} />
				</LogoWrapper>
				<Link href="/" passHref>
					<NavbarLogo onClick={toggleHome}>BookingApp</NavbarLogo>
				</Link>
				{user ? (
					<button onClick={() => {
						logout() 
						router.push('/login')
					}}>Logout</button>
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