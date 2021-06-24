import "../assets/main.css";
import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Alert from "../components/layout/Alert";

import GithubState from "../context/github/GithubState";
import AlertState from "../context/alert/AlertState";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GithubState>
        <AlertState>
          <Head>
            <title>Github Finder</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Navbar title="Github Finder"></Navbar>
          <Alert />
          <Component {...pageProps} />
        </AlertState>
      </GithubState>
    </>
  );
}
