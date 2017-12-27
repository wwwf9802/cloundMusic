import axios from 'axios';
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 10000;


function searchMusic(musicName) {
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

function highPlayList(limit,tag) {
	let data={}
	data.limit=limit;
	if(tag){
		data.tag=tag;
	}
    return new Promise((resovle, reject) => {
        axios({
            method: "get",
            url: "/top/playlist/highquality",
            params:data,
        }).then(function(response) {
            resovle(response.data);
        }).catch(function(error) {
            reject(error)
        })
    });
}

function getPlayList(id) {
	let data={
		id:id
	}
    return new Promise((resovle, reject) => {
        axios({
            method: "get",
            url: "/playlist/detail",
            params:data,
        }).then(function(response) {
            resovle(response.data);
        }).catch(function(error) {
            reject(error)
        })
    });
}

async function getMusicSrc(id){
	let idsData=await getPlayList(id);
	console.log(idsData);
	let idStr='';
	idsData.privileges.forEach((item,index)=>{
		idStr+=''+item.id+',';
	})
	idStr = idStr.substr(0, idStr.length - 1);  
	console.log(idStr);
	let data={
		id:idStr
	}
	return new Promise((resovle, reject) => {
        axios({
            method: "get",
            url: "/music/url",
            params:data,
        }).then(function(response) {
            resovle(response.data);
        }).catch(function(error) {
            reject(error)
        })
    });
}

export default {
	searchMusic,
	highPlayList,
	getPlayList,
	getMusicSrc,
}
 

