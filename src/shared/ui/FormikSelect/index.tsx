import Image from 'next/image';

import { Field } from 'formik';
import type { FieldProps } from 'formik';
import cn from 'classnames';

import styles from './index.module.scss';

import ArrowDownIcon from '@app/assets/icons/arrow-down.png';

import type { FormikSelectProps } from './interfaces';

export const FormikSelect = ({ className, children, ...props }: FormikSelectProps) => {
	return (
		<Field as='select' {...props}>
			{({ field, meta }: FieldProps<any>) => {
				const { error, touched } = meta;
				return (
					<div className={styles.wrapper}>
						<select
							className={cn(className, styles.select, {
								[styles.error]: error !== undefined && touched,
							})}
							{...props}
							{...field}
						>
							{children}
						</select>
						<Image className={styles.arrow} src={ArrowDownIcon} alt="arrow-down" />

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
