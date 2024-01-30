import Card from '../../components/Card/Card';
import styles from './FavCats.module.css';
import { useSelector } from 'react-redux';

const FavCats = () => {
	const favCats = useSelector((state) => state.catsState.favCats);

	return (
		<main>
			<div className='container'>
				<div className={styles.mainContent}>
					{favCats.map((cat) => (
						<Card
							key={cat?.id}
							img={cat?.url}
							id={cat?.id}
						/>
					))}
				</div>
			</div>
		</main>
	);
};

export default FavCats;
