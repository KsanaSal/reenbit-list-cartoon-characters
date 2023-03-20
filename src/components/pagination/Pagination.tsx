import { useState } from "react";

const Pagination = ({ info, onPageChange }: any) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleClickPrev = () => {
        onPageChange(info.prev);
        console.log("prev");
        // console.log(query);
        setCurrentPage(currentPage - 1);
        // console.log(info.prev);
    };
    const handleClickNext = () => {
        onPageChange(info.next);
        console.log("next");
        setCurrentPage(currentPage + 1);
        // console.log(info.next);
    };

    return (
        <div>
            {info && (
                <>
                    <button onClick={handleClickPrev} disabled={!info.prev}>
                        Prev
                    </button>
                    <div>{currentPage}</div>
                    <button onClick={handleClickNext} disabled={!info.next}>
                        Next
                    </button>
                </>
            )}
        </div>
    );
};

export default Pagination;
