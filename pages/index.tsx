// import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Layout from "../components/Layout";


export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Open Car App</title>
        <meta name="description" content="car market place app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <section className={`px-4 bg-[url('/images/Rectangle38.png')] bg-no-repeat bg-[length:60%_65%] bg-right-top`}>
        <Layout>
          <Hero></Hero>
        </Layout>
      </section>
      <Footer></Footer>
      
    </>
  );
}
