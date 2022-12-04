import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import fireDB from "../../firebase/initFirebase"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen);
	}

	const { user } = useAuth()
	const [userName, setUserName] = useState()

	useEffect(() => {
		async function getUserName() {
			const result = await getDoc(doc(fireDB, 'users', user.uid))
			setUserName(result.data().name)
		}

		getUserName()
	}, [user])

	return (
		<div className="content">
			<Navbar toggle={toggle} userName={userName} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;