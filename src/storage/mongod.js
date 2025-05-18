import axios from 'axios';
import { format } from 'date-fns';

const mongoStorage = {
    cachedPosts: [],

    async getPosts(page = null) {
        const URL = page ? `http://127.0.0.1:3000/?page=${page}` : 'http://127.0.0.1:3000/';

        try {
            const response = await axios.get(URL);
            const posts = response.data;

            return posts.map(post => ({
                ...post,
                date: format(post.createdAt, 'dd/MM/yyyy')
            }))
        } catch (err) {
            console.error('Errore fetch:', err);
            return []; // evita che il resto del codice esploda
        };
    },

    async getPostsBytens(page, onlyCached) {
        const newPosts = await this.getPosts(page);
        if (!onlyCached) this.cachedPosts = [...this.cachedPosts, ...newPosts];

        return this.cachedPosts;
    },

    async savePost(gender, age, body) {
        const response = await axios.post('http://127.0.0.1:3000/posts', { gender, age, body }); 
        const newPost = {gender, age, body};
        newPost.date = format(response.data.createdAt, 'dd/MM/yyyy');

        this.cachedPosts.unshift(newPost);

        return newPost;
    },

    async searchByWord(word) {
        const response = await axios.get(`http://127.0.0.1:3000/?q=${word}`);
        const posts = response.data;

        return posts.map(post => ({
                ...post,
                date: format(post.createdAt, 'dd/MM/yyyy')
            }));
    },

    updateCache(post) {
        // to be called after every savePost() or feed won't be refreshed properly.
        this.cachedPosts.unshift(post);
    }
};

export default mongoStorage;