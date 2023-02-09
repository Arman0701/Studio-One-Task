// import hooks
import { useRef } from "react";
import { useDispatch } from "react-redux";

// import action creators
import { addUserPost, initUser } from "../../../redux-store/userSlice";
import { addPost } from "../../../redux-store/newsSlice";

// import helpers
import generateFakeID from "../../../helpers/generateFakeID";

// import style
import style from "./NewPostModal.module.scss";
import getToday from "../../../helpers/getToday";

export default function NewPostModal({ close, currentUser }) {
	const dispatch = useDispatch();
	
    const titleRef = useRef();
    const descRef = useRef();
    const imageUrlRef = useRef();
    const sourceRef = useRef();
    const contentRef = useRef();

    function formSubmitHandler(e) {
        e.preventDefault();
		const postData = {
            id: generateFakeID(),
			author: currentUser[0]?.profile?.name,
			title: titleRef.current.value,
			description: descRef.current.value,
			urlToImage: imageUrlRef.current.value,
			url: sourceRef.current.value,
			publishedAt: getToday(),
			content: contentRef.current.value
		}

		dispatch(addPost(postData))

		dispatch(addUserPost(
			{
				id: currentUser[0]?.id,
				profile: {
				  name: currentUser[0]?.profile?.name,
				  username: currentUser[0]?.profile?.username,
				  password: currentUser[0]?.profile?.password,
				  created: currentUser[0]?.profile?.created,
				  token: currentUser[0]?.profile?.token
				},
				role: currentUser[0]?.role,
				posts: [
					postData,
					...currentUser[0]?.posts,
				]
			}
		))

		// dispatch(initUser(currentUser[0]?.profile.token))

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
