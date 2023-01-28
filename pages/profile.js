import { collection, getDocs } from "firebase/firestore";
import Layout from "../components/Layout/Layout";
import Profile from "../components/ProfilePage";
import fireDB from "../firebase/initFirebase";

export async function getServerSideProps() {
  const firebaseUsers = await getDocs(collection(fireDB, "users"));
  const users = []
  firebaseUsers.forEach((doc) => {
    const obj = {
      id: doc.id,
      ...doc.data()
    }

    users.push(obj)
  });

  return {
    props: {
      users
    }
  }
}

const ProfilePage = ({ users }) => {
  return ( 
    <Layout>
      <Profile users={users} />
    </Layout>
   );
}
 
export default ProfilePage;