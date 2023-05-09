import BusinessIcon from '@app/assets/icons/business.png';
import StartupIcon from '@app/assets/icons/startup.png';
import EconomyIcon from '@app/assets/icons/economy.png';
import TechnologyIcon from '@app/assets/icons/technology.png';

import type { PostCategoryType } from '@entities/Post/types';
import type { PostCategory } from '@entities/Post/interfaces';

export const allPostCategories: Record<PostCategoryType, PostCategory> = {
	business: {
		categoryType: 'business',
		icon: BusinessIcon,
		title: {
			en: 'Business',
			ru: 'Бизнес',
		},
		description: {
			en: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
			ru: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		},
	},
	startup: {
		categoryType: 'startup',
		icon: StartupIcon,
		title: {
			en: 'Startup',
			ru: 'Стартап',
		},
		description: {
			en: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
			ru: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		},
	},
	economy: {
		categoryType: 'economy',
		icon: EconomyIcon,
		title: {
			en: 'Economy',
			ru: 'Экономика',
		},
		description: {
			en: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
			ru: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		},
	},
	technology: {
		categoryType: 'technology',
		icon: TechnologyIcon,
		title: {
			en: 'Technology',
			ru: 'Технологии',
		},
		description: {
			en: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
			ru: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		},
	},
};
