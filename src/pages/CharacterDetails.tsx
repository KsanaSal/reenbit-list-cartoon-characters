import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getCharacterId from "../data/getCharacterId";
import { Character } from "../interfaces/character.interface";

const CharacterDetails = () => {
    const [character, setCharacter] = useState<Character | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const getCharacter = async () => {
            try {
                if (id) {
                    const fetchCharacter = await getCharacterId(Number(id));
                    console.log(fetchCharacter);
                    setCharacter(fetchCharacter);
                }
            } catch {
                console.log("first");
            }
        };
        getCharacter();
    }, [id]);
    console.log(character);

    return (
        <div>
            {character && (
                <>
                    <img src={character.image} alt="Hero" />
                    <h1>{character.name}</h1>
                    <h2>Information</h2>
                    <ul>
                        <li>
                            <h3>Gender</h3>
                            <p>{character.gender}</p>
                        </li>
                        <li>
                            <h3>Status</h3>
                            <p>{character.status}</p>
                        </li>
                        <li>
                            <h3>Specie</h3>
                            <p>{character.species}</p>
                        </li>
                        <li>
                            <h3>Origin</h3>
                            <p>{character.origin.name}</p>
                        </li>
                        <li>
                            <h3>Type</h3>
                            <p>{character.type || "Unknown"}</p>
                        </li>
                    </ul>
                </>
            )}
        </div>
    );
};

export default CharacterDetails;
