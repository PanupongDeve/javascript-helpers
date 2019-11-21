import {
    chunk,
    isEmpty,
    orderBy,
    union,
    find,
    assign
} from 'lodash';
import { BOAT_SEARCH_PARAMS } from '../../Enum';
import queryStringHelpers from '../../QueryStringHelpers';
import ObservableService from './ObservableService';
class UtilsHelper {
    BooleanToString(value) {
        if (value === true) {
            return 'true';
        } else if (value === false) {
            return 'false';
        } else {
            return value;
        }
    }

    changeObjectToArray(object) {
        
        if ((!object instanceof Object) || (Array.isArray(object))) {
            throw 'input must object';
        }

        return Object.keys(object).map((key) => {
            const objElm = {
                [key]: object[key]
            }
            
            return objElm;
        });
    }

    cleanNullObject(obj) {
        if ((!obj instanceof Object) || (Array.isArray(obj))) {
            throw 'input must object';
        }

        for (var propName in obj) { 
            if (obj[propName] === null || obj[propName] === undefined) {
              delete obj[propName];
            }
        }
    
        return obj;
    }

    setDefaultValue(valueSelection, defaultValue) {
        if(valueSelection === undefined || valueSelection === null) {
            return defaultValue;
        } else {
            return valueSelection;
        }
    }

    sortArrayByObjectKey(array=[], sortBy = 'asc') {
        if (!(Array.isArray(array))) {
            throw 'input must is Array';
        }
        if (sortBy === 'asc') {
            return array.sort((a,b) => (Object.keys(a)[0] > Object.keys(b)[0]) ? 1 : -1);
        } else if (sortBy === 'desc') {
            return array.sort((a,b) => (Object.keys(a)[0] < Object.keys(b)[0]) ? 1 : -1);
        }
        
    }

    splitHalfArray(data) {
        if (!(Array.isArray(data))) {
            throw 'input must is Array';
        }

        let result = []
        let temp = chunk(data, data.length/2);
        if (temp[2]) {
          temp[1].push(temp[2][0]);
        }
        result.push(temp[0]);
        result.push(temp[1]);
        
        return result;
    }

    validateBoolean(value) {
        if (value === 'true') {
            return true;
        } else if (value === 'false') {
            return false;
        } else {
            return value;
        }
    }

    checkDevice(handleResizeChange) {
        window.addEventListener('resize', (event) => {
            const isMobile = document.body.clientWidth <= 992;
            handleResizeChange(isMobile)
        });
    }

    getPathNameWithParams(pageType) {
        const { search, pathname } = window.location;
        if (search === "") {
            return `${pathname}?${BOAT_SEARCH_PARAMS.PAGE_TYPE}=${pageType}`;
        } else if (queryStringHelpers.pageType.getPageType()) {
            return `${pathname}?${BOAT_SEARCH_PARAMS.PAGE_TYPE}=${pageType}`;
        } else if (search) {
            return `${pathname}${search}&${BOAT_SEARCH_PARAMS.PAGE_TYPE}=${pageType}`;
        } else {
            return pathname;
        }
    }

    selectLanguage(data, lang) {
        if (lang === 'en') {
            return data.en
        } else if (lang === 'fr') {
            return data.fr
        }
    }

    replaceString(sentencnce = '', oldString, newString) {
        if (typeof sentencnce !== 'string') {
            throw 'input must string';
        } 
        
        if (typeof oldString !== 'string') {
            throw 'input must string';
        }
        if (typeof newString !== 'string') {
            throw 'input must string';
        } 

        return sentencnce.replace(oldString, newString);
    }

    isEmpty(value) {
        return isEmpty(value);
    }
    
    filterByMinMax(array=[1,2,3,4,5,6,7,8,9], min, max) {
        if (!(Array.isArray(array))) {
            throw 'input must is Array';
        }
        
        let array_filtered = array;

        array_filtered = array.filter((el) => ( el >= min ) && ( el <= max ));
        return array_filtered;
    }

    orderBy(...inputs) {
        return orderBy(...inputs);
    }

    union(...inputs) {
        inputs.forEach((arrays) => {
            if (!(Array.isArray(arrays))) {
                throw 'input must is Array';
            }
            arrays.forEach((array) => {
                if (array === Object(array)) {
                    throw 'input must permetive type';
                }
            })
        })
        
        return union(...inputs);
    }

    find(...inputs) {
        return find(...inputs);
    }

    cloneObject(object) {
        return {...object}
    }

    objectAssign(...object) {
        return assign(...object);
    }

    encapString(string) {
        if (string.length > 19) {
            string = string.slice(0,13);
            string = string.concat('...');
        }

        return string;
    }

    getObservableClass() {
        return ObservableService;
    }

    checkMinimumZero(value) {
        if(value < 0) {
            return 0;
        } else {
            return value;
        }
    }

}


const getinstance = () => {
    let instance;
    if (!instance) {
        instance = new UtilsHelper();
    }
    return instance;
}


export default getinstance();