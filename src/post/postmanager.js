import postComponent from "./postComponent.js";
import storage from "../storage/storage.js";
import { validatePost } from "./postMiddleware.js";

const genderField = document.querySelector('#gender');
const ageField = document.querySelector('#age');
const bodyField = document.querySelector('#body');

function renderFeed (container, page, posts = null) {
    container.innerHTML = '';

    const postList = posts ? storage.getPostsBytens(page, posts) : storage.getPostsBytens(page);                      console.log(postList.length);    // debug

    if (!postList.length) {
        container.innerHTML = '<h3>No posts yet. Write the first one</h3>';
    } else {
        for (let i = postList.length - 1; i >= 0; i--) {
            const post = postList[i];
            const newPostCompnent = new postComponent(post.gender, post.age, post.body, post.date);
            container.appendChild(newPostCompnent.getPostComponent());
        };
    };
};

function resetNewPostForm() {
    genderField.value = '';
    ageField.value = null;
    bodyField.value = '';
}

function submitNewPost() {
    const gender = genderField.value;
    const age = ageField.value;
    const body = bodyField.value;

    resetNewPostForm();
    
    validatePost(gender, age, body);                                                 // middleware
    storage.savePost(gender, age, body);
};

function searchByWord(word) {
    return storage.searchByWord(word);
};

export { renderFeed, submitNewPost, resetNewPostForm, searchByWord };