import { searchByWord, renderFeed } from "../post/postmanager.js";

export function handleSearchInput(searchBar, postContainer, page) {
    searchBar.addEventListener('input', async (event) => {
        const posts = await searchByWord(event.target.value);
        renderFeed(postContainer, page, posts);
    });
};