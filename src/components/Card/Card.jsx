/* eslint-disable react/prop-types */
import favoriteIcon from '../../assets/favorite_border.svg';
import favoriteIconFill from '../../assets/favorite.svg';

import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { catsActions } from '../../store/cats-slicer';

const Card = ({ img, id }) => {
	const dispatch = useDispatch();
	const favCats = useSelector((state) => state.catsState.favCats);
	function setToFavorite() {
		dispatch(catsActions.setToFavorite(id));
	}

	const favorite = favCats?.some((cat) => cat?.id === id);

	return (
		<div className={styles.Card}>
			<img className={styles.cardImg} src={img} alt='' />
			<button
				className={`${styles.favBtn} ${favorite ? styles.favorite : ''}`}
				onClick={setToFavorite}>
				<img src={favoriteIcon} alt='' />
				<img src={favoriteIconFill} alt='' />
			</button>
		</div>
	);
};

export default Card;
