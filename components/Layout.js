import Head from "next/head";
import Footer from "./Footer";
import Header from "./navigation/Header";

function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='title' content='Lending Hand Cleaners' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />

        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />

        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />

        <link rel='icon' href='/favicons/favicon.ico' />
        <link
          href='/favicons/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/favicons/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/favicons/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

Layout.defaultProps = {
  title: "Lending Hand Cleaners",
  description:
    "Eastern Tennessee residential cleaning company. Lending Hand Cleaners serves Cocke County and all of the surrounding areas.",
  keywords:
    "Residential cleaning, commercial cleaning, deep cleans, move out cleans, reliable cleaners, affordable cleaners, maid services, cleaners in cocke county.",
};
