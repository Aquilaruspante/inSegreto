import postComponent from "./postComponent.js";
import storage from "./storage.js";

function postLogger (container) {
    const posts = storage.getPosts();
    for (let post of posts) {
        const newPostCompnent = new postComponent(post.gender, post.age, post.body);
        container.appendChild(newPostCompnent.getPostComponent());
    };
};

export { postLogger };