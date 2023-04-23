import type { SelectHTMLAttributes } from 'react';

import type { FieldProps } from 'formik';

export interface SelectProps extends FieldProps<any>, Omit<SelectHTMLAttributes<HTMLSelectElement>, 'form'> {}
