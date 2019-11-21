import QueryString from './QueryString';
import { BOAT_SEARCH_PARAMS } from '../Enum';

class BoatModel {
    constructor() {
        this.queryString = new QueryString();
    }

    getBoatModel() {
        return this.queryString.get(BOAT_SEARCH_PARAMS.BOAT_MODEL);
    }

    addBoatModel(url, value) {
        return this.queryString.addStringQuery(url, BOAT_SEARCH_PARAMS.BOAT_MODEL, value);
    }

    setBoatModel(url, value) {
        return this.queryString.setStringQuery(url, BOAT_SEARCH_PARAMS.BOAT_MODEL, value);
    }

    removeBoatModel(url) {
        return this.queryString.removeStringQuery(url,BOAT_SEARCH_PARAMS.BOAT_MODEL);
    }

}

export default BoatModel;