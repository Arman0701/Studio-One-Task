// import hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import action creators
import {
    initMainPage,
    setPaginationLimit,
} from "../../../redux-store/mainPageSlice";

// import styles
import style from "./Paginate.module.scss";

export default function Paginate({ limit }) {
    const dispatch = useDispatch();
    const { onePage, page, lastPage } = useSelector((store) => store.mainPageSlice);

    useEffect(() => {
        const isNumber = typeof limit === "number" && !isNaN(limit);

        if (isNumber) {
            const disp = dispatch(initMainPage());
            disp.then((response) => {
                if (response.meta.requestStatus === "fulfilled") {
                    dispatch(setPaginationLimit(limit));
                }
            });
        }

        // eslint-disable-next-line
    }, []);

	console.log('Log onePage ::: ', onePage)
	console.log('Log page ::: ', page)
	console.log('Log lastPage ::: ', lastPage)
	
    return (
        <>
            <h2>Main Page</h2>
            {onePage.length > 0 ? (
                onePage.map((post) => (<div key={post.id}>
					<p>Post ID: {post.id}</p>
					<p>User ID: {post.userId}</p>
					<p>{post.title}</p>
					{/* <p>{post.body}</p> */}
				</div>))
            ) : (
                <p>No data!</p>
            )}
        </>
    );
}
