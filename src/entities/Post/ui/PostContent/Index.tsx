import styles from './index.module.scss';

import { H } from '@shared/ui/H';
import { P } from '@shared/ui/P';

import type { PostContentProps } from './interfaces';

export const PostContent = ({ content }: PostContentProps) => {
	return (
		<article className={styles.wrapper}>
			<div className={styles.content}>
				{content.map((contentItem) => {
					if ('title' in contentItem) {
						const { title } = contentItem;
						return (
							<H key={title} type="h2" className={styles.title}>
								{title}
							</H>
						);
					}
					if ('text' in contentItem) {
						const { text } = contentItem;

						return (
							<P type="medium" className={styles.text} key={text}>
								{text}
							</P>
						);
					}
					if ('li' in contentItem) {
						const { li } = contentItem;

						return (
							<ul className={styles.list} key={li[0]}>
								{li.map((text) => (
									<li key={text} className={styles.listItem}>
										<H type="h4" className={styles.listItemTitle}>
											{text}
										</H>
									</li>
								))}
							</ul>
						);
					}

					return <></>;
				})}
			</div>
		</article>
	);
};
