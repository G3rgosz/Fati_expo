var host = 'http://localhost:3000/';

export function getBooks() {
    let endpoint = 'books';
    let url = host+endpoint;
    return fetch(url).then(res => res.json())
    .catch(error =>{
        console.log(error);
    });
}