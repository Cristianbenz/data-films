import type { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
        <main className="max-w-7xl mx-auto">
          <Component {...pageProps} />
        </main>
      <footer className="border-t-secondary border-t-2 border-t-solid flex justify-center items-center w-screen h-28 mt-5">
        Made by Cbenz
      </footer>
    </>
  );
}
