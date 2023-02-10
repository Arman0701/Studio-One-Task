// import hooks
import { useRef } from "react";
import { useDispatch } from "react-redux";

// import action creators
import { editUserPost } from "../../../redux-store/userSlice";

// import styles
import style from "../NewPostModal/NewPostModal.module.scss";

export default function EditPostModal({ close, article }) {
	const {
        title,
        url,
        urlToImage,
        description,
        content,
    } = article;

	const dispatch = useDispatch();
	
    const titleRef = useRef();
    const descRef = useRef();
    const imageUrlRef = useRef();
    const sourceRef = useRef();
    const contentRef = useRef();
	
	function formSubmitHandler(e) {
		e.preventDefault();

		dispatch(editUserPost({
			...article,
			title: titleRef.current.value,
			url: sourceRef.current.value,
			urlToImage: imageUrlRef.current.value,
			description: descRef.current.value,
			content: contentRef.current.value
		}))
		
		close();
	}
	
    return (
        <div className={style.modalWrapper}>
            <form onSubmit={formSubmitHandler} onReset={close}>
                <h3>Edit post</h3>
                <label>
                    <span>Title</span>
                    <input type="text" ref={titleRef} defaultValue={title} />
                </label>
                <label>
                    <span>Source url</span>
                    <input type="text" ref={sourceRef} defaultValue={url} />
                </label>
                <label>
                    <span>Image url</span>
                    <input type="text" ref={imageUrlRef} defaultValue={urlToImage} />
                </label>
                <label>
                    <span>Description</span>
                    <textarea ref={descRef} defaultValue={description} />
                </label>
                <label>
                    <span>Content</span>
                    <textarea ref={contentRef} defaultValue={content} />
                </label>

                <div className={style.actions}>
                    <button type="reset">Cancel</button>
                    <button type="submit">Apply</button>
                </div>
            </form>
        </div>
    );
}
