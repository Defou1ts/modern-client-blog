import { ROUTES } from '@shared/contants/routes';

import type { Route } from '@shared/interfaces/route';

export const routes: Route[] = [
	{
		translationPath: 'home',
		path: ROUTES.HOME,
	},
	{
		translationPath: 'blog',
		path: ROUTES.BLOG,
	},
	{
		translationPath: 'about',
		path: ROUTES.ABOUT,
	},
	{
		translationPath: 'contact',
		path: ROUTES.CONTACT,
	},
];
