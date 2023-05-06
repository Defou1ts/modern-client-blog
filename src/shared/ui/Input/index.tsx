import { forwardRef } from 'react';
import type { ForwardedRef } from 'react';

import cn from 'classnames';

import styles from './index.module.scss';

import type { InputProps } from './interfaces';

export const Input = forwardRef(function Input(
	{ field, form, meta, className, ...props }: InputProps,
	ref: ForwardedRef<HTMLInputElement>
) {
	const { error, touched } = meta;

	return (
		<div className={styles.wrapper}>
			<input
				ref={ref}
				className={cn(className, styles.input, {
					[styles.error]: error !== undefined && touched,
				})}
				{...field}
				{...props}
			/>
			{error !== undefined && touched && (
				<span data-test-id="input-error" className={styles.errorMessage}>
					{error}
				</span>
			)}
		</div>
	);
});
