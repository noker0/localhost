import "@/styles/globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const  router = useRouter()

  return (
    <>
     <Navbar/>    
      <Component {...pageProps} />
     <Footer/>
    </>
  );
}


