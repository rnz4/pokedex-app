import { PokeTeamProvider } from "./../context/poketeam-context";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PokeTeamProvider>
      <Component {...pageProps} />
    </PokeTeamProvider>
  );
}
