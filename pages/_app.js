import "../styles/globals.css";
import ContentBox from "./Components/Content/ContentBox";
import Footer from "./Components/Footer/Footer";
import FooterBanner from "./Components/Footer/FooterBanner";
import Navbar from "./Components/Navbar/Navbar";
import UrlContainer from "./Components/URLContainer/UrlContainer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ContentBox />
      <UrlContainer/>
      <FooterBanner/>
      <Footer/>
    </>
  );
}

export default MyApp;
