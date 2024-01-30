import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header>
			<div className='container'>
				<div className={styles.headerContent}>
					<NavLink
						to={'/'}
						className={({ isActive }) =>
							isActive ? `${styles.link} ${styles.active}` : styles.link
						}>
						Все котики
					</NavLink>
					<NavLink
						to={'/favorite'}
						className={({ isActive }) =>
							isActive ? `${styles.link} ${styles.active}` : styles.link
						}>
						Любимые котики
					</NavLink>
				</div>
			</div>
		</header>
	);
};

export default Header;
