import { useState } from 'react';

import type { Post } from '../../interfaces';

export const usePostList = (posts: Post[], maxPosts: number) => {
	const [currentPage, setCurrentPage] = useState(0);

	const handlePrevClick = () => {
		setCurrentPage((prev) => prev - 1);
	};

	const handleNextClick = () => {
		setCurrentPage((prev) => prev + 1);
	};

	const isPrevDisabled = currentPage === 0;
	const isNextDisabled = currentPage * maxPosts + maxPosts >= posts.length;

	const needButtons = !(isNextDisabled && isPrevDisabled);

	const postsToRender = posts.slice(currentPage * maxPosts, currentPage * maxPosts + maxPosts);

	return {
		postsToRender,
		handlePrevClick,
		handleNextClick,
		isPrevDisabled,
		isNextDisabled,
		needButtons,
	};
};
