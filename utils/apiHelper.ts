import axios from 'axios';

export class ApiHelper {

    static async post(url: string, body: any, headers = {}) {

        return await axios.post(url, body, {
            headers
        });

    }

    static async get(url: string, headers = {}) {

        return await axios.get(url, {
            headers
        });

    }

}