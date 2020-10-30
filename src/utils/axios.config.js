import Axios from "axios";

const AXIOS_DEFAULT = Axios.create({
    baseURL: 'http://192.168.29.173:3000/' 
});

export const HTTP_POST = async(endpoint, data) => {
    const response = await AXIOS_DEFAULT.post(endpoint, data);
    return response;
}

export const HTTP_GET = async(endpoint) => {
    const response = await AXIOS_DEFAULT.get(endpoint);
    return response.data;
}