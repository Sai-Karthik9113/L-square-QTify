import axios from 'axios';

export const config = {
    endpoint: 'https://qtify-backend-labs.crio.do'
};

// export const fetchAllData = async () => {
//     try {
//         const [topAlbums, newAlbums, songs] = await Promise.all([
//             axios.get (`${config.endpoint}/albums/top`),
//             axios.get (`${config.endpoint}/albums/new`),
//             axios.get (`${config.endpoint}/songs`)
//         ]);

//         return {
//             topAlbums: topAlbums.data,
//             newAlbums: newAlbums.data,
//             songs: songs.data
//         }
//     } catch (error) {
//         console.log(error);
//         return {
//             topAlbums: null,
//             newAlbums: null,
//             songs: null
//         }
//     }
// }

// export const fetchGenre = async () => {
//     try {
//         const response = await axios.get(`${config.endpoint}/genres`);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }