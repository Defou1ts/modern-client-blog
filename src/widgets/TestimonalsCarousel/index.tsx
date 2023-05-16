import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';
import { cards } from './lib/constants/cards';
import { TestimonalsCarouselCard } from './ui/TestimonalsCarouselCard';

import { Heading } from '@shared/ui/Heading';
import { Paragraph } from '@shared/ui/Paragraph';
import { useCarousel } from '@shared/lib/hooks/useCarousel';
import { ArrowButton } from '@shared/ui/ArrowButton';

export const TestimonalsCarousel = () => {
	const { slideIndex, handleNext, handlePrev, isDisabledPrev, isDisabledNext } = useCarousel(3);

	const { t } = useTranslation();
	return (
		<section data-test-id="testimonals-carousel" className={styles.wrapper}>
			<div className={styles.info}>
				<p className={styles.subtitle}>{t('home.testimonals.subtitle')}</p>
				<Heading type="h2" className={styles.title}>
					{t('home.testimonals.title')}
				</Heading>
				<Paragraph type="medium" className={styles.description}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
				</Paragraph>
			</div>
			<div className={styles.line}></div>
			<div className={styles.carouselWrapper}>
				<div className={styles.carousel} style={{ left: `${-slideIndex * 100}%` }}>
					{cards.map((card) => (
						<TestimonalsCarouselCard key={card.author.id} testimonal={card} />
					))}
				</div>
				<div className={styles.navigation}>
					{!isDisabledPrev && <ArrowButton type="left" onClick={handlePrev} />}
					{!isDisabledNext && <ArrowButton type="right" onClick={handleNext} />}
				</div>
			</div>
		</section>
	);
};
