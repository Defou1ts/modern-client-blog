/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
	reactStrictMode: false,
	pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
	i18n,
};
