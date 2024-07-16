import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll(){
    return fetch(`${URL_CATEGORIES}`)
    .then(reponse => reponse.json())     
}

function getAllVideos(){
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(reponse => reponse.json())     
}

export default {
    getAll,
    getAllVideos
}