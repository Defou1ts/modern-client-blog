import styles from './index.module.scss';

import { socialIcons } from '../../constants/socialIcons';

import { P } from '@shared/ui/P';
import { SocialLink } from '@shared/ui/SocialLink';

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
				{socialIcons.map((props) => (
					<SocialLink key={props.path} {...props} />
				))}
			</div>
		</div>
	);
};
