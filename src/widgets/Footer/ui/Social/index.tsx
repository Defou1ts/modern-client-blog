import styles from './index.module.scss';

import { socialIcons } from '../../lib/constants/socialIcons';

import { Paragraph } from '@shared/ui/Paragraph';
import { SocialLink } from '@shared/ui/SocialLink';

export const Social = () => {
	return (
		<div className={styles.social}>
			<div>
				<Paragraph className={styles.adressItem} type="medium">
					Finstreet 118 2561 Fintown
				</Paragraph>
				<Paragraph className={styles.adressItem} type="medium">
					Hello@finsweet.com 020 7993 2905
				</Paragraph>
			</div>
			<div className={styles.socialList}>
				{socialIcons.map((props) => (
					<SocialLink key={props.path} {...props} />
				))}
			</div>
		</div>
	);
};
