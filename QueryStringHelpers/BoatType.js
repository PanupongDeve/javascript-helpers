import QueryString from './QueryString';
import { BOAT_SEARCH_PARAMS } from '../Enum';

class BoatType {
    constructor() {
        this.queryString = new QueryString();
    }

    getBoatType() {
        return this.queryString.get(BOAT_SEARCH_PARAMS.BOAT_TYPE);
    }

    addBoatType(url, value) {
        return this.queryString.addStringQuery(url, BOAT_SEARCH_PARAMS.BOAT_TYPE, value);
    }

    setBoatType(url, value) {
        return this.queryString.setStringQuery(url, BOAT_SEARCH_PARAMS.BOAT_TYPE, value);
    }

    removeBoatType(url) {
        return this.queryString.removeStringQuery(url,BOAT_SEARCH_PARAMS.BOAT_TYPE);
    }

}

export default BoatType;