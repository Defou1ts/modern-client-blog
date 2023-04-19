import '@shared/theme/global.scss';
import '@shared/theme/normalize.scss';
import { inter, sen } from '@shared/lib/fonts';

import cn from 'classnames';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component className={cn(inter.className, sen.className)} {...pageProps} />;
}
