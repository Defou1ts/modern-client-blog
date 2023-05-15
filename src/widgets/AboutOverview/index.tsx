import { AboutOverviewContent } from './ui/AboutOverviewContent';
import { AboutOverviewHeader } from './ui/AboutOverviewHeader';
import { AboutOverviewOurTasks } from './ui/AboutOverviewOurTasks';

export const AboutOverview = () => (
	<section>
		<AboutOverviewHeader />
		<AboutOverviewContent />
		<AboutOverviewOurTasks />
	</section>
);
