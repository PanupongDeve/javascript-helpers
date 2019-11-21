import QueryString from './QueryString';
import { BOAT_SEARCH_PARAMS } from '../Enum';

class PageType {
    constructor() {
        this.queryString = new QueryString();
    }

    getPageType() {
        // more-boat-detail
        // get-a-qoute
        // contact-us
        return this.queryString.get(BOAT_SEARCH_PARAMS.PAGE_TYPE);
    }

    addPageType(url, value) {
        return this.queryString.addStringQuery(url, BOAT_SEARCH_PARAMS.PAGE_TYPE, value);
    }

    setPageType(url, value) {
        return this.queryString.setStringQuery(url, BOAT_SEARCH_PARAMS.PAGE_TYPE, value);
    }

    removePageType(url) {
        return this.queryString.removeStringQuery(url, BOAT_SEARCH_PARAMS.PAGE_TYPE);
    }
}

export default PageType;