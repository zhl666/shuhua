export const set_pagination = 'SET_PAGINATION'
export const default_pagination = 1

export const initPagination = (total=1, cur=0) => ({type: set_pagination, total, cur});

export function increment() {
	return {
		type: 'INCREMENT_COUNTER'
	}
}