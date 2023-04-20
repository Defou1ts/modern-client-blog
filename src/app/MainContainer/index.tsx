import Head from 'next/head';

import { Header } from '@widgets/Header';

import type { MainContainerProps } from './interfaces';

export const MainContainer = ({ title, description, children }: MainContainerProps) => {
	return (
		<>
			<Head>
				<meta name="description" content={description} />
				<title>{title}</title>
			</Head>
			<Header />
			<main>{children}</main>
			<footer>Footer</footer>
		</>
	);
};
