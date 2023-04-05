import Layout from '@/components/layout/layout'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head'


export type AboutProps = {
  text: string;
};

async function fetchData(){
  try{
    const response = await axios.get();
  }catch(error){
    console.log(error);
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  // const data = await fetchData();
  const data = {'text':"our app was created by django and react"};

  return {
    props:{
      data,
    },
    revalidate: 60,
  }
}

// const About: NextPage = ({about,}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const MyPage: NextPage<Props> = ({ title }) => {
const About: NextPage<AboutProps> = ({text,}) => {
  return(
    <Layout>
      <h2>About</h2>
      <p>{text}</p>
    </Layout>
  )
}


export default About;