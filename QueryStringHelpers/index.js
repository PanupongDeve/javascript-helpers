import QueryString from './QueryString';
import moment from 'moment';
import BoatId from './BoatId';
import PageType from './PageType';
import Destination from './Destination';
import Country from './Country';
import Base from './Base';
import CharterType from './CharterType';
import BoatType from './BoatType';
import BoatModel from './BoatModel';
import FromDate from './FromDate';
import ToDate from './ToDate';

class QueryStringHelpers {
    constructor() {
        this.queryString = new QueryString();
        this.boatId = new BoatId();
        this.pageType = new PageType();
        this.destination = new Destination();
        this.country = new Country();
        this.base = new Base();
        this.charterType = new CharterType();
        this.boatType = new BoatType();
        this.boatModel = new BoatModel();
        this.fromDate = new FromDate();
        this.toDate = new ToDate();
    }

    checkQueryEmptyBoats = () => {
        return this.queryString.checkEmptyQueryString();
    }

    getURLWithPath = () => {
        return this.queryString.getURLWithPath();
    }

    setDefaultQuery = (url) => {
        let defaultURL = url;
        const deteNow =  moment().format('YYYY-MM-DD');
        const NextDate = moment(deteNow).add(7, 'd').format("YYYY-MM-DD");

        defaultURL = this.destination.addDestination(defaultURL, 12);
        defaultURL = this.country.addCountry(defaultURL, 7);
        defaultURL = this.fromDate.addFromDate(defaultURL, deteNow);
        defaultURL = this.toDate.addToDate(defaultURL, NextDate);
        return defaultURL;
    }

    setOnlyQuerySring = () => {
        return this.setDefaultQuery('').split('?')[1];
    }

    splitPathfromURLHost(pathWithost) {
        const splitedPath = pathWithost.split(window.location.host)[1];
        return splitedPath;
    }
    
}

const getinstance = () => {
	let instance;
	if (!instance) {
		instance = new QueryStringHelpers();
	}
	return instance;
};

export default getinstance();