import axios from 'axios';
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 10000;


export function searchMusic(musicName) {
	let data={
		keywords:musicName
	}
    return new Promise((resovle, reject) => {
        axios({
            method: "get",
            url: "/search",
            params:data,
        }).then(function(response) {
            resovle(response.data);
        }).catch(function(error) {
            reject(error)
        })
    });
}


