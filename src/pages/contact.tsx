import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps } from 'next';

import { MainContainer } from '@app/MainContainer';
import { Contact } from '@widgets/Contact';

const ContactPage = () => (
	<MainContainer
		title="Contact Us | Modsen client blog"
		description="Let's start the conversation with Modsen! Send message for us"
	>
		<Contact />
	</MainContainer>
);

export default ContactPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	if (locale === undefined) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};
