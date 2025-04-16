import text from "./text.js";
import storage from "../storage/storage.js";

function createRandomPost() {
    const start = Math.floor(Math.random() * (text.length - 200));
    const postLength = Math.floor(Math.random() * 150) + 50;
    const end = start + postLength;
    
    return text.slice(start, end);
}

function autoseed() {
    console.log(createRandomPost());
}

export { autoseed };