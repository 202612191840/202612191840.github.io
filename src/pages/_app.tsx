import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      onContextMenuCapture={(event) => {
        const target = event.target;
        if (
          target instanceof Element &&
          (target instanceof HTMLImageElement || target.closest("img"))
        ) {
          event.preventDefault();
        }
      }}
    >
      <Component {...pageProps} />
    </div>
  );
}
