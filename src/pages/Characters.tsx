import rickMortyMob from "../assets/images/rick-morty-mobile.png";
import rickMortyDes from "../assets/images/rick-morty-desktop.png";
import css from "./Characters.module.css";
import SearchInput from "../components/searchInput/SearchInput";
import { useEffect, useState } from "react";
import getSearchCharacters from "../data/getSearchCharacters";
import { Character } from "../interfaces/character.interface";
import CardListCharacter from "../components/cardListCharacter/CardListCharacter";

const Characters = ({ loading }: any) => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const fetchCharacters = await getSearchCharacters("rick");
                console.log(fetchCharacters);
                setCharacters(fetchCharacters.results);
            } catch {
                console.log("first");
            }
        };
        getCharacters();
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
            <CardListCharacter characters={characters} />
        </div>
    );
};

export default Characters;
