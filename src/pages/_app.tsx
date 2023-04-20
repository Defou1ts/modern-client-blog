import '@shared/theme/normalize.scss';
import '@shared/theme/global.scss';
import cn from 'classnames';

import { inter, sen } from '@shared/lib/fonts';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component className={cn(inter.className, sen.className)} {...pageProps} />;
}
