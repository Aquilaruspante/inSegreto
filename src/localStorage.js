import Post from './post.js';

const storageLocal = {
    getPosts() {
        const posts = localStorage.getItem('inSegreto-posts');
        return posts ? JSON.parse(posts) : [];
    },

    savePost(gender, age, body) {
        const postArray = this.getPosts();
        const id = postArray.length;
        const newPost = new Post(gender, age, body, id);
        postArray.push(newPost);
    
        localStorage.setItem('inSegreto-posts', JSON.stringify(postArray));
    },

    deletePost(id) {
        const posts = this.getPosts();
        posts.splice(id, 1);
        localStorage.setItem('inSegreto-posts', JSON.stringify(posts));
    }
}

export default storageLocal;