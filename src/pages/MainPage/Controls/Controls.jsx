// import hooks
import { useDispatch, useSelector } from "react-redux";
import { getNextPage, getPrevPage } from "../../../redux-store/mainPageSlice";

// import styles
import style from "./Controls.module.scss";

export default function Controls() {
    const dispatch = useDispatch();
    const page = useSelector((store) => store.mainPageSlice.page);

    function getPrev() {
        dispatch(getPrevPage());
    }

    function getNext() {
        dispatch(getNextPage());
    }

    return (
        <div className={style.controlsWrapper}>
            <button onClick={getPrev}>Previous page</button>
            <p>{page}</p>
            <button onClick={getNext}>Next page</button>
        </div>
    );
}
