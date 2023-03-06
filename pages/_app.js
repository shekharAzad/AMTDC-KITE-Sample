import Footer from "@/components/Footer";
import Heaser from "@/components/Heaser";
import KiteSearch from "@/components/KiteSearch";
import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Navigation />
      <Heaser />
      <KiteSearch /> */}
      <Component {...pageProps} />;
    </>
  );
}

{
  /* <PageLayout>
  <Component {...pageProps} />
</PageLayout>; */
}
