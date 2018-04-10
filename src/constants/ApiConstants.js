const API_HOSTNAME = 'http://localhost:99';
const API_LIST_PATH = '/roll';

const constructListUrl = param => `${API_HOSTNAME}${API_LIST_PATH}${API_LIST_PATH.indexOf('?') === -1 ? '?' : '&'}${param}`;

const GetListUrl = (id, tags) => constructListUrl('pageSize=28&pageNo='+ id +'&Tag=' + encodeURIComponent(tags));

export default GetListUrl
// console.log(LIST_URL(1, 'a&b'))