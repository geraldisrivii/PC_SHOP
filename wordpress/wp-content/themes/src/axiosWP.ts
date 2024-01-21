import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://31.129.107.229/wp-json/wp/v2',
    headers: { 'Authorization': 'Basic YWxleGFuZGVyLmZyZWVsYW5jZXI6UDJDWiB5SjZsIGc0b0ggTUdnZyBJeTNVIDUyN1c=' }
});


export default instance
