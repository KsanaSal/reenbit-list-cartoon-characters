import axios from "axios";

async function getCharactersPagination(url: string) {
    try {
        const response = await axios.get(`${url}`);

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default getCharactersPagination;
