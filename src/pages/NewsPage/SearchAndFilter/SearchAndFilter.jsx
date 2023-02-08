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
		dispatch(initNewsfeed())
		
		// eslint-disable-next-line
	}, [])

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
            searchString.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 &&
            (!startDate || new Date(article.publishedAt) >= new Date(startDate)) &&
            (!endDate || new Date(article.publishedAt) <= new Date(endDate))
        );
    });

    return (
        <div className={style.searchAndFilterWrapper}>
            <input type="text" placeholder="Search by author, title, or description" value={searchTerm} onChange={handleSearchTermChange} />
            <input type="date" value={startDate} onChange={handleStartDateChange} />
            to
            <input type="date" value={endDate} onChange={handleEndDateChange} />
            
			<div className={style.feed}>
                {filteredArticles?.map((article, index) => {
                    article = {
                        ...article,
                        index,
                    };
                    return <Article key={article.id} article={article} />;
                })}
				<span>Copyright 2023</span>
            </div>
        </div>
    );
}