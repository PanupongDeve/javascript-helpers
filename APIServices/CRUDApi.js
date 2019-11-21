// https://github.com/axios/axios
import axios from 'axios';

class CRUDApi {
    constructor() {
        this.axios = axios;
    }

    get =  async (url, config = {}) => {
        try {
            const response = await this.axios.get(url,  config);
            return response.data; 
        } catch (error) {
            console.log(error);
        }

        
    }

    post = async (url, data, config = {}) => {
        try {
            const response = await this.axios.post(url, data,  config);
            return response.data; 
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default CRUDApi;


