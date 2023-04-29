import { forwardRef } from 'react';
import type { ForwardedRef } from 'react';

import Image from 'next/image';

import cn from 'classnames';

import styles from './index.module.scss';

import ArrowDownIcon from '@app/assets/icons/arrow-down.png';

import type { SelectProps } from './interfaces';

export const Select = forwardRef(function Input(
	{ field, form, meta, className, children, ...props }: SelectProps,
	ref: ForwardedRef<HTMLSelectElement>
) {
	const { error, touched } = meta;

	return (
		<div className={styles.wrapper}>
			<select
				ref={ref}
				className={cn(className, styles.select, {
					[styles.error]: error !== undefined && touched,
				})}
				{...field}
				{...props}
			>
				{children}
			</select>
			<Image className={styles.arrow} src={ArrowDownIcon} alt="arrow-down" />
			{error !== undefined && touched && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
});
