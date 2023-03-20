import { useState } from "react";
import css from "./Pagination.module.css";
import arrowRightIcon from "../../assets/icons/arrow-right-icon.svg";
import arrowLeftIcon from "../../assets/icons/arrow-left-icon.svg";

const Pagination = ({ info, onPageChange }: any) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleClickPrev = () => {
        onPageChange(info.prev);
        setCurrentPage(currentPage - 1);
    };
    const handleClickNext = () => {
        onPageChange(info.next);
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className={css.wrapPagination}>
            {info && (
                <>
                    <button
                        onClick={handleClickPrev}
                        disabled={!info.prev}
                        className={`${css.wrapButton} ${
                            !info.prev ? css.disabledButton : ""
                        }`}
                    >
                        <img
                            src={arrowLeftIcon}
                            alt="Left icon"
                            className={!info.prev ? css.icon : ""}
                        />
                    </button>
                    <span className={css.text}>{currentPage}</span>
                    <button
                        onClick={handleClickNext}
                        disabled={!info.next}
                        className={`${css.wrapButton} ${
                            info.next ? "" : css.disabledButton
                        }`}
                    >
                        <img
                            src={arrowRightIcon}
                            alt="Right icon"
                            className={info.next ? "" : css.icon}
                        />
                    </button>
                </>
            )}
        </div>
    );
};

export default Pagination;
