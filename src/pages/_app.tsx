import '@app/theme/normalize.scss';
import '@app/theme/global.scss';
import cn from 'classnames';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';

import { inter, sen } from '@app/lib/fonts';
import { store } from '@app/store/store';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component className={cn(inter.className, sen.className)} {...pageProps} />
		</Provider>
	);
}

export default appWithTranslation(MyApp);
