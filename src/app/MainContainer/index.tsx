import Head from 'next/head';

import type { MainContainerProps } from './interfaces';

export const MainContainer = ({ title, description, children }: MainContainerProps) => {
	return (
		<>
			<Head>
				<meta name="description" content={description} />
				<title>{title}</title>
			</Head>
			<header>Header</header>
			<main>{children}</main>
			<footer>Footer</footer>
		</>
	);
};
