// import helpers
import convertDate from "../../../helpers/convertDate";
import nthFibonacciNumber from "../../../helpers/nthFibonacciNumber";

// import styles
import style from "./Article.module.scss";

export default function Article({ article }) {
    const {
        author,
        title,
        description,
        url,
        urlToImage,
        publishedAt,
        content,
        id,

        index,
    } = article;

    return (
        <div className={style.articleWrapper}>
			<span>{nthFibonacciNumber(index + 1)}</span>
            <header>
                <a href={url}>{title} | {index}</a>

                <span className={style.author}>{author}</span>
            </header>

            <main>
                <p>{description}</p>
                <div className={style.imageWrapper}>
                    <img src={urlToImage} alt="article" />
                </div>

                <p>{content}</p>
                <footer>
                    <span>{convertDate(publishedAt)}</span>
                </footer>
            </main>
        </div>
    );
}
