import { postLogger } from './postmanager.js';

window.onload = () => {
    const main = document.querySelector('main');
    const newPostForm = document.querySelector('#new-post-btn');

    postLogger(main);    
}
