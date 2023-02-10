// import hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import components
import Article from "../Article";

// import action creators
import { initNewsfeed } from "../../../redux-store/newsSlice";

// import styles
import style from "./SearchAndFilter.module.scss";

export default function SearchAndFilter() {
    const dispatch = useDispatch();
    const articles = useSelector((store) => store.newsSlice.value);

    const [searchTerm, setSearchTerm] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        dispatch(initNewsfeed());

        // eslint-disable-next-line
    }, []);

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const filteredArticles = articles?.filter((article) => {
        const searchString = `${article.author} ${article.title} ${article.description}`;
        return (
            searchString.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
                -1 &&
            (!startDate ||
                new Date(article.publishedAt) >= new Date(startDate)) &&
            (!endDate || new Date(article.publishedAt) <= new Date(endDate))
        );
    });

	function scrollToTop() {
		let c = document.documentElement.scrollTop || document.body.scrollTop;
		if (c > 0) {
			window.requestAnimationFrame(scrollToTop);
			window.scrollTo(0, c - c / 8);
		}
	}

    return (
        <div className={style.searchAndFilterWrapper}>
            <div className={style.searchBox}>
                <input
                    type="text"
                    placeholder="Search by author, title, or description"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
                <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                />
            </div>

            {filteredArticles?.length !== articles?.length && (
                <span>Results: {filteredArticles?.length}</span>
            )}

            <div className={style.feed}>
                {filteredArticles?.reverse().map((article, index) => {
                    article = {
                        ...article,
                        index,
                    };
                    return <Article key={article.id} article={article} />;
                })}
                <button onClick={scrollToTop}>Scroll to top</button>
                <p>Copyright 2023</p>
            </div>
        </div>
    );
}
