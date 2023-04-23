export interface ContactFormState {
	name: string;
	email: string;
	location: string | null;
	message: string;
}

export interface Location {
	translationPath: string;
	value: string;
}
