// import hooks
import { useLocation } from "react-router-dom";

// import styles
import style from "./Header.module.scss";

export default function Header() {
    const { pathname } = useLocation();
	const user = localStorage.getItem("news-app-user")

    return (
        <div className={style.header}>
            <a href="/" className={style.logo}>
                LOGO
            </a>
            <div className={style.actions}>
				<a style={{
					borderColor: pathname === "/" ? "white" : "transparent"
				}} href="/">Home</a>
                <a style={{
					borderColor: pathname === "/news" ? "white" : "transparent"
				}} href="/news">News</a>
                <a style={{
					borderColor: pathname === "/profile" ? "white" : "transparent"
				}} href="/profile">Profile</a>
                {!user && <a style={{
					borderColor: pathname === "/login" ? "white" : "transparent"
				}} href="/login">Login</a>}
            </div>
			<p className={style.title}>Daily news</p>
        </div>
    );
}
