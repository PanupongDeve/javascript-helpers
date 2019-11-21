import QueryString from './QueryString';
import { BOAT_SEARCH_PARAMS } from '../Enum';

class CharterType {
    constructor() {
        this.queryString = new QueryString();
    }

    getCharterType() {
        return this.queryString.get(BOAT_SEARCH_PARAMS.CHARTER_TYPE);
    }

    addCharterType(url, value) {
        return this.queryString.addStringQuery(url, BOAT_SEARCH_PARAMS.CHARTER_TYPE, value)
    }

    setCharterType(url, value) {
        return this.queryString.setStringQuery(url, BOAT_SEARCH_PARAMS.CHARTER_TYPE, value);
    }

    removeCharterType(url) {
        return this.queryString.removeStringQuery(url,BOAT_SEARCH_PARAMS.CHARTER_TYPE);
    }

}

export default CharterType;