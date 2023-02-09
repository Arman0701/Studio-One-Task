// import hooks
import { useMemo } from "react";

// import helpers
import convertDate from "../../../helpers/convertDate";
import nthFibonacciNumber from "../../../helpers/nthFibonacciNumber";
import checkPrimeNumber from "../../../helpers/checkPrimeNumber";

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
        index,
    } = article;

	const calcAndCheck = useMemo(() => {
		const number = nthFibonacciNumber(index + 1)
		const isPrime = checkPrimeNumber(number)

		return {
			number,
			isPrime: isPrime,
		}
		// eslint-disable-next-line
	}, []);

    return (
        <div className={style.articleWrapper}>
			<span style={{
				backgroundColor: calcAndCheck.isPrime ? "lime" : "white"
			}}>{calcAndCheck.number}</span>
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
