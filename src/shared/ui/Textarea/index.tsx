import { forwardRef } from 'react';
import type { LegacyRef } from 'react';

import cn from 'classnames';

import styles from './index.module.scss';

import type { TextareaProps } from './interfaces';

export const Textarea = forwardRef(function Input(
	{ field, form, meta, className, ...props }: TextareaProps,
	ref: LegacyRef<HTMLTextAreaElement>
) {
	const { error, touched } = meta;

	return (
		<div className={styles.wrapper}>
			<textarea
				ref={ref}
				className={cn(className, styles.textarea, {
					[styles.error]: error !== undefined && touched,
				})}
				{...field}
				{...props}
			/>
			{error !== undefined && touched && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
});
