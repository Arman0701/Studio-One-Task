// import hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import components
import Article from "../NewsPage/Article";
import NewPostModal from "./NewPostModal";
import DeleteAccountModal from "./DeleteAccountModal";
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
		// eslint-disable-next-line
    }, [currentUser]);

    function logOutHandler() {
        dispatch(logout());
        navigate("/login");
    }

	function scrollToTop() {
		let c = document.documentElement.scrollTop || document.body.scrollTop;
		if (c > 0) {
			window.requestAnimationFrame(scrollToTop);
			window.scrollTo(0, c - c / 8);
		}
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
							if (key === "token") return null
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
					<Popup
						trigger={<button>Delete account</button>}
						modal
					>
						{close => <DeleteAccountModal close={close} />}
					</Popup>
					
				</aside>
				<main>
					<p>My posts</p>
					{currentUser?.posts?.length > 0 &&
						currentUser?.posts.map((article, index) => {
							article = {
								...article,
								index,
							};
							return (
								<Article key={article.id} article={article} forUser />
							);
						})
					}

					<button onClick={scrollToTop}>Scroll to top</button>
				</main>
			</section>
		</div>
    );
}
