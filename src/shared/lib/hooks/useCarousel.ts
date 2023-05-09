import { useState } from 'react';

export const useCarousel = (maxSlides: number) => {
	const [slideIndex, setSlideIndex] = useState<number>(0);

	const handleNext = () => {
		setSlideIndex(slideIndex + 1);
	};

	const handlePrev = () => {
		setSlideIndex(slideIndex - 1);
	};

	const isDisabledPrev = slideIndex === 0;
	const isDisabledNext = slideIndex === maxSlides - 1;

	return { slideIndex, handleNext, handlePrev, isDisabledPrev, isDisabledNext };
};
