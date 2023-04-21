interface Route {
	translationPath: string;
	path: string;
}

export const routes: Route[] = [
	{
		translationPath: 'home',
		path: '/',
	},
	{
		translationPath: 'blog',
		path: '/blog',
	},
	{
		translationPath: 'contact',
		path: '/about',
	},
	{
		translationPath: 'about',
		path: '/contact',
	},
];
