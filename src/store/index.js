import { configureStore } from '@reduxjs/toolkit';
import catsSlicer from './cats-slicer';

const store = configureStore({
	reducer: {
		catsState: catsSlicer.reducer,
	},
});

export default store;
