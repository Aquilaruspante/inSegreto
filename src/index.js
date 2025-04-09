import { renderFeed, submitNewPost } from './postmanager.js';

window.onload = () => {
    const main = document.querySelector('main');
    const newPostForm = document.querySelector('#new-post-btn');
    const newPostDialog = document.querySelector('#new-post-dialog');

    const sayItForm = document.querySelector('#say-it-form');

    function init() {
        renderFeed(main);
    }

    newPostForm.addEventListener('submit', () => {
        newPostDialog.showModal();
    });

    sayItForm.addEventListener('submit', (event) => {
        event.preventDefault();
        submitNewPost();
        newPostDialog.close();
        main.innerHTML = '';
        renderFeed(main); 
    }); 

    init();
};
