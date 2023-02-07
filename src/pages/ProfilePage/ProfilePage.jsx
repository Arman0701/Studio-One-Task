// import hooks
import { useSelector } from "react-redux";

// import styles
import style from "./ProfilePage.module.scss";

export default function ProfilePage() {
	const currentUser = useSelector(store => store.userSlice)

    return <div className={style.profilePageWrapper}>
		Profile page (private)

		<pre>{JSON.stringify(currentUser, null, 3)}</pre>
	</div>;
}
