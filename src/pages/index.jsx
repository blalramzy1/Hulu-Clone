import Image from 'next/image';
import Head from 'next/head';
import Header from './components/Header';
import Nav from './components/Nav';
import requests from '../../utils/requests';
import Results from './components/Results';
import { GetServerSideProps } from 'next';

export default function Home({results}) {
  // console.log(results)
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      <Header />
      <Nav />
      <Results results={results}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genra = context.query.genra;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genra]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  const results = request.results || null; // Handle the case when `results` is undefined

  return {
    props: {
      results,
    },
  };
}
