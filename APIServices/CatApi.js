import CRUDAPI from './CRUDApi';

class CatApiClass {
    constructor(domainApi) {
        this.domainApi = domainApi;
        this.crudApi = new CRUDAPI();
    }

    get = async (url, config) => {
        return await this.crudApi.get(url, config);
    }

    post = async (url, data, config) => {
        return await this.crudApi.post(url, data, config);
    }
}

const CatApi = new CatApiClass('https://reqres.in/api');

export default CatApi;