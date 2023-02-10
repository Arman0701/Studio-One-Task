// import components
import Paginate from "./Paginate";
import Controls from "./Controls";

// import styles
import style from "./MainPage.module.scss";

export default function MainPage() {

	
    return <div className={style.mainPageWrapper}>
		<Paginate limit={10} />

		<Controls />
	</div>;
}
