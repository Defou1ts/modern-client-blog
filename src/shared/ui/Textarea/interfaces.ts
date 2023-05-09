import type { TextareaHTMLAttributes } from 'react';

import type { FieldProps } from 'formik';

export interface TextareaProps extends FieldProps<any>, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'form'> {}
