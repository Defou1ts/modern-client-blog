import styles from './index.module.scss';
import { aboutOurTeamItems } from './lib/constants/aboutOurTeamItems';
import { AboutOurTeamItem } from './ui/AboutOurTeamItem';

export const AboutOurTeam = () => {
	return (
		<section className={styles.wrapper}>
			<AboutOurTeamItem {...aboutOurTeamItems[0]} figure={<div className={styles.rectangle}></div>} />
			<AboutOurTeamItem {...aboutOurTeamItems[1]} reverse figure={<div className={styles.circle}></div>} />
		</section>
	);
};
