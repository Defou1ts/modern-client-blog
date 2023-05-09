import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { useLocale } from '@shared/lib/hooks/useLocale';
import { H } from '@shared/ui/H';
import { P } from '@shared/ui/P';
import { getFormattedDateByLocale } from '@shared/lib/utils/getFormattedDateByLocale';

export const Privacy = () => {
	const { locale } = useLocale();
	const { t } = useTranslation();

	const updatedDate = new Date(2022, 0, 22);

	return (
		<div className={styles.privacy}>
			<article className={styles.titleWrapper}>
				<H type="h1" className={styles.title}>
					{t('privacy.title')}
				</H>
				<P type="medium" className={styles.updatedAt}>
					{t('privacy.updatedAt')} {getFormattedDateByLocale(locale, updatedDate)}
				</P>
			</article>
			<article className={styles.content}>
				<div className={styles.contentBlock}>
					<H type="h1" className={styles.subtitle}>
						Lorem ipsum dolor sit amet
					</H>
					<P type="medium" className={styles.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
						adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus
						mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
						gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem sed risus
						ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu
						lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla.
						Neque convallis a cras semper auctor neque vitae tempus quam.
					</P>
				</div>
				<div className={styles.contentBlock}>
					<H type="h2" className={styles.subtitle}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
					</H>
					<P type="medium" className={styles.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
						sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
						montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam.
						Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis
						urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam
						erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut
						placerat orci nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
					</P>
					<P type="medium" className={styles.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
						sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
						montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam.
						Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis
						urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam
						erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut
						placerat orci nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
					</P>
				</div>
			</article>
		</div>
	);
};
