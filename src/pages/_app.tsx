import "../styles/globals.css";
import "../styles/footer.css";
import "../styles/about.css";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import Navbar from "../components/Navbar";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Navbar/>
  <Component {...pageProps} />;
  </>
  );
}

export default MyApp;
