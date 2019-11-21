import QueryString from './QueryString';
import { BOAT_SEARCH_PARAMS } from '../Enum';

class Destination {
    constructor() {
        this.queryString = new QueryString();
    }

    getDestination() {
        return this.queryString.get(BOAT_SEARCH_PARAMS.DESINATION);
    }

    addDestination(url, value) {
        return this.queryString.addStringQuery(url, BOAT_SEARCH_PARAMS.DESINATION, value);
    }

    setDestination(url, value) {
        return this.queryString.setStringQuery(url, BOAT_SEARCH_PARAMS.DESINATION, value);
    }

    removeDestination(url) {
        return this.queryString.removeStringQuery(url,BOAT_SEARCH_PARAMS.DESINATION);
    }

}

export default Destination;