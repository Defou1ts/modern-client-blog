import type { ReactNode } from 'react';

import type { AboutOurTeamItem } from '@widgets/AboutOurTeam/interfaces';

export interface AboutOurTeamItemProps extends AboutOurTeamItem {
	reverse?: boolean;
	figure?: ReactNode;
}
