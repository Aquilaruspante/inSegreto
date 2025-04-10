import postComponent from "./postComponent.js";
import storage from "../storage/storage.js";
import { validatePost } from "./postMiddleware.js";

function renderFeed (container) {
    const posts = storage.getPosts();
    for (let post of posts) {
        const newPostCompnent = new postComponent(post.gender, post.age, post.body);
        container.appendChild(newPostCompnent.getPostComponent());
    };
};

function submitNewPost() {
    const genderField = document.querySelector('#gender');
    const gender = genderField.value;

    const ageField = document.querySelector('#age');
    const age = ageField.value;

    const bodyField = document.querySelector('#body');
    const body = bodyField.value;

    validatePost(gender, age, body);
    storage.savePost(gender, age, body);
};

export { renderFeed, submitNewPost };