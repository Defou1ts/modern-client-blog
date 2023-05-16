import type { MouseEventHandler } from 'react';

import styles from './index.module.scss';

import { useGlobalScrollBlock } from '@shared/lib/hooks/useGlobalScrollBlock';
import { Portal } from '@shared/ui/Portal';

import type { ModalProps } from './interfaces';

export const Modal = ({ children, isOpened, onClose }: ModalProps) => {
	useGlobalScrollBlock(isOpened);

	const handleOutsideClick: MouseEventHandler<HTMLDivElement> = (e) => {
		if ((e.target as Element).classList.contains(styles.wrapper)) {
			onClose();
		}
	};

	return isOpened ? (
		<Portal>
			<div data-test-id="modal" onClick={handleOutsideClick} className={styles.wrapper}>
				<div className={styles.content}>{children}</div>
			</div>
		</Portal>
	) : null;
};
