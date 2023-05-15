import { useState, useMemo } from 'react';

import type { Post } from '../../interfaces';

export const usePostList = (posts: Post[], maxPosts: number) => {
	const [currentPage, setCurrentPage] = useState(0);

	const handlePrevClick = () => {
		setCurrentPage(currentPage - 1);
	};

	const handleNextClick = () => {
		setCurrentPage(currentPage + 1);
	};

	const isPrevDisabled = useMemo(() => currentPage === 0, [currentPage]);
	const isNextDisabled = useMemo(
		() => currentPage * maxPosts + maxPosts >= posts.length,
		[currentPage, maxPosts, posts]
	);
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
