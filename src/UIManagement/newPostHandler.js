import { submitNewPost, renderFeed } from "../post/postmanager.js";

export function handleSubmitNewPost(sayItForm, postContainer, page, newPostDialog) {
    sayItForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        await submitNewPost();
        newPostDialog.close();
        window.location.hash = '';
        renderFeed(postContainer, page); 
    }); 
};