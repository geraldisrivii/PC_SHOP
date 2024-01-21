import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost/wp-json/wp/v2',
    headers: { 'Authorization': 'Basic YWxleGFuZGVyLmZyZWVsYW5jZXI6UDJDWiB5SjZsIGc0b0ggTUdnZyBJeTNVIDUyN1c=' }
});


export default instance
