import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import type { GetStaticProps } from 'next';

import { ContactPageWrapper } from '../app/wrappers/ContactPageWrapper';

import { ContactInfo } from '@widgets/ContactInfo';
import { ContactWorkTime } from '@widgets/ContactWorktime';
import { ContactForm } from '@features/ContactForm';
import { GoogleMap } from '@features/GoogleMap';
import { defaultLocale } from '@shared/lib/constants/defaultLocale';

const ContactPage = () => (
	<>
		<Head>
			<meta name="description" content="Let's start the conversation with Modsen! Send message for us" />
			<title>Contact Us | Modsen client blog</title>
		</Head>
		<ContactPageWrapper>
			<ContactInfo />
			<ContactWorkTime />
			<ContactForm />
			<GoogleMap />
		</ContactPageWrapper>
	</>
);

export default ContactPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? defaultLocale, ['common'])),
		},
	};
};
