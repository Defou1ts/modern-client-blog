import '@app/theme/normalize.scss';
import '@app/theme/global.scss';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';

import { store } from '@app/store/store';
import { ErrorBoundary } from '@app/wrappers/ErrorBoundary';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ErrorBoundary>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</ErrorBoundary>
	);
}

export default appWithTranslation(MyApp);
