import { show_list } from '../actions/index';

const showList = (state=[], action) => {
	const { type, lists } = action;
	switch(type) {
		case show_list:
			return [
				...lists
			]
		default:
			return state;
	}
}

export default showList