import { renderFeed, submitNewPost, searchByWord } from './post/postmanager.js';
import setUpScrollPagination from './UIManagement/pagination.js';
import { handleHashChange, handleNewPostFormSubmit, handleCancelButtnClick } from './UIManagement/navigation.js';
import { handleSubmitNewPost } from './UIManagement/newPostHandler.js';
import { handleSearchInput } from './UIManagement/searchHandler.js';
import './styles.css';

window.onload = () => {
    const body = document.querySelector('body');
    let page = 1;

    const postContainer = document.querySelector('#post-container');
    const newPostForm = document.querySelector('#new-post-btn');
    const newPostDialog = document.querySelector('#new-post-dialog');

    const sayItForm = document.querySelector('#say-it-form');
    const cancelButton = document.querySelector('#cancel-btn');

    const searchbar = document.querySelector('#search');
    searchbar.value = '';

    window.location.hash = '';
    
    setUpScrollPagination(postContainer, page, body);
    handleHashChange(newPostDialog);
    handleNewPostFormSubmit(newPostForm);
    handleCancelButtnClick(cancelButton, newPostDialog);
    handleSubmitNewPost(sayItForm, postContainer, page, newPostDialog);
    handleSearchInput(searchbar, postContainer, page);

    function init() {
        renderFeed(postContainer, page);
    };

    init();
};
