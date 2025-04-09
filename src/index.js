import { postLogger } from './postManager.js';

window.onload = () => {
    const main = document.querySelector('main');

    postLogger(main);    
}
