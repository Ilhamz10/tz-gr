import Card from '../../components/Card/Card';
import styles from './AllCats.module.css';
import { useDispatch } from 'react-redux';
import { catsActions } from '../../store/cats-slicer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../../components/Loading/Loading';

const getAllCats = async ({ pageParam = 0 }) => {
	const response = await fetch(
		`https://api.thecatapi.com/v1/images/search?limit=15&offset=${pageParam}&api_key=live_2W0msgNj6PWjSIgJisRGarUdjq8HAnJ0isFZOu95N53L5bWaLAALw37BomuAhFU8`
	);
	const result = await response.json();
	return { cats: [...result], prevOffset: pageParam };
};

const AllCats = () => {
	const dispatch = useDispatch();

	const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
		queryKey: ['cats'],
		queryFn: getAllCats,
		getNextPageParam: (lastPage) => {
			console.log(lastPage.prevOffset);
			if (lastPage.prevOffset > 60) {
				return false;
			}

			return lastPage.prevOffset + 10;
		},
	});

	const cats = data?.pages.reduce((acc, page) => {
		return [...acc, ...page.cats];
	}, []);

	useEffect(() => {
		if (cats) {
			dispatch(catsActions.setAllCats(cats));
		}
	}, [cats, dispatch]);

	return (
		<main>
			<div className='container'>
				<InfiniteScroll
					dataLength={cats ? cats.length : 0}
					next={() => fetchNextPage()}
					loader={<Loading />}
					hasMore={hasNextPage}>
					<div className={styles.mainContent}>
						{cats &&
							cats.map((cat) => (
								<Card key={cat.id} img={cat.url} id={cat.id} />
							))}
					</div>
				</InfiniteScroll>
			</div>
		</main>
	);
};

export default AllCats;
