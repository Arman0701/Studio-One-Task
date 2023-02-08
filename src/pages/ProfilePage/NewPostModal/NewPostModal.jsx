// import hooks
import { useRef } from "react";
import { useDispatch } from "react-redux";

// import action creators
import { addPost } from "../../../redux-store/userSlice";

// import style
import style from "./NewPostModal.module.scss";

export default function NewPostModal({ close, currentUser }) {
	const dispatch = useDispatch();
	
    const titleRef = useRef();
    const descRef = useRef();
    const imageUrlRef = useRef();
    const sourceRef = useRef();
    const contentRef = useRef();

    function formSubmitHandler(e) {
        e.preventDefault();

		dispatch(addPost({
			author: currentUser[0]?.profile?.name,
			title: titleRef.current.value,
			description: descRef.current.value,
			urlToImage: imageUrlRef.current.value,
			url: sourceRef.current.value,
			content: contentRef.current.value
		}))

        close();
    }

    return (
        <div className={style.modalWrapper}>
            <form onSubmit={formSubmitHandler} onReset={close}>
				<h3>Add a new post</h3>
                <label>
                    <span>Title</span>
                    <input type="text" ref={titleRef} />
                </label>
                <label>
                    <span>Source url</span>
                    <input type="text" ref={sourceRef} />
                </label>
                <label>
                    <span>Image url</span>
                    <input type="text" ref={imageUrlRef} />
                </label>
                <label>
                    <span>Description</span>
                    <textarea ref={descRef} />
                </label>
                <label>
                    <span>Content</span>
                    <textarea ref={contentRef} />
                </label>

                <div className={style.actions}>
                    <button type="reset">Cancel</button>
                    <button type="submit">Apply</button>
                </div>
            </form>
        </div>
    );
}
