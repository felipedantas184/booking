import Head from 'next/head'
import MemberCard from '../../components/MemberCard';
import { MembersData } from '../../components/MemberCard/MembersData';
import Layout from '../../components/Layout/Layout';

export const getStaticPaths = async () => {
  const paths = MembersData.map(item => {
    return {
      params: { slug: item.registration }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const data = MembersData.filter(item => item.registration == slug);

  return {
    props: { member: data[0] }
  }
}

export default function RecipeDetails({ member }) {
  return (
    <>
    <Head>
      <title>Carteira Digital | A.A.A. Carcará</title>
      <meta name="description" content="🦅 Associação Atlética Acadêmica da Medicina UFPI | 🏆 A primeira e maior do PI, desde 2013" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      
      <meta property="og:title" content="Carteira Digital | A.A.A. Carcará | Medicina UFPI"/>
      <meta property="og:type" content="school"/>
      <meta property="og:description" content="🦅 Associação Atlética Acadêmica da Medicina UFPI | 🏆 A primeira e maior do PI, desde 2013"/>
      <meta property="og:image" content="/apple-touch-icon.png"/>
      <meta property="og:site_name" content="A.A.A. Carcará"/>

      <meta property="twitter:title" content="Carteira Digital | A.A.A. Carcará | Medicina UFPI"/>
      <meta property="twitter:url" content="https://carcara.vercel.app/"/>
      <meta property="twitter:description" content="🦅 Associação Atlética Acadêmica da Medicina UFPI | 🏆 A primeira e maior do PI, desde 2013"/>
      <meta property="twitter:image" content="/apple-touch-icon.png"/>
    </Head>
    <Layout>
      <MemberCard member={member} />
    </Layout>
    </>
  )
}
