

export class LocalStorageHelper {

    getItem(key) {
        const item = JSON.parse(localStorage.getItem(key));
        return item;
    }

    setItem(key, item) {
        const tokenJson = JSON.stringify(item);
        localStorage.setItem(key, tokenJson); 
    }

    removeItem(key) {
        localStorage.removeItem(key);
    }
}

