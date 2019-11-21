import { TokenStorage } from './TokenStorage';
import { UserStorage } from './UserStorage';

class LocalStorage {
    constructor() {
        this.token = new TokenStorage();
        this.user = new UserStorage();
    }

}


const getinstance = () => {
    let instance;
    if (!instance) {
        instance = new LocalStorage();
    }
    return instance;
}


export default getinstance();