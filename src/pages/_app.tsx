import "../styles/globals.css";
import type { AppProps } from "next/app";
import { makeServer } from "@/infra/mockedApi";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
