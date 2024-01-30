import { RouterProvider, createHashRouter } from 'react-router-dom';
import Root from './routes/Root';
import AllCats from './routes/AllCats/AllCats';
import { Provider } from 'react-redux';
import store from './store';
import FavCats from './routes/FavCats/FavCats';

const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{ path: '/', element: <AllCats /> },
			{ path: '/favorite', element: <FavCats /> },
		],
	},
]);

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
