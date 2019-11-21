import QueryString from './QueryString';
import { BOAT_SEARCH_PARAMS } from '../Enum';

class BoatId {
    constructor() {
        this.queryString = new QueryString();
    }

    getBoatId() {
        return Number(this.queryString.get(BOAT_SEARCH_PARAMS.BOAT_ID));
    }

    removeBoatId(url) {
        return this.queryString.removeStringQuery(url,BOAT_SEARCH_PARAMS.BOAT_ID);
    }

    addBoatId(url, value) {
        return this.queryString.addStringQuery(url, BOAT_SEARCH_PARAMS.BOAT_ID, value);
    }

    setBoatId(url, value) {
        return this.queryString.setStringQuery(url, BOAT_SEARCH_PARAMS.BOAT_ID, value);
    }
}

export default BoatId;