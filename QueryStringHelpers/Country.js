import QueryString from './QueryString';
import { BOAT_SEARCH_PARAMS } from '../Enum';

class Country {
    constructor() {
        this.queryString = new QueryString();
    }

    getCountry() {
        return this.queryString.get(BOAT_SEARCH_PARAMS.COUNTRY);
    }

    addCountry(url, value) {
        return this.queryString.addStringQuery(url, BOAT_SEARCH_PARAMS.COUNTRY, value);
    }

    setCountry(url, value) {
        return this.queryString.setStringQuery(url, BOAT_SEARCH_PARAMS.COUNTRY, value);
    }

    removeCountry(url) {
        return this.queryString.removeStringQuery(url,BOAT_SEARCH_PARAMS.COUNTRY);
    }

}

export default Country;