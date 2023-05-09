import { useEffect, useState } from 'react';
import type { MouseEventHandler } from 'react';

import { createPortal } from 'react-dom';

import styles from './index.module.scss';

import { useGlobalScrollBlock } from '@shared/lib/hooks/useGlobalScrollBlock';

import type { ModalProps } from './interfaces';

export const Modal = ({ children, isOpened, onClose }: ModalProps) => {
	const [domLoaded, setDomLoaded] = useState(false);

	useGlobalScrollBlock(isOpened);

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	const handleOutsideClick: MouseEventHandler<HTMLDivElement> = (e) => {
		if ((e.target as Element).classList.contains(styles.wrapper)) {
			onClose();
		}
	};

	return domLoaded && isOpened
		? createPortal(
				<div data-test-id="modal" onClick={handleOutsideClick} className={styles.wrapper}>
					<div className={styles.content}>{children}</div>
				</div>,
				document.body
		  )
		: null;
};
