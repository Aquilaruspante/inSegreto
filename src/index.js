import { renderFeed, submitNewPost } from './post/postmanager.js';
import './styles.css';

window.onload = () => {
    const main = document.querySelector('main');
    const newPostForm = document.querySelector('#new-post-btn');
    const newPostDialog = document.querySelector('#new-post-dialog');

    const sayItForm = document.querySelector('#say-it-form');
    const cancelButton = document.querySelector('#cancel-btn');

    function init() {
        renderFeed(main);
    }

    newPostForm.addEventListener('submit', (event) => {
        event.preventDefault();
        newPostDialog.showModal();
    });

    sayItForm.addEventListener('submit', (event) => {
        event.preventDefault();
        submitNewPost();
        newPostDialog.close();
        main.innerHTML = '';
        renderFeed(main); 
    }); 

    cancelButton.addEventListener('click', () => {
        newPostDialog.close();
    })

    init();
};
