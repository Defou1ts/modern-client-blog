import { useEffect, useState } from 'react';
import type { MouseEventHandler } from 'react';

import { createPortal } from 'react-dom';

import styles from './index.module.scss';

import type { ModalProps } from './interfaces';

export const Modal = ({ children, isOpened, onClose }: ModalProps) => {
	const [domLoaded, setDomLoaded] = useState(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	const handleOutsideClick: MouseEventHandler<HTMLDivElement> = (e) => {
		if ((e.target as Element).classList.contains(styles.wrapper)) {
			onClose();
		}
	};

	useEffect(() => {
		const html = document.querySelector('html');
		if (html !== null) {
			if (isOpened) {
				html.style.overflowY = 'hidden';
			} else {
				html.style.overflowY = 'scroll';
			}
		}
	}, [isOpened]);

	return domLoaded && isOpened
		? createPortal(
				<div onClick={handleOutsideClick} className={styles.wrapper}>
					<div className={styles.content}>{children}</div>
				</div>,
				document.body
		  )
		: null;
};
