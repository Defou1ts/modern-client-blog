import styles from './index.module.scss';
import { WorkTime } from './ui/Worktime';
import { Info } from './ui/Info';

import { ContactForm } from '@features/ContactForm';
import { GoogleMap } from '@features/GoogleMap';

export const Contact = () => {
	return (
		<div className={styles.wrapper}>
			<Info />
			<WorkTime />
			<ContactForm />
			<GoogleMap />
		</div>
	);
};
