import UtilsHelper from '../Helper/UtilsHelper';

class QueryString {
    has(name) {
        const results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return !!results;
    }

    get(name) {
        const results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (!!results) {
            const result = UtilsHelper.replaceString(results[1], '%20', ' ');
            return result;
        } else {
            return null;
        }
        
    }

    checkEmptyQueryString() {
        if (window.location.search === "") {
            return true;
        } else {
            return false;
        }
    }

    getURLWithPath() {
        const { origin, pathname } = window.location;
        return `${origin}${pathname}`;
    }

    addStringQuery(url, name, value) {
        if(url.split('?').length === 1) {
            return `${url}?${name}=${value}`;
        } else {
            return `${url}&${name}=${value}`;
        }
    }


    removeStringQuery(url, parameter) {
        var urlparts = url.split('?');
        if (urlparts.length >= 2) {
            var prefix = encodeURIComponent(parameter) + '=';
            
            var pars = urlparts[1].split(/[&;]/g);
            //reverse iteration as may be destructive
            for (var i = pars.length; i-- > 0;) {    
                //idiom for string.startsWith
                if (pars[i].lastIndexOf(prefix, 0) !== -1) {  
                    pars.splice(i, 1);
                }
            }
    
            return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
        }
        return url;
    }

    setStringQuery(url, parameter, parameterValue) {
        var urlparts = url.split('?');
        if (urlparts.length >= 2) {
            let resultUrl = this.removeStringQuery(url, parameter);
            if(resultUrl.split('?').length === 1) {
                return resultUrl + `?${parameter}=${parameterValue}` 
            } else {
                return resultUrl + `&${parameter}=${parameterValue}`
            }
        }
        return url;
    }

}

export default QueryString;