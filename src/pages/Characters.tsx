import rickMortyMob from "../assets/images/rick-morty-mobile.png";
import rickMortyDes from "../assets/images/rick-morty-desktop.png";
import css from "./Characters.module.css";
import SearchInput from "../components/searchInput/SearchInput";
import CardCharacter from "../components/cardCharacter/CardCharacter";
import { useEffect, useState } from "react";
import getSearchCharacters from "../data/getSearchCharacters";
import { Character } from "../interfaces/character.interface";

const Characters = ({ loading }: any) => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const getChacters = async () => {
            try {
                const fetchCharacters = await getSearchCharacters("as");
                console.log(fetchCharacters);
                setCharacters(fetchCharacters.results);
            } catch {
                console.log("first");
            }
        };
        getChacters();
    }, []);

    console.log(loading);

    return (
        <div>
            <img
                className={css.logo}
                src={rickMortyMob}
                srcSet={`${rickMortyMob} 360w, ${rickMortyDes} 600w`}
                alt="Logo"
            />
            <SearchInput />
            <ul>
                {characters &&
                    characters.map((character: Character) => {
                        return (
                            <li key={character.id}>
                                <CardCharacter character={character} />
                            </li>
                        );
                    })}
            </ul>
            {/* <CardCharacter /> */}
        </div>
    );
};

export default Characters;
