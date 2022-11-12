import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { WorkingOnIt } from '../styles/pages/working'
import Layout from '../components/Layout/Layout'

const Working = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  }, [])

  return (
    <Layout>
      <WorkingOnIt>
        <h1>Estamos Trabalhando Nisso!</h1>
        <h2>Falta pouco para você desfrutar dessa funcionalidade:(</h2>
        <p>Redirecionando para <Link href="/"><a className="BackLink">Homepage</a></Link> em alguns segundos ;)...</p>
      </WorkingOnIt>
    </Layout>
  );
}
 
export default Working;