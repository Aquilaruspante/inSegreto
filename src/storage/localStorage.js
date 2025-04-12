import Post from '../post/post.js';
import Fuse from 'fuse.js';

let cachedPosts = null;
const fuse = new Fuse(cachedPosts, {
    keys: [body]
});

const storageLocal = {
    postsPerPage: 20,
    

    getPosts() {
        if (!cachedPosts) {
            const posts = localStorage.getItem('inSegreto-posts');
            cachedPosts = posts ? JSON.parse(posts) : [];
        };
        
        return cachedPosts;
    },

    getPostsBytens(page) {
        const posts = this.getPosts();
        const start = posts.length;                                                           
        const end = start - (this.postsPerPage * page) >= 0 ? start - (this.postsPerPage * page) : 0;                         
        return posts.slice(end, start);
    },

    savePost(gender, age, body) {
        const postArray = this.getPosts();
        const id = postArray.length;
        const newPost = new Post(gender, age, body, id);
        cachedPosts.push(newPost);
        postArray.push(newPost);
    
        localStorage.setItem('inSegreto-posts', JSON.stringify(postArray));
    },

    deletePost(id) {
        const posts = this.getPosts();
        posts.splice(id, 1);
        localStorage.setItem('inSegreto-posts', JSON.stringify(posts));
    },   

    searchByWord(word) {
        fuse.search(word);
    }
};

export default storageLocal;