import { Field } from 'formik';
import type { FieldProps } from 'formik';
import cn from 'classnames';

import styles from './index.module.scss';

import type { FormikInputProps } from './interfaces';

export const FormikInput = ({ className, ...props }: FormikInputProps) => {
	return (
		<Field {...props}>
			{({ field, meta }: FieldProps<any>) => {
				const { error, touched } = meta;
				return (
					<div className={styles.wrapper}>
						<input
							className={cn(className, styles.input, {
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
