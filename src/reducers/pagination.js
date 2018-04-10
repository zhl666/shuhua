import { set_pagination } from '../actions/pagination'

const showPagination = (state={total: 1, cur: 0}, action) => {
	const { type, total, cur } = action;
	switch(type) {
		case set_pagination:
			return Object.assign({}, state, {
				total,
				cur
			})
		default:
			return state;
	}
}
export default showPagination;