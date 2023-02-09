// import hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import components
import Article from "../NewsPage/Article";
import NewPostModal from "./NewPostModal";
import Popup from "reactjs-popup";

// import action creators
import { initUser, logout } from "../../redux-store/userSlice";

// import styles
import style from "./ProfilePage.module.scss";

export default function ProfilePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let currentUser = useSelector((store) => store.userSlice.user);

    useEffect(() => {
		if (!currentUser) {
			const userToken = localStorage.getItem("news-app-user");
			if (userToken) {
				dispatch(initUser(userToken));
			} else {
				navigate("/login")
			}
		} 
    }, [currentUser]);

    function logOutHandler() {
        dispatch(logout());
        navigate("/login");
    }

	if (Array.isArray(currentUser) && currentUser.length > 0) {
		currentUser = currentUser[0]
	}
    return (
		<div className={style.profilePageWrapper}>
			<header>
				<span>My Profile</span>
				<button onClick={logOutHandler}>Log out</button>
			</header>

			<section>
				<aside>
					<div className={style.imageWrapper}>
						<img src="" alt="profile" />
					</div>

					<table>
						<tbody>
						<tr>
							<td>Identifier:</td>
							<td>{currentUser?.id || ""}</td>
						</tr>
						{currentUser?.profile && Object.keys(currentUser?.profile).map((key) => {
							if (key === "token") return 
							return (
								<tr key={key}>
									<td>{key}:</td>
									<td>{currentUser?.profile[key]}</td>
								</tr>
							)
						})}
						</tbody>
					</table>

					<Popup
						trigger={<button>Add a new post</button>}
						modal
					>
						{close => <NewPostModal close={close} currentUser={currentUser} />}
					</Popup>				
					
				</aside>
				<main>
					<p>My posts</p>
					{currentUser?.posts?.length > 0 &&
						currentUser?.posts?.map((article, index) => {
							article = {
								...article,
								index,
							};
							return (
								<Article key={article.id} article={article} />
							);
						})}
				</main>
			</section>
		</div>
    );
}
