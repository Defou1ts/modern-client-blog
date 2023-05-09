import { getAuthorFullName } from '.';

describe('Check getAuthorFullName function', () => {
	it('correctly format name and surname', () => {
		const name = 'John';
		const surname = 'Shepard';

		expect(getAuthorFullName(name, surname)).toBe(`${name} ${surname}`);
	});
});
