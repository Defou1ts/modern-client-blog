import Link from 'next/link';
import Image from 'next/image';

import styles from './index.module.scss';
import { socialIcons } from './lib/socialIcons';

import { P } from '@shared/ui/P';

export const Social = () => {
	return (
		<div className={styles.social}>
			<div>
				<P className={styles.adressItem} type="medium">
					Finstreet 118 2561 Fintown
				</P>
				<P className={styles.adressItem} type="medium">
					Hello@finsweet.com 020 7993 2905
				</P>
			</div>
			<div className={styles.socialList}>
				{socialIcons.map(({ path, alt, title, src }) => (
					<Link key={path} href={path} target="_blank">
						<Image src={src} alt={alt} title={title} />
					</Link>
				))}
			</div>
		</div>
	);
};
