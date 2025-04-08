import storage from './storage.js';

window.onload = () => {
    const main = document.querySelector('main');

    const posts = storage.getPosts();
    console.log(posts);
}
