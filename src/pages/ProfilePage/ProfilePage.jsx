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
    const currentUser = useSelector((store) => store.userSlice.user);

    useEffect(() => {
		const userToken = localStorage.getItem("news-app-user");
		if (userToken) {
			dispatch(initUser(userToken));
		}
    }, []);

    function logOutHandler() {
        dispatch(logout());
        navigate("/login");
    }

    return (
        currentUser && (
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
								<td>{currentUser[0]?.id}</td>
							</tr>
							{Object.keys(currentUser[0].profile).map((key) => {
								if (key === "token") return 
								return (
									<tr key={key}>
										<td>{key}:</td>
										<td>{currentUser[0]?.profile[key]}</td>
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
						{currentUser[0]?.posts?.length > 0 &&
							currentUser[0]?.posts?.map((article, index) => {
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
        )
    );
}
