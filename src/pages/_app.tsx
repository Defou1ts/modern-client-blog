import '@shared/theme/global.scss';
import '@shared/theme/normalize.scss';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
