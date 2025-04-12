import { renderFeed, submitNewPost, resetNewPostForm } from './post/postmanager.js';
import './styles.css';

window.onload = () => {
    const body = document.querySelector('body');
    let page = 1;

    const postContainer = document.querySelector('#post-container');
    const newPostForm = document.querySelector('#new-post-btn');
    const newPostDialog = document.querySelector('#new-post-dialog');

    const sayItForm = document.querySelector('#say-it-form');
    const cancelButton = document.querySelector('#cancel-btn');

    let isLoading = false;
    
    window.addEventListener('scroll', () => {
        if (isLoading) return;
    
        const scrollY = window.scrollY;
        const innerHeight = window.innerHeight;
        const scrollHeight = body.scrollHeight;

        if (scrollY + innerHeight >= scrollHeight) {
            isLoading = true;
            page += 1;
            postContainer.innerHTML = '';
            renderFeed(postContainer, page);
            isLoading = false;
        };
    });
    

    function init() {
        renderFeed(postContainer, page);
    };

    newPostForm.addEventListener('submit', (event) => {
        event.preventDefault();
        newPostDialog.showModal();
    });

    sayItForm.addEventListener('submit', (event) => {
        event.preventDefault();
        submitNewPost();
        newPostDialog.close();
        postContainer.innerHTML = '';
        renderFeed(postContainer, page); 
    }); 

    cancelButton.addEventListener('click', () => {
        resetNewPostForm();
        newPostDialog.close();
    })

    init();
};
