interface Route {
	label: string;
	path: string;
}

export const routes: Route[] = [
	{
		label: 'Home',
		path: '/',
	},
	{
		label: 'Blog',
		path: '/blog',
	},
	{
		label: 'About Us',
		path: '/about',
	},
	{
		label: 'Contact Us',
		path: '/contact',
	},
];
