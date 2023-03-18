import { Character } from "../../interfaces/character.interface";
import CardCharacter from "../cardCharacter/CardCharacter";
import css from "./CardListCharacter.module.css";

const CardListCharacter = ({ characters }: { characters: Character[] }) => {
    return (
        <ul className={css.wrapCards}>
            {characters &&
                characters.map((character: Character) => {
                    return (
                        <li key={character.id}>
                            <CardCharacter character={character} />
                        </li>
                    );
                })}
        </ul>
    );
};

export default CardListCharacter;
