import { forwardRef } from 'react';
import type { ForwardedRef } from 'react';

import styles from './index.module.scss';

import type { HomePageWrapperProps } from './interfaces';

export const HomePageWrapper = forwardRef(function HomePageWrapper(
	{ children }: HomePageWrapperProps,
	ref: ForwardedRef<HTMLDivElement>
) {
	return (
		<div data-test-id='home-page-wrapper' ref={ref} className={styles.wrapper}>
			{children}
		</div>
	);
});
