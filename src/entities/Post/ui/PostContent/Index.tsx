import styles from './index.module.scss';

import { Heading } from '@shared/ui/Heading';
import { Paragraph } from '@shared/ui/Paragraph';

import type { PostContentProps } from './interfaces';

export const PostContent = ({ content }: PostContentProps) => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.content}>
				{content.map((contentItem) => {
					if ('title' in contentItem) {
						const { title } = contentItem;
						return (
							<Heading key={title} type="h2" className={styles.title}>
								{title}
							</Heading>
						);
					}
					if ('text' in contentItem) {
						const { text } = contentItem;

						return (
							<Paragraph type="medium" className={styles.text} key={text}>
								{text}
							</Paragraph>
						);
					}
					if ('li' in contentItem) {
						const { li } = contentItem;

						return (
							<ul className={styles.list} key={li[0]}>
								{li.map((text) => (
									<li key={text} className={styles.listItem}>
										<Heading type="h4" className={styles.listItemTitle}>
											{text}
										</Heading>
									</li>
								))}
							</ul>
						);
					}

					return <></>;
				})}
			</div>
		</section>
	);
};
