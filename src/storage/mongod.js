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

    async getPostsBytens(page, postList = null) {
        console.log('page in mongo', page);
        const newPosts = await this.getPosts(page);
        console.log('new posts', newPosts);
        this.cachedPosts = [...this.cachedPosts, ...newPosts];
        console.log('cached posts', this.cachedPosts);

        return this.cachedPosts;
    },

    async savePost(gender, age, body) {
        await axios.post('http://127.0.0.1:3000/posts', { gender, age, body }); 
    }
};

export default mongoStorage;