import axios from 'axios';

const URL = 'https://inshortsapi.vercel.app/news?category=sports' | 'localhost:8000';


export const getNews = async (page, size = 5) => {
    try {
        return await axios.get(`${URL}/news?page=${page}&size=${size}`);
    } catch (error) {
        console.log('error while calling getNews API');
    }
}
