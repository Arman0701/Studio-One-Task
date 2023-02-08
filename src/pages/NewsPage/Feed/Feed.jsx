// import hooks
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import components
import Article from "../Article";

// import action creators
import { initNewsfeed } from "../../../redux-store/newsSlice";

// import styles
import style from "./Feed.module.scss";

export default memo(function () {
	const dispatch = useDispatch();
    const newsfeed = useSelector((store) => store.newsSlice.value);

    useEffect(() => {
        dispatch(initNewsfeed());

        // eslint-disable-next-line
    }, []);
	
    return (
        <div className={style.feedWrapper}>
            {newsfeed?.length > 0 &&
                newsfeed.map((article, index) => {
                    article = {
                        ...article,
                        index,
                    };
                    return <Article key={article.id} article={article} />;
                })}
        </div>
    );
}, () => true);
