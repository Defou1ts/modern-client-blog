import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';
import { cards } from './lib/constants/cards';
import { TestimonalsCarouselCard } from './ui/TestimonalsCarouselCard';

import ArrowLeftIcon from '@app/assets/icons/arrow-left.svg';
import { H } from '@shared/ui/H';
import { P } from '@shared/ui/P';
import { useCarousel } from '@shared/hooks/useCarousel';

export const TestimonalsCarousel = () => {
	const { slideIndex, handleNext, handlePrev, isDisabledPrev, isDisabledNext } = useCarousel(3);

	const { t } = useTranslation();
	return (
		<article data-test-id="testimonals-carousel" className={styles.wrapper}>
			<div className={styles.info}>
				<p className={styles.subtitle}>{t('home.testimonals.subtitle')}</p>
				<H type="h2" className={styles.title}>
					{t('home.testimonals.title')}
				</H>
				<P type="medium" className={styles.description}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
				</P>
			</div>
			<div className={styles.line}></div>
			<div className={styles.carouselWrapper}>
				<div className={styles.carousel} style={{ left: `${-slideIndex * 100}%` }}>
					{cards.map((card) => (
						<TestimonalsCarouselCard key={card.author.id} testimonal={card} />
					))}
				</div>
				<div className={styles.navigation}>
					<button
						className={cn(styles.button, styles.buttonPrev, {
							[styles.disabled]: isDisabledPrev,
						})}
						onClick={handlePrev}
					>
						<ArrowLeftIcon />
					</button>
					<button
						className={cn(styles.button, styles.buttonNext, {
							[styles.disabled]: isDisabledNext,
						})}
						onClick={handleNext}
					>
						<ArrowLeftIcon />
					</button>
				</div>
			</div>
		</article>
	);
};
