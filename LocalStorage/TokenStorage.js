import { LocalStorageHelper } from './locastorageHelper';

export class TokenStorage {
    constructor() {
        this._localStorage = new LocalStorageHelper();
        this.key = 'token';
    }

    get() {
        return this._localStorage.getItem(this.key);
    }

    set(data) {
        this._localStorage.setItem(this.key, data);
    }

    remove() {
        this._localStorage.removeItem(this.key);
    }
}