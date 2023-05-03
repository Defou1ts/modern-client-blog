/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
	reactStrictMode: false,
	images: {
		domains: ['images.pexels.com', 'www.pexels.com'],
	},
	pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
	i18n,

	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: { not: /url/ }, // exclude if *.svg?url
				use: ['@svgr/webpack'],
			}
		);

		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
};
