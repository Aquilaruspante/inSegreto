import axios from 'axios';

const mongoStorage = {
    async getPosts() {
        try {
            const response = await axios.get('http://127.0.0.1:3000/');
            return response.data;
        } catch (err) {
            console.error('Errore fetch:', err);
            return []; // evita che il resto del codice esploda
        };
    },

    async getPostsBytens() {
        return await this.getPosts();
    }
}

export default mongoStorage;