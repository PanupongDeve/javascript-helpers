import QueryString from './QueryString';
import { BOAT_SEARCH_PARAMS } from '../Enum';

class ToDate {
    constructor() {
        this.queryString = new QueryString();
    }

    getToDate() {
        return this.queryString.get(BOAT_SEARCH_PARAMS.TO_DATE);
    }

    addToDate(url, value) {
        return this.queryString.addStringQuery(url, BOAT_SEARCH_PARAMS.TO_DATE, value);
    }

    setToDate(url, value) {
        return this.queryString.setStringQuery(url, BOAT_SEARCH_PARAMS.TO_DATE, value);
    }

    removeToDate(url) {
        return this.queryString.removeStringQuery(url, BOAT_SEARCH_PARAMS.TO_DATE);
    }
}

export default ToDate;