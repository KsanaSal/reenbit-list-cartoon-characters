import axios from "axios";

async function getSearchCharacters(query: string) {
    try {
        const response = await axios.get(
            `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        console.log("rererere");
        return response.data;
    } catch (error) {
        console.log("vfvfvfvf");
        console.error(error);
    }
}

export default getSearchCharacters;
