export type WindowWithGoogle = Window &
	typeof globalThis & {
		google: any;
	};
