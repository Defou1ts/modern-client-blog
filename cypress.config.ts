import { defineConfig } from 'cypress';

const APP_HOST = process.env.NEXT_PUBLIC_APP_HOST ?? 'localhost';
const APP_PORT = process.env.NEXT_PUBLIC_APP_PORT ?? '3000';

export default defineConfig({
	e2e: {
		baseUrl: `http://${APP_HOST}:${APP_PORT}`,
		screenshotsFolder: 'cypress/report/screenshots',
		reporter: 'mochawesome',
		reporterOptions: {
			html: false,
			json: true,
			reportDir: 'cypress/report',
			reportFilename: 'report',
			overwrite: true,
		},
	},
});
