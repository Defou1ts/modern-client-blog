import '@app/theme/normalize.scss';
import '@app/theme/global.scss';
import cn from 'classnames';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';

import { inter, sen } from '@app/lib/fonts';
import { store } from '@app/store/store';
import { ErrorBoundary } from '@app/wrappers/ErrorBoundary';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ErrorBoundary>
			<Provider store={store}>
				<Component className={cn(inter.className, sen.className)} {...pageProps} />
			</Provider>
		</ErrorBoundary>
	);
}

export default appWithTranslation(MyApp);
