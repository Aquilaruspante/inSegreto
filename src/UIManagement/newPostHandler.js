import { submitNewPost, renderFeed } from "../post/postmanager.js";

export function handleSubmitNewPost(sayItForm, postContainer, page, newPostDialog) {
    sayItForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        await submitNewPost();
        console.log('post submitted');
        newPostDialog.close();
        window.location.hash = '';
        console.log('about to render')
        renderFeed(postContainer, page); 
    }); 
};