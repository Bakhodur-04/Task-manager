import axios from 'axios'

export default class Info {
    static async getAll() {
        const response = await axios.get(`http://192.168.0.103:7150/1`);
        return response;
    }
}