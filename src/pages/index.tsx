import Head from 'next/head';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import Layout, { siteTitle } from '../../components/layout';


export default function Home() {
  return (
    <>
      
      <Head>
        <title>Alyssa Appointment</title>
      </Head>
      <Navbar />
      <Footer/>

    </>
  );
}