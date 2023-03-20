import rickMortyMob from "../assets/images/rick-morty-mobile.png";
import rickMortyDes from "../assets/images/rick-morty-desktop.png";
import css from "./Characters.module.css";
import SearchInput from "../components/searchInput/SearchInput";
import { useEffect, useState } from "react";
import getSearchCharacters from "../data/getSearchCharacters";
import { Character } from "../interfaces/character.interface";
import CardListCharacter from "../components/cardListCharacter/CardListCharacter";
import Pagination from "../components/pagination/Pagination";
import getCharactersPagination from "../data/getCharactersPagination";

const Characters = () => {
    const dataStor = localStorage.getItem("searchString");
    console.log(dataStor);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [info, setInfo] = useState();
    const [searchString, setSearchString] = useState(dataStor || "");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getCharacters = async () => {
            try {
                const fetchCharacters = await getSearchCharacters(searchString);
                console.log(fetchCharacters);
                setCharacters(
                    fetchCharacters.results.sort(
                        (char1: Character, char2: Character) =>
                            char1.name
                                ? char1.name
                                      .toLocaleLowerCase()
                                      .localeCompare(
                                          char2.name.toLocaleLowerCase()
                                      )
                                : 0
                    )
                );
                setInfo(fetchCharacters.info);
            } catch {
                setCharacters([]);
                console.log("first");
            } finally {
                setLoading(false);
            }
        };
        getCharacters();
    }, [searchString]);

    const handlePageClick = async (e: any) => {
        console.log(e);
        const fetchCharacters = await getCharactersPagination(e);
        console.log(fetchCharacters);
        setCharacters(
            fetchCharacters.results.sort((char1: Character, char2: Character) =>
                char1.name
                    ? char1.name
                          .toLocaleLowerCase()
                          .localeCompare(char2.name.toLocaleLowerCase())
                    : 0
            )
        );
        setInfo(fetchCharacters.info);
    };

    const handleSearch = (searchString: string) => {
        setSearchString(searchString);
        localStorage.setItem("searchString", searchString);
        console.log(searchString);
    };

    return (
        <div>
            <img
                className={css.logo}
                src={rickMortyMob}
                srcSet={`${rickMortyMob} 360w, ${rickMortyDes} 600w`}
                alt="Logo"
            />
            <SearchInput onSearch={handleSearch} />
            {loading && <div className={css.hourglass}></div>}
            {characters.length ? (
                <>
                    <CardListCharacter characters={characters} />
                    <Pagination info={info} onPageChange={handlePageClick} />
                </>
            ) : (
                <p className={css.textError}>Not found</p>
            )}
        </div>
    );
};

export default Characters;
