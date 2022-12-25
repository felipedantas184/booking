import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { WorkingOnIt } from '../styles/pages/working'
import Layout from '../components/Layout/Layout'
import Image from 'next/image'

const Working = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 10000)
  }, [router])

  return (
    <Layout>
      <WorkingOnIt>
        <Image src={'/images/working.svg'} alt="Estamos trabalhando" width={245} height={160} />
        <h1>Estamos Trabalhando!</h1>
        <h2>Falta pouco para você desfrutar desta funcionalidade ;-)</h2>
        <p>Redirecionando para em alguns segundos...</p>
      </WorkingOnIt>
    </Layout>
  );
}
 
export default Working;