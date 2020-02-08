import axios from 'axios';
import * as Config from './../constants/Config'
export default class HTTP {
    constructor() {
        this.instance = axios.create({
            baseURL: `${Config.API_URL}`,
            //timeout: 1000,
        });
    }

    get(url = '', config = {}) {
        return this.instance.get(url, config)
    }
}