import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import "../core/global.css";

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default appWithTranslation(App);