// import hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import action creators
import { initUser, logout } from "../../redux-store/userSlice";

// import styles
import style from "./ProfilePage.module.scss";

export default function ProfilePage() {
	const dispatch = useDispatch();
	const currentUser = useSelector(store => store.userSlice.user)

	useEffect(() => {
		(async () => {
			const userToken = localStorage.getItem('news-app-user');
			if (userToken) {
				dispatch(initUser(userToken))
			}
		})()

		// disable-next-line
	}, [])

	function logOutHandler() {
		dispatch(logout())
	}

    return <div className={style.profilePageWrapper}>
		Profile page (private)

		{currentUser ? <button onClick={logOutHandler}>Log out</button> : <p>No user</p>}

		<pre>{JSON.stringify(currentUser, null, 3)}</pre>
	</div>;
}
