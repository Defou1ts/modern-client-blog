import Head from 'next/head';

import { Layout } from './ui/Layout';

import type { MainContainerProps } from './interfaces';

export const MainContainer = ({ title, description, children }: MainContainerProps) => {
	return (
		<>
			<Head>
				<meta name="description" content={description} />
				<title>{title}</title>
			</Head>
			<Layout>{children}</Layout>
		</>
	);
};
