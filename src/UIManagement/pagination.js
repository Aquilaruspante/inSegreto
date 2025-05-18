import { renderFeed } from "../post/postmanager.js";

export default function setUpScrollPagination(postContainer, page, body) {
    let isLoading = false;

    window.addEventListener('scroll', async () => {
        if (isLoading) return;
    
        const scrollY = window.scrollY;
        const innerHeight = window.innerHeight;
        const scrollHeight = body.scrollHeight;

        if (scrollY + innerHeight >= scrollHeight) {
            console.log('hit');
            isLoading = true;
            console.log('loading true');
            page += 1;
            console.log('page', page);
            postContainer.innerHTML = '';
            renderFeed(postContainer, page);
            isLoading = false;
            console.log('loading false');
        };
    });
}