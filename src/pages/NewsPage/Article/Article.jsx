// import hooks
import { useMemo } from "react";

// import components
import Popup from "reactjs-popup";
import ArticleRemoveModal from "./ArticleRemoveModal";
import EditPostModal from "../../ProfilePage/EditPostModal";

// import helpers
import convertDate from "../../../helpers/convertDate";
import nthFibonacciNumber from "../../../helpers/nthFibonacciNumber";
import checkPrimeNumber from "../../../helpers/checkPrimeNumber";

// import styles
import style from "./Article.module.scss";

export default function Article({ article, forUser }) {
    const {
        author,
        title,
        description,
        url,
        urlToImage,
        publishedAt,
        content,
        index,
		id
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

			{
			forUser && 
				<div className={style.articleActions}>
					<Popup
						trigger={<button>Edit</button>}
						modal
					>
						{close => <EditPostModal close={close} article={article} />}
					</Popup>
					<Popup
						trigger={<button>Delete</button>}
						modal
					>
						{close => <ArticleRemoveModal close={close} postID={id}  />}
					</Popup>
					
				</div>
			}
			
            <header>
                <a href={url}>{title} | {index}</a>

                <span className={style.author}>{author}</span>
            </header>

            <main className={style.articleMain}>
                <p>{description}</p>
                <div className={style.imageWrapper}>
                    <img src={urlToImage} alt="article" />
                </div>

                <p className={style.articleContent}>{content}</p>
                <footer>
                    <span>{convertDate(publishedAt)}</span>
                </footer>
            </main>
        </div>
    );
}
