// const callAPI = (url, options) =>
// 	fetch(url, options)
// 		.then(
// 			response => (response.ok 
// 				? response.json()
// 				: Promise.reject(response.text())
// 			),
// 			error => Promise.reject(error))
// 		.then(
// 			json => ({ json: json }),
// 			error => ({ error }))
// 		.catch(error => ({ error }));
const callAPI = (url, options) =>
  fetch(url, options)
    .then(
      response => (response.ok
        ? response.json()
        : Promise.reject(response.text())
      ),
      error => Promise.reject(error))
    .then(
      json => ({ json: json }),
      error => ({ error }))
    .catch(error => ({ error }));
		
export default callAPI;