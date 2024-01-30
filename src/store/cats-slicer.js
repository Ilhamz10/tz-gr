import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cats: [],
	favCats: [],
};

const catsSlicer = createSlice({
	initialState,
	name: 'cats',
	reducers: {
		setAllCats(state, action) {
			state.cats = [];
			state.cats.push(...action.payload);
		},
		setToFavorite(state, action) {
			const currentCat = state.cats.find((cat) => cat.id === action.payload);
			const favorite = state.favCats.find((cat) => cat?.id === action.payload);
			if (favorite) {
				state.favCats = state.favCats.filter(
					(cat) => cat.id !== action.payload
				);
			} else {
				state.favCats.push(currentCat);
			}
		},
	},
});

export const catsActions = catsSlicer.actions;
export default catsSlicer;
