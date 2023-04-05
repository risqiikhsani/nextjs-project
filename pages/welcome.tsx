import Layout from '@/components/layout/layout'
import { NextPage } from 'next';
import Head from 'next/head'



const Welcome: NextPage = () => {
  return (
    <Layout
      title={"Welcome to MyApp"}
    >
      welcome
    </Layout>
  )
}

export default Welcome;