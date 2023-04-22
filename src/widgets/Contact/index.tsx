import styles from './index.module.scss';
import { WorkTime } from './ui/Worktime';
import { Info } from './ui/Info';

export const Contact = () => {
	return (
		<div className={styles.wrapper}>
			<Info />
			<WorkTime />
		</div>
	);
};
