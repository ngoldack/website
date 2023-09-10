/** @type {import("prettier").Config} */
export default {
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	trailingComma: 'all',
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
};
