import { useSelector } from 'react-redux';

import { selectFilteredByTagPosts } from '@app/store/selectors/category.selectors';
import { PostList } from '@entities/Post/ui/PostList';

export const CategoryPostList = () => {
	const filteredByTagPosts = useSelector(selectFilteredByTagPosts);

	return (
		<article>
			<PostList posts={filteredByTagPosts} maxPosts={5} />
		</article>
	);
};
