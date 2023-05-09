const path = require('path');

module.exports = {
	i18n: {
		locales: ['en', 'ru'],
		defaultLocale: 'en',
		localePath: path.resolve('./src/app/locales'),
	},
};
