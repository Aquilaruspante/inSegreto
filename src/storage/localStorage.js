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
            findAllMatches: true,
            ignoreDiacritics: true,
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

    getPostsBytens(page, postList = null) {
        const posts = postList || this.getPosts();
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
            const lower = word.trim().toLowerCase();
            return cachedPosts.filter((post) => {
                return post.body.toLowerCase().includes(lower);
            })
        } else {
            return [...cachedPosts];
        };
    }
};

export default storageLocal;