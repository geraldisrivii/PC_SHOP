import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost/wp-json/wc/v3/',
    headers: { 'Authorization': 'Basic Y2tfNmJjYzQ0OWJjYTBmNTMxZTdlN2I1MTc1ODcwZTkyMTk5NGRkNTY4YTpjc18zYTExODc5MGFhMzA5MTQzNjY5N2YwMjIxZWU3ODdiN2U5MDJiNjI2' }

});


export default instance
