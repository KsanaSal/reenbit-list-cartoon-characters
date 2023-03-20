import css from "./SearchInput.module.css";
import searchIcon from "../../assets/icons/search-icon.svg";

const SearchInput = ({ onSearch }: any) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (e.target[0]) {
            onSearch(e.target[0].value);
        }
    };

    return (
        <form className={css.wrap} onSubmit={handleSubmit}>
            <input
                type="search"
                name="search"
                className={css.input}
                placeholder="Filter by name ..."
                autoFocus
                defaultValue={localStorage.getItem("searchString") || ""}
                // onChange={(e) => onChange(e.target.value)}
            />
            <button type="submit" className={css.button}>
                <img src={searchIcon} alt="Search icon" />
            </button>
        </form>
    );
};

export default SearchInput;
