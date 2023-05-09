import { getFormattedDateByLocale } from '.';

describe('Check getFormattedDateByLocale function', () => {
	it('Correctly date formatting en', () => {
		const date = new Date(1682424396280);

		const formattedDate = getFormattedDateByLocale('en', date);
		expect(formattedDate).toBe('April 25, 2023');
	});

	it('Correctly date formatting ru', () => {
		const date = new Date(1682424396280);

		const formattedDate = getFormattedDateByLocale('ru', date);
		expect(formattedDate).toBe('25 апреля 2023 г.');
	});
});
