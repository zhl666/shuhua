import callAPI from '../utils';
import GetListUrl from '../constants/ApiConstants'
import * as Pagina  from './pagination'

// 展示列表
export const show_list = 'SHOW_LIST'

// 分页
export const REQUEST_POSTS = 'SET_PAGINATION'

// fetch前发送action
// function requestPosts(tags) {
// 	return {
// 		type: REQUEST_POSTS,
// 		tags
// 	}
// }
// fetch成功后发送action
function receivePosts(json) {
	return {
		type: show_list,
		lists: json.results
	}
}

function fetchPosts(curId, tags) {
	return dispatch => {
		console.log(GetListUrl(curId, tags))
		// dispatch(requestPosts(curId, tags))
		return callAPI(GetListUrl(curId, tags))
			.then(json => {
				dispatch(Pagina.initPagination(json.json.totalPage, json.json.pageNo))
				dispatch(receivePosts(json.json))
			})
	}
}

export function fetchPostsIfNeed(curId, tags) {
	return (dispatch, getState) => {
		return dispatch(fetchPosts(curId, tags))
	}
}