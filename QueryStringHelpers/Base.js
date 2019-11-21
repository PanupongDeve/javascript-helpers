import QueryString from './QueryString';
import { BOAT_SEARCH_PARAMS } from '../Enum';

class BoatId {
    constructor() {
        this.queryString = new QueryString();
    }

    getBase() {
        return this.queryString.get(BOAT_SEARCH_PARAMS.BASE);
    }

    addBase(url, value) {
        return this.queryString.addStringQuery(url, BOAT_SEARCH_PARAMS.BASE, value)
    }

    setBase(url, value) {
        return this.queryString.setStringQuery(url, BOAT_SEARCH_PARAMS.BASE, value);
    }

    removeBase(url) {
        return this.queryString.removeStringQuery(url,BOAT_SEARCH_PARAMS.BASE);
    }

}

export default BoatId;