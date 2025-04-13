import { searchByWord, renderFeed } from "../post/postmanager.js";

export function handleSearchInput(searchBar, postContainer, page) {
    searchBar.addEventListener('input', (event) => {
        const posts = searchByWord(event.target.value);
        renderFeed(postContainer, page, posts);
    });
};