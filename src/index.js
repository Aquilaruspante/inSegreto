import { postLogger } from './postmanager.js';

window.onload = () => {
    const main = document.querySelector('main');

    postLogger(main);    
}
