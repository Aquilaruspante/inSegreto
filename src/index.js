import { renderFeed, submitNewPost, resetNewPostForm } from './post/postmanager.js';
import './styles.css';

window.onload = () => {
    const body = document.querySelector('body');
    let page = 1;

    const main = document.querySelector('main');
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
            main.innerHTML = '';
            renderFeed(main, page);
            isLoading = false;
        }
    });
    

    function init() {
        renderFeed(main, page);
    };

    newPostForm.addEventListener('submit', (event) => {
        event.preventDefault();
        newPostDialog.showModal();
    });

    sayItForm.addEventListener('submit', (event) => {
        event.preventDefault();
        submitNewPost();
        newPostDialog.close();
        main.innerHTML = '';
        renderFeed(main, page); 
    }); 

    cancelButton.addEventListener('click', () => {
        resetNewPostForm();
        newPostDialog.close();
    })

    init();
};
