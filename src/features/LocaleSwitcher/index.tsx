import { useRouter } from 'next/router';
import Link from 'next/link';

import cn from 'classnames';

import styles from './index.module.scss';

export const LocaleSwitcher = () => {
	const { locale, locales, pathname } = useRouter();

	return (
		<div data-test-id="locales" className={styles.locales}>
			{locales?.map((localeItem) => (
				<Link
					data-test-id={localeItem}
					href={pathname}
					locale={localeItem}
					key={localeItem}
					className={cn(styles.locale, {
						[styles.active]: localeItem === locale,
					})}
				>
					{localeItem}
				</Link>
			))}
		</div>
	);
};
