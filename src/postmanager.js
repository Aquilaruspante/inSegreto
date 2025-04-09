import postComponent from "./postComponent.js";

function postLogger (container) {
    const posts = storage.getPosts();
    for (let post of posts) {
        const newPostCompnent = new postComponent(post.gender, post.age, post.body);
        container.appendChild(newPostCompnent.getPostComponent());
    };
};

export { postLogger };