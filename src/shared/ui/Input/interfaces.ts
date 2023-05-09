import type { InputHTMLAttributes } from 'react';

import type { FieldProps } from 'formik';

export interface InputProps extends FieldProps<any>, Omit<InputHTMLAttributes<HTMLInputElement>, 'form'> {}
