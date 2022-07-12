import "../styles/globals.css";
import ContentBox from "./Components/Content/ContentBox";
import Navbar from "./Components/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ContentBox />
    </>
  );
}

export default MyApp;
