import { combineReducers } from 'redux';
import list from './list';
import filter from './showFilter';
import pagination from './pagination.js';

export default combineReducers({
	filter,
	list,
	pagination
});