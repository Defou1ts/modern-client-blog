import { useRouter } from 'next/router';
import Link from 'next/link';

import cn from 'classnames';

import styles from './index.module.scss';

export const LocalesList = () => {
	const { locale, locales } = useRouter();

	return (
		<div data-test-id="locales" className={styles.locales}>
			{locales?.map((localeItem) => (
				<Link
					data-test-id={localeItem}
					href="/"
					locale={localeItem}
					key={localeItem}
					className={cn(styles.locale, {
						[styles.active]: localeItem === locale,
					})}
				>
					{localeItem.toUpperCase()}
				</Link>
			))}
		</div>
	);
};
