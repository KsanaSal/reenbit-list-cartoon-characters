// import character from "../../assets/character.png";
import { Character } from "../../interfaces/character.interface";
import css from "./CardCharacter.module.css";

const CardCharacter = ({ character }: { character: Character }) => {
    return (
        <a
            className={css.wrapCard}
            href={"/reenbit-list-cartoon-characters/details/" + character.id}
        >
            <img src={character.image} alt="Character" />
            <div className={css.wrapTitle}>
                <h2>{character.name}</h2>
                <h3>{character.species}</h3>
            </div>
        </a>
    );
};

export default CardCharacter;
