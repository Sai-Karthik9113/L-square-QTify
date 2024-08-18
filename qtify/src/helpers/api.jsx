import axios from 'axios';

export const config = {
    endpoint: 'https://qtify-backend-labs.crio.do'
};

export const fetchGenre = async () => {
    try {
        const response = await axios.get(`${config.endpoint}/genres`);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}


// export const fetchTopAlbums = async () => {
//     try {
//         const response = await axios.get(`${config.endpoint}/albums/top`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching top albums:', error);
//         return null;
//     }
// }

// export const fetchNewAlbums = async () => {
//     try {
//         const response = await axios.get(`${config.endpoint}/albums/new`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching new albums:', error);
//         return null;
//     }
// }

// export const fetchSongs = async () => {
//     try {
//         const response = await axios.get(`${config.endpoint}/songs`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching songs:', error);
//         return null;
//     }
// }