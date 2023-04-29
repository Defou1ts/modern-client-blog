export const getFormattedDateByLocale = (locale: Intl.LocalesArgument, date: Date) => {
	return date.toLocaleString(locale, {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});
};
