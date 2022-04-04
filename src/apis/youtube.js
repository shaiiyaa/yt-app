import axios from "axios";
const KEY = 'AIzaSyASqV0Nt-DP6hKsCV6vddOl1e5dd6fX0DU';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});