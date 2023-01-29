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
	const [userData, setUserData] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getUserData = async () => {
			setLoading(true);

			try {
				const docRef = doc(fireDB, "users", user.uid);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					setUserData(docSnap.data());
				} else {
					setUserData(undefined);
					console.log('No document!');
				}
			} catch (e) {
				setError(e.message);
			}
			setLoading(false);
		};

		getUserData();
	}, [user])

	return (
		<div className="content">
			{(!userData) ? (
				<Navbar toggle={toggle} userName='Perfil' />
			) : (
				<Navbar toggle={toggle} userName={userData.name} />
			)}
			<Sidebar isOpen={isOpen} toggle={toggle} />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;