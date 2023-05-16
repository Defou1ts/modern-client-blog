import { Field } from 'formik';
import type { FieldProps } from 'formik';
import cn from 'classnames';

import styles from './index.module.scss';

import type { FormikTextareaProps } from './interfaces';

export const FormikTextarea = ({ className, ...props }: FormikTextareaProps) => {
	return (
		<Field {...props}>
			{({ field, meta }: FieldProps<any>) => {
				const { error, touched } = meta;
				return (
					<div className={styles.wrapper}>
						<textarea
							className={cn(className, styles.textarea, {
								[styles.error]: error !== undefined && touched,
							})}
							{...props}
							{...field}
						/>
						{error !== undefined && touched && (
							<span data-test-id="input-error" className={styles.errorMessage}>
								{error}
							</span>
						)}
					</div>
				);
			}}
		</Field>
	);
};
