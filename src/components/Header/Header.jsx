// import hooks
import { useLocation } from "react-router-dom";

// import styles
import style from "./Header.module.scss";

export default function Header() {
    const { pathname } = useLocation();

    return (
        <div className={style.header}>
            <a href="/" className={style.logo}>
                LOGO
            </a>
            <div className={style.actions}>
                <a href="/news">News</a>
                <a href="/profile">Profile</a>
                <a href="/login">Login</a>
            </div>
			<p className={style.title}>Daily news</p>
        </div>
    );
}
