// import components | hooks
import { Route, Routes, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";

// import pages
import MainPage from "../../pages/MainPage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import NewsPage from "../../pages/NewsPage";
import ProfilePage from "../../pages/ProfilePage";

// import styles
import style from "./RoutesWrapper.module.scss";
import PrivateRoute from "../../hocs/PrivateRoute";

export default function RoutesWrapper() {
    const location = useLocation();
    const transitions = useTransition(location, {
        from: { opacity: 0, y: 100 },
        enter: { opacity: 1, y: 0 },
        leave: { opacity: 0, y: -100 },
    });

    return transitions(() => (
        <animated.div className={style.routesWrapper}>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/profile" element={
					<PrivateRoute>
						<ProfilePage />
					</PrivateRoute>
				} />
            </Routes>
        </animated.div>
    ));
}
