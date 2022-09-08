import "../styles/globals.css";
import type { AppProps } from "next/app";
import { makeServer } from "@/infra/mockedApi";
import { queryClient } from "@/infra/react-query";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { PToast } from "@/components";

if (process.env.MOCKED_API === "true") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
      <PToast />
    </QueryClientProvider>
  );
}

export default MyApp;
