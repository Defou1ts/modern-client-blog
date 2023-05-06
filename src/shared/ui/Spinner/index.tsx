import styles from './index.module.scss';

import SpinnerIcon from '@app/assets/icons/spinner.svg';

export const Spinner = () => {
	return (
		<div className={styles.wrapper}>
			<SpinnerIcon />
		</div>
	);
};
