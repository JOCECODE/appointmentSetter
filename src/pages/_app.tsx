import "../styles/globals.css";
import "../styles/footer.css";
import "../styles/about.css";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react"
export default function MyApp({
          Component,
          pageProps: { session, ...pageProps },
        }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

