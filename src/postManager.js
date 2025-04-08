import storage from "./storage.js";

function createPostDOMElement(post, container) {
    const postSection = document.createElement('div');
    post.setAttribute('class', 'post');

    const header = document.createElement('div');
    header.setAttribute('class', 'post-header');

    const gender = document.createElement('div');
    gender.setAttribute('class', 'post-gender');
    gender.innerText = post.gender;

    const age = document.createElement('div');
    age.setAttribute('class', 'post-age');
    age.innerText = post.age;

    header.appendChild(gender);
    header.appendChild(age);

    const body = document.createElement('div');
    body.setAttribute('class', 'post-body');
    body.innerText = post.body;

    postSection.appendChild(header);
    postSection.appendChild(body);

    container.appendChild(postSection);
};

function postLogger (container) {
    const posts = storage.getPosts();
    for (let post of posts) {
        createPostDOMElement(post, container);
    }
};

export { postLogger };