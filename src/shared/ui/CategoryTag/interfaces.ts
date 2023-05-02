export interface CategoryTagProps {
	tagName: string;
	isActive?: boolean;
	onClick?: (tag: any) => void;
	type: 'medium' | 'small';
	disabled?: boolean;
}
