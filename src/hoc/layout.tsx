import React from "react";
import Head from "next/head";
import Header from "../components/header";

//It's advised to follow this pre-defined layout
// import Header from "../Components/Header/Header";
// import Footer from "../Components/Footer/Footer";

// All static files like icons and json should be placed in the public folder

const Layout = (props: { children: any; }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <link rel="manifest" href="/manifest.json" />

        <title>Your App Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100%",
          }}
        >
          <Header></Header>
          {props.children}
          {/* <Footer /> */}
        </div>
      </main>
    </>
  );
};

export default Layout;