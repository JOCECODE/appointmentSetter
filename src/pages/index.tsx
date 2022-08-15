import Head from 'next/head';
import Homepage from "../components/Homepage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// import Layout, { siteTitle } from '../../components/layout';


export default function Home() {
  return (
    <>
      
      <Head>
        <title>Alyssa Appointment</title>
      </Head>
      <Navbar/>
      <Homepage />
      <Footer/>

    </>
  );
}