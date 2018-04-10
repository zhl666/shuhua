import { set_filter, defaultFilter } from '../actions/showFilter';

const showFilter = (state={fastSeek: '',filterType: '', country: '', other: '' }, action) => {
	const { type, typeValue, text } = action;
	const filterObj = {};
	typeValue !== undefined ? 
		typeValue === 'country1' || typeValue === 'country2' ?
			filterObj['country'] = text :
			 filterObj[typeValue] = text :
			  null;
	switch(type) {
		case set_filter:
			// return state === '' ? text : state + ',' + text;
			return Object.assign({}, state, filterObj)
		default:
			return state;
	}
}
export default showFilter;