import Post from './post';

const posts = [];

const fakeStorage = {
    getPosts() {
        return [...posts];
    },

    addPost(gender, age, body) {
        const id = posts.length;
        const newPost = new Post(gender, age, body, id);
        posts.push(newPost);
    }
}

export default fakeStorage;