import type { FormikHelpers } from 'formik';

import type { ContactFormState } from './interfaces';

export type HandleSubmit = (values: ContactFormState, { resetForm }: FormikHelpers<ContactFormState>) => void;
