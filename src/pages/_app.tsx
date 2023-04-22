import '@app/theme/normalize.scss';
import '@app/theme/global.scss';
import cn from 'classnames';
import { appWithTranslation } from 'next-i18next';

import { inter, sen } from '@shared/lib/fonts';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component className={cn(inter.className, sen.className)} {...pageProps} />;
}

export default appWithTranslation(MyApp);
