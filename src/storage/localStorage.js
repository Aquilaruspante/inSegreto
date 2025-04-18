import Post from '../post/post.js';
import Fuse from 'fuse.js';

let cachedPosts = null;
let fuse = null;

const storageLocal = {
    postsPerPage: 20,
    
    updateFuse() {
        fuse = new Fuse(cachedPosts, {
            keys: ['body'],
            threshold: 0.2,  
        });
    },

    getPosts() {
        if (!cachedPosts) {
            const posts = localStorage.getItem('inSegreto-posts');
            cachedPosts = posts ? JSON.parse(posts) : [];
            this.updateFuse();
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
        cachedPosts = [...cachedPosts, newPost];
        postArray.push(newPost);
        this.updateFuse();
        localStorage.setItem('inSegreto-posts', JSON.stringify(postArray));
    },

    deletePost(id) {
        const posts = this.getPosts();
        posts.splice(id, 1);
        localStorage.setItem('inSegreto-posts', JSON.stringify(posts));
    },   

    searchByWord(word) {
        if (word.trim() !== '') {
            console.log('post sample:', cachedPosts[0]);
            console.log('fuse config:', fuse.options.keys);
            return fuse.search(word).map(result => result.item);
        } else {
            return [...cachedPosts];
        };
    }
};

export default storageLocal;