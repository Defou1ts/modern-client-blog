import type { Preview } from '@storybook/react';
import '@shared/theme/global.scss';
import '@shared/theme/normalize.scss';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
