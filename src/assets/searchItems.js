import FruitData from './items';

export const simulateSearch = (params) => {
	const { type, color, searchString } = params;

	let filterType = true;
	let filterColor = true;

	if (type === 'both') {
		filterType = false;
	}

	if (color === 'any') {
		filterColor = false;
	}

	const findMatch = (item) => {
		let isMatch = true;

		// match type
		if (filterType) {
			if (item.type.toLowerCase() !== type) { isMatch = false; }
		}

		// match filter
		if (filterColor) {
			if (item.color !== color) { isMatch = false; }
		}

		// match search string
		if (!item.name.toLowerCase().includes(searchString.toLowerCase())) {
			isMatch = false;
		}

		// return
		return isMatch;
	};

	const matches = FruitData.filter(findMatch);

	// const matches = FruitData.filter(item => item.type === 'Fruit');
	console.log('matches', matches);
	return matches;
};
