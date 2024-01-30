import { Icon } from '@iconify/react';
import styles from './Loading.module.css';

const Loading = () => {
	return (
		<div className={styles.iconCont}>
			<Icon icon='eos-icons:bubble-loading' width={50} />
		</div>
	);
};

export default Loading;
