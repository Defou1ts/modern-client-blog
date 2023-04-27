import axios from 'axios';

import type { ContactFormState } from '../../features/ContactForm/interfaces';

export const useGetFormApi = () => {
	const sendContactMessage = async (message: ContactFormState) => {
		const { status } = await axios.post('https://getform.io/f/a3bf6460-0a22-4829-8b6c-182ba714ef7d', message, {
			headers: { Accept: 'application/json' },
		});

		return { isSuccess: status === 200 };
	};

	const sendSubscribeMessage = async (email: string) => {
		const { status } = await axios.post(
			'https://getform.io/f/a3bf6460-0a22-4829-8b6c-182ba714ef7d',
			{
				email,
				type: 'subscribe',
			},
			{
				headers: { Accept: 'application/json' },
			}
		);

		return { isSuccess: status === 200 };
	};

	return { sendContactMessage, sendSubscribeMessage };
};
