import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID 45f58661f7d11af26ea32425c0531aa06b554b063306dd18490e4d267200afc4'
    }

});