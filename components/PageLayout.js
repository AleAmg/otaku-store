import Head from "next/head";
import Navbar from "./Navbar";

export default function PageLayout({ children, title = "Otaku Store" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="Store for peoples what they like anime" content="E-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        {children}</main>
      
    </>
  );
}
