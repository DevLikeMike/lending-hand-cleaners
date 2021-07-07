import Head from "next/head";
import Footer from "./Footer";
import Header from "./navigation/Header";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Cleaners</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
