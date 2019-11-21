import QueryString from './QueryString';
import { BOAT_SEARCH_PARAMS } from '../Enum';

class FromDate {
    constructor() {
        this.queryString = new QueryString();
    }

    getFromDate() {
        return this.queryString.get(BOAT_SEARCH_PARAMS.FROM_DATE);
    }

    addFromDate(url, value) {
        return this.queryString.addStringQuery(url, BOAT_SEARCH_PARAMS.FROM_DATE, value);
    }

    setFromDate(url, value) {
        return this.queryString.setStringQuery(url, BOAT_SEARCH_PARAMS.FROM_DATE, value);
    }

    removeFromDate(url) {
        return this.queryString.removeStringQuery(url, BOAT_SEARCH_PARAMS.FROM_DATE);
    }
}

export default FromDate;