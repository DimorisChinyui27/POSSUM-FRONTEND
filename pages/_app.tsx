import "../styles/globals.css";
import type { AppProps } from "next/app";
//import "~antd/dist/antd.css";
import "antd/dist/antd.css";
import "animate.css";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
