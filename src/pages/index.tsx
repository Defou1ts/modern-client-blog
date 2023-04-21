import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps } from 'next';

import { MainContainer } from '@app/MainContainer';
import { H } from '@shared/ui/H';
import { P } from '@shared/ui/P';

const Index = () => (
	<MainContainer title="Home | Modsen client blog" description="Modsen client blog">
		<div>Hello</div>
		<H type="display">Hello</H>
		<P type="medium">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda explicabo commodi iste
			necessitatibus, debitis natus aspernatur id sit cum perspiciatis fugiat consectetur adipisci exercitationem
			dolorum repellat quam aliquam alias expedita deleniti vel? Reprehenderit rerum quos iste, odit consequatur
			similique.
		</P>
		<P type="small">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda explicabo commodi iste
			necessitatibus, debitis natus aspernatur id sit cum perspiciatis fugiat consectetur adipisci exercitationem
			dolorum repellat quam aliquam alias expedita deleniti vel? Reprehenderit rerum quos iste, odit consequatur
			similique.
		</P>
		<P type="label">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda explicabo commodi iste
			necessitatibus, debitis natus aspernatur id sit cum perspiciatis fugiat consectetur adipisci exercitationem
			dolorum repellat quam aliquam alias expedita deleniti vel? Reprehenderit rerum quos iste, odit consequatur
			similique.
		</P>
	</MainContainer>
);

export default Index;

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
