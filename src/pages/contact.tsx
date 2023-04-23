import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps } from 'next';

import { ContactPageWrapper } from '../app/wrappers/ContactPageWrapper';

import { MainContainer } from '@app/wrappers/MainContainer';
import { ContactInfo } from '@widgets/ContactInfo';
import { ContactWorkTime } from '@widgets/ContactWorktime';
import { ContactForm } from '@features/ContactForm';
import { GoogleMap } from '@features/GoogleMap';

const ContactPage = () => (
	<MainContainer
		title="Contact Us | Modsen client blog"
		description="Let's start the conversation with Modsen! Send message for us"
	>
		<ContactPageWrapper>
			<ContactInfo />
			<ContactWorkTime />
			<ContactForm />
			<GoogleMap />
		</ContactPageWrapper>
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
