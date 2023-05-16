import type { ReactNode } from 'react';

export interface ModalProps {
	children: ReactNode;
	isOpened: boolean;
	onClose: () => void;
}
