import { renderFeed } from "../post/postmanager.js";

export default function setUpScrollPagination(postContainer, page, body) {
    let isLoading = false;

    window.addEventListener('scroll', async () => {
        if (isLoading) return;
    
        const scrollY = window.scrollY;
        const innerHeight = window.innerHeight;
        const scrollHeight = body.scrollHeight;

        if (scrollY + innerHeight >= scrollHeight) {
            isLoading = true;
            page += 1;
            postContainer.innerHTML = '';
            renderFeed(postContainer, page);
            setTimeout(() => {
                isLoading = false;
            }, 300);
        };
    });
}