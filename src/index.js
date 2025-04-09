import { renderFeed, submitNewPost } from './postmanager.js';
import storage from './storage.js';

window.onload = () => {
    const main = document.querySelector('main');
    const newPostForm = document.querySelector('#new-post-btn');
    const newPostDialog = document.querySelector('#new-post-dialog');

    const sayItForm = document.querySelector('#say-it-form');

    newPostForm.addEventListener('submit', () => {
        newPostDialog.showModal();
    })

    sayItForm.addEventListener('submit', () => {
        submitNewPost();
        renderFeed(main); 
    })
    //   
}
