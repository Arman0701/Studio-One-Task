// import components
import SearchAndFilter from "./SearchAndFilter";

// import styles
import style from "./NewsPage.module.scss";

export default function NewsPage() {
    
    return (
        <div className={style.newsPageWrapper}>
			<SearchAndFilter />
        </div>
    );
}
