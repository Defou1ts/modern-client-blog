import styles from './index.module.scss';
import { AboutOverviewContent } from './ui/AboutOverviewContent';
import { AboutOverviewHeader } from './ui/AboutOverviewHeader';
import { AboutOverviewOurTasks } from './ui/AboutOverviewOurTasks';

export const AboutOverview = () => (
	<div className={styles.wrapper}>
		<AboutOverviewHeader />
		<AboutOverviewContent />
		<AboutOverviewOurTasks />
	</div>
);
