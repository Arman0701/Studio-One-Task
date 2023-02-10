// import hooks
import { useDispatch } from "react-redux";
import { deletePost } from "../../../../redux-store/newsSlice";
import { removeUserPost } from "../../../../redux-store/userSlice";

// import styles
import style from "./ArticleRemoveModal.module.scss";

export default function ArticleRemoveModal({ close, postID }) {
    const dispatch = useDispatch();

    function formSubmitHandler(e) {
        e.preventDefault();

        dispatch(removeUserPost(postID));
		dispatch(deletePost(postID))

        close();
    }

    return (
        <form
            className={style.removeModalWrapper}
            onSubmit={formSubmitHandler}
            onReset={close}
        >
            <h3>Are you sure you want to delete this article ?</h3>
            <div className={style.actions}>
                <button type="reset">Cancel</button>
                <button type="submit" autoFocus>
                    Apply
                </button>
            </div>
        </form>
    );
}
