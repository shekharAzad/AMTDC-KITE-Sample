import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Heaser from "@/components/Heaser";
import Navigation from "@/components/Navigation";
import KiteSearch from "@/components/KiteSearch";
import KiteMain from "@/components/KiteMain";
import KiteAnalytics from "@/components/KiteAnalytics";
import Resource from "@/components/Resource";
import Blog from "@/components/Blog";
import FocusArea from "@/components/FocusArea";
import TechnInov from "@/components/TechnInov";
import Footer from "@/components/Footer";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const getme = async () => {
  //   const res = await fetch("http://localhost:8080/azad");
  //   const data = await res.json();
  //   console.log("Data: ", data);
  // };

  // getme();

  return (
    <>
      <Navigation />
      <Heaser />
      <KiteSearch />
      <KiteMain />
      <KiteAnalytics />
      <Resource />
      <Blog />
      <FocusArea />
      <TechnInov />
      <Footer />
    </>
  );
}
