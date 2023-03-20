import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getCharacterId from "../data/getCharacterId";
import { Character } from "../interfaces/character.interface";
import arrowBackIcon from "../assets/icons/arrow_back-icon.svg";
import css from "./CharacterDetails.module.css";

const CharacterDetails = () => {
    const [character, setCharacter] = useState<Character | null>(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getCharacter = async () => {
            try {
                if (id) {
                    const fetchCharacter = await getCharacterId(Number(id));
                    console.log(fetchCharacter);
                    setCharacter(fetchCharacter);
                }
            } catch {
                console.log("first");
            } finally {
                setLoading(false);
            }
        };
        getCharacter();
    }, [id]);
    console.log(character);

    return (
        <div>
            <a href="/reenbit-list-cartoon-characters" className={css.link}>
                <img src={arrowBackIcon} alt="Arrow back" />
                GO BACK
            </a>
            {loading && <div className={css.hourglass}></div>}
            {character && (
                <>
                    <div className={css.wrapImage}>
                        <img src={character.image} alt="Hero" />
                    </div>
                    <h1 className={css.title}>{character.name}</h1>
                    <h2 className={css.titleList}>Information</h2>
                    <ul className={css.list}>
                        <li className={css.listItem}>
                            <h3 className={css.itemTitle}>Gender</h3>
                            <p className={css.itemText}>{character.gender}</p>
                        </li>
                        <li className={css.listItem}>
                            <h3 className={css.itemTitle}>Status</h3>
                            <p className={css.itemText}>{character.status}</p>
                        </li>
                        <li className={css.listItem}>
                            <h3 className={css.itemTitle}>Specie</h3>
                            <p className={css.itemText}>{character.species}</p>
                        </li>
                        <li className={css.listItem}>
                            <h3 className={css.itemTitle}>Origin</h3>
                            <p className={css.itemText}>
                                {character.origin.name}
                            </p>
                        </li>
                        <li className={css.listItem}>
                            <h3 className={css.itemTitle}>Type</h3>
                            <p className={css.itemText}>
                                {character.type || "Unknown"}
                            </p>
                        </li>
                    </ul>
                </>
            )}
        </div>
    );
};

export default CharacterDetails;
