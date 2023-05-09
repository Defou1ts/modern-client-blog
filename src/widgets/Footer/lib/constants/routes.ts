import { ROUTES } from '@shared/lib/contants/routes';

import type { Route } from '@shared/lib/interfaces/route';

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
	{
		translationPath: 'privacy',
		path: ROUTES.PRIVACY,
	},
];
