import Homepage from "../components/Homepage";
import Footer from "../components/Footer";
import { NextPage } from "next";


// import Layout, { siteTitle } from '../../components/layout';


export const Home:NextPage = (props) => {
  return (
    <>
      <Homepage />
      <Footer/>

    </>
  );
}

export default Home;