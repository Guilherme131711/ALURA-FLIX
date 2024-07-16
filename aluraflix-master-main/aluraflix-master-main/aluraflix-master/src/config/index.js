const URL_BACKEND = window.location.hostname.includes('localhost') 
? 'http://localhost:3333'
: 'https://alura-flix-joaocfn.herokuapp.com';

export default {
    URL_BACKEND,
};